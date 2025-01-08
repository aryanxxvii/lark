from fastapi import APIRouter, Depends, HTTPException
from ..schemas import ApiKeyResponse
from ..database import api_keys
from .auth import get_current_user
import secrets
from bson import ObjectId
from datetime import datetime

router = APIRouter()

def generate_api_key():
    return f"lark_{secrets.token_urlsafe(32)}"

@router.post("")
async def create_api_key(current_user = Depends(get_current_user)):
    api_key_doc = {
        "user_id": current_user["id"],
        "key": generate_api_key(),
        "created_at": datetime.now()
    }
    
    result = await api_keys.insert_one(api_key_doc)
    
    return ApiKeyResponse(
        id=str(result.inserted_id),
        key=api_key_doc["key"],
        created_at=api_key_doc["created_at"]
    )

@router.get("")
async def get_api_keys(current_user = Depends(get_current_user)):
    cursor = api_keys.find({"user_id": current_user["id"]})
    keys = []
    async for doc in cursor:
        keys.append(ApiKeyResponse(
            id=str(doc["_id"]),
            key=doc["key"],
            created_at=doc["created_at"]
        ))
    return keys

@router.delete("/{key_id}")
async def delete_api_key(key_id: str, current_user = Depends(get_current_user)):
    result = await api_keys.delete_one({
        "_id": ObjectId(key_id),
        "user_id": current_user["id"]
    })
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="API key not found")
    return {"message": "API key deleted"}