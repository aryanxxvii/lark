from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth_router, api_keys_router, analytics_router, lark_router
from app.routes.auth import get_current_user
from app.limiter import limiter
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

app = FastAPI(title="Lark API Manager")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS middleware configuration
origins = [
    "https://larkapi.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Add rate limiting middleware
app.add_middleware(SlowAPIMiddleware)

# Public routes
app.include_router(auth_router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(lark_router, prefix="/api/v1", tags=["lark"])

# Protected routes (require authentication)
app.include_router(
    api_keys_router,
    prefix="/api/v1/api-keys",
    tags=["api-keys"],
    dependencies=[Depends(get_current_user)]
)
app.include_router(
    analytics_router,
    prefix="/api/v1/analytics",
    tags=["analytics"],
    dependencies=[Depends(get_current_user)]
)