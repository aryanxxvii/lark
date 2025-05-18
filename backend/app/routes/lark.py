from fastapi import APIRouter, HTTPException, Header, Request
from typing import Optional
import time
from datetime import datetime
import os
from ..database import api_keys, api_calls
from ..schemas import LarkRequest, LarkResponse
from bson import ObjectId
from gradio_client import Client
from functools import lru_cache
from app.limiter import limiter

router = APIRouter()

# Initialize Gradio client
client = Client("aryanxxvii/larkapi")

@lru_cache(maxsize=128)
def get_cached_response(audio_url: str, api_key: str):
    """Cache responses based on audio URL and API key"""
    return client.predict(audio_url)

async def validate_api_key(api_key: str):
    # Remove 'Bearer ' if present
    if api_key.startswith('Bearer '):
        api_key = api_key.replace('Bearer ', '')
    
    key = await api_keys.find_one({"key": api_key})
    if not key:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return key

@router.post("/lark", response_model=LarkResponse)
@limiter.limit("10/minute")  # Rate limit: 10 requests per minute per IP
async def process_audio(
    request: Request,
    data: LarkRequest,
    authorization: str = Header(None, description="API key in format: 'Bearer your_api_key' or just 'your_api_key'")
):
    if not authorization:
        raise HTTPException(status_code=401, detail="API key is required")
    
    key = await validate_api_key(authorization)
    
    try:
        # Try to get cached response first
        result = get_cached_response(data.audio_url, authorization)
        
        # Log the API call
        await api_calls.insert_one({
            "api_key_id": key["_id"],
            "timestamp": datetime.utcnow(),
            "endpoint": "lark",
            "status": "success",
            "cached": True
        })
        
        return {"result": result}
        
    except Exception as e:
        await api_calls.insert_one({
            "api_key_id": key["_id"],
            "timestamp": datetime.utcnow(),
            "endpoint": "lark",
            "status": "error",
            "error": str(e)
        })
        raise HTTPException(status_code=500, detail=str(e))