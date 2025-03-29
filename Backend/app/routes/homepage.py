"""
homepage.py - Homepage route for API

This module defines a simple homepage endpoint under the /homepage path,
accessible via the API versioned namespace (e.g., /api/v1/homepage/).

Author: Ashmy
Created: 28 March 2025
"""

from fastapi import APIRouter

# Sub-path for homepage routes
router = APIRouter(
    prefix="/homepage",
    tags=["Homepage"]
)

@router.get("/", summary="Homepage endpoint")
async def homepage() -> dict:
    """
    Returns a simple welcome message.
    
    Returns:
        dict: A message indicating successful access to the homepage.
    """
    return {"message": "Welcome to the API homepage"}
