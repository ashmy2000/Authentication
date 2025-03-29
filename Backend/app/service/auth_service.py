"""
auth_service.py - Business logic for user authentication and registration.

Handles checking existing users, securely storing hashed passwords,
and verifying login credentials.

Author: Ashmy
Created: 28 March 2025
"""

from app.db.database import db
from app.utils.security import hash_password, verify_password
from app.schemas.user_schema import UserSignup


async def create_user(user: UserSignup) -> bool:
    """
    Create a new user in the database after checking for duplicates.

    Args:
        user (UserSignup): The user signup data.

    Returns:
        bool: True if user is created successfully, False if user already exists.
    """
    existing = await db.users.find_one({"email": user.email})
    if existing:
        return False

    hashed = hash_password(user.password)
    await db.users.insert_one({
        "username": user.username,
        "email": user.email,
        "password": hashed
    })
    return True


async def authenticate_user(email: str, password: str) -> bool:
    """
    Authenticate a user by verifying their email and password.

    Args:
        email (str): The user's email.
        password (str): The raw password entered during login.

    Returns:
        bool: True if credentials are valid, False otherwise.
    """
    user = await db.users.find_one({"email": email})
    if not user:
        return False

    return verify_password(password, user["password"])
