from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Dict

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class ApiKeyResponse(BaseModel):
    id: str
    key: str
    created_at: datetime

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class WordFeedback(BaseModel):
    word: str
    phonemes: str
    score: float
    category: str

class LarkRequest(BaseModel):
    data: str  # Base64 encoded audio data

class LarkResponse(BaseModel):
    similarity_score: float
    band: int
    transcription: str