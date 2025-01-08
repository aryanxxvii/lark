from fastapi import APIRouter, HTTPException, Header
from typing import Optional
import time
from datetime import datetime
import os
from ..database import api_keys, api_calls
from ..schemas import LarkRequest, LarkResponse
from bson import ObjectId
from gradio_client import Client

router = APIRouter()

# Initialize Gradio client
client = Client("aryanxxvii/larkapi")
async def validate_api_key(api_key: str):
    # Remove 'Bearer ' if present
    if api_key.startswith('Bearer '):
        api_key = api_key.replace('Bearer ', '')
    
    key = await api_keys.find_one({"key": api_key})
    if not key:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return key

@router.post("/lark", response_model=LarkResponse)
async def process_audio(
    data: LarkRequest,
    authorization: str = Header(None, description="API key in format: 'Bearer your_api_key' or just 'your_api_key'")
):
    if not authorization:
        raise HTTPException(status_code=401, detail="API key required")
    
    try:
        # Validate API key
        api_key = await validate_api_key(authorization)
        
        # Call ML model using Gradio client
        result = client.predict(
            audioAsB64=data.data,
            api_name="/predict"
        )
        
        # Log API call
        await api_calls.insert_one({
            "api_key_id": api_key["_id"],
            "user_id": api_key["user_id"],
            "endpoint": "/lark",
            "status_code": 200,
            "response_time": time.time(),
            "timestamp": datetime.now()
        })
        
        # Parse and return result
        return LarkResponse(
            similarity_score=result[0],  # Adjust these indices based on 
            band=result[1],             # what your Gradio endpoint returns
            transcription=result[2],
        )
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))