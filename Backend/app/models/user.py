"""
security.py - Utility functions for password hashing and verification.

Uses bcrypt via passlib to securely hash and verify user passwords.

Author: Ashmy
Created: 28 March 2025
"""

from passlib.context import CryptContext

# Initialize bcrypt hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password: str) -> str:
    """
    Hash the plain-text password using bcrypt.

    Args:
        password (str): The user's plain-text password.

    Returns:
        str: The hashed password.
    """
    return pwd_context.hash(password)


async def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a plain-text password against a hashed password.

    Args:
        plain_password (str): The raw password entered by the user.
        hashed_password (str): The stored hashed password from the database.

    Returns:
        bool: True if passwords match, False otherwise.
    """
    return pwd_context.verify(plain_password, hashed_password)
