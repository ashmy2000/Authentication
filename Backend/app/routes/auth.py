"""
auth.py - FastAPI routes for user authentication

Handles user signup, login, and forgot password endpoints under the /authentication path.

Author: Ashmy
Created: 28 March 2025
"""

from fastapi import APIRouter, HTTPException
from app.schemas.user_schema import UserSignup, UserLogin, ForgotPasswordRequest
from app.service.auth_service import create_user, authenticate_user, send_reset_link

# Sub-path: Router prefix or Resource path
router = APIRouter(
    prefix="/authentication",
    tags=["Authentication"]
)


@router.post("/signup", summary="User signup endpoint")
async def signup(user: UserSignup) -> dict:
    """
    Create a new user account.

    Args:
        user (UserSignup): The user signup data (username, email, password).

    Returns:
        dict: Success message if user is created, or error if user already exists.
    """
    success = await create_user(user)
    if not success:
        raise HTTPException(status_code=400, detail="User already exists")
    return {"message": "User created successfully"}


@router.post("/login", summary="User login endpoint")
async def login(user: UserLogin) -> dict:
    """
    Authenticate an existing user.

    Args:
        user (UserLogin): Login credentials (email and password).

    Returns:
        dict: Success message if credentials are valid, else error.
    """
    is_valid = await authenticate_user(user.email, user.password)
    if not is_valid:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}


@router.post("/forgot-password", summary="Request password reset link")
async def forgot_password(request: ForgotPasswordRequest) -> dict:
    """
    Sends a password reset email to the user's email address if it exists.

    Args:
        request (ForgotPasswordRequest): Email of the user requesting password reset.

    Returns:
        dict: Message indicating reset link has been sent or error if user not found.
    """
    success = await send_reset_link(request.email)
    if not success:
        raise HTTPException(status_code=404, detail="Email not found")
    return {"message": "Reset link sent to your email"}
