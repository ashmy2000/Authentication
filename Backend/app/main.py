"""
main.py - Entry point of the FastAPI application.

This module initialises the FastAPI app, sets up middleware, and includes
versioned API routers such as authentication and homepage.

Author: Ashmy
Created: 28 March 2025
"""

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

# Import routes
from app.routes import auth, homepage

# Initialize FastAPI app & Swagger Info: /docs
app = FastAPI(
    title="ToDo App API",
    description="API backend for To Do List Application.",
    version="1.0.0"
)

# Enable CORS to allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API namespace prefix: /api/v1
api_router = APIRouter(prefix="/api/v1")

# Include individual routers with their sub-paths defined inside
api_router.include_router(auth.router)
api_router.include_router(homepage.router)

# Register the versioned API router
app.include_router(api_router)
