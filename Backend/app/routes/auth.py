"""
auth.py - FastAPI routes for user authentication

Handles user signup and login endpoints under the /authentication path.

Author: Ashmy
Created: 28 March 2025
"""

from fastapi import APIRouter, HTTPException
from app.schemas.user_schema import UserSignup, UserLogin
from app.service.auth_service import create_user, authenticate_user

# Sub-path: Router prefix or Resource path
router = APIRouter(
    prefix="/authentication",
    tags=["Authentication"]
)

@router.post("/signup", summary="User login endpoint")
async def signup(user: UserSignup) -> dict:
    """
    Create a new user account.

    Args:
        user (UserSignup): The user signup data (username, email, password).

    Returns:
        dict: Success message if user is created, error if already exists.
    """
    success = await create_user(user)
    if not success:
        raise HTTPException(status_code=400, detail="User already exists")
    return {"message": "User created successfully"}


@router.post("/login", summary="User sign up endpoint")
async def login(user: UserLogin) -> dict:
    """
    Authenticate an existing user.

    Args:
        user (UserLogin): Login credentials (email and password).

    Returns:
        dict: Success message if login is valid, else error.
    """
    is_valid = await authenticate_user(user.email, user.password)
    if not is_valid:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}
