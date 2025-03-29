"""
security.py - Password hashing and verification utilities.

Provides helper functions to securely hash and verify passwords using bcrypt,
via Passlib’s CryptContext.

Author: Ashmy
Created: 28 March 2025
"""

from passlib.context import CryptContext

# Initialize the Passlib context with bcrypt hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """
    Hash a plain-text password using bcrypt.

    Args:
        password (str): The user's raw password.

    Returns:
        str: The securely hashed password.
    """
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a plain-text password against its hashed counterpart.

    Args:
        plain_password (str): The user's raw input password.
        hashed_password (str): The hashed password from the database.

    Returns:
        bool: True if the password matches, False otherwise.
    """
    return pwd_context.verify(plain_password, hashed_password)
