from fastapi import APIRouter, Depends
from ..database import api_calls
from .auth import get_current_user
from typing import Optional
from bson import ObjectId

router = APIRouter()

@router.get("")
async def get_api_calls(
    api_key_id: Optional[str] = None,
    current_user = Depends(get_current_user)
):
    query = {"user_id": current_user["id"]}
    if api_key_id:
        query["api_key_id"] = ObjectId(api_key_id)
    
    cursor = api_calls.find(query).sort("timestamp", -1).limit(100)
    calls = []
    async for doc in cursor:
        calls.append({
            "id": str(doc["_id"]),
            "endpoint": doc["endpoint"],
            "status_code": doc["status_code"],
            "response_time": doc["response_time"],
            "timestamp": doc["timestamp"]
        })
    return calls