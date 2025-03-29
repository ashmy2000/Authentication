"""
user_schema.py - Pydantic models for user-related data validation and API payloads.

Includes models for user signup, login, and database storage structures.

Author: Ashmy
Created: 28 March 2025
"""

from pydantic import BaseModel, EmailStr


class UserSignup(BaseModel):
    """
    Schema for user signup requests.

    Attributes:
        username (str): The user's display name.
        email (EmailStr): The user's email address.
        password (str): The user's plain-text password.
    """
    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    """
    Schema for user login requests.

    Attributes:
        email (EmailStr): The user's email address.
        password (str): The user's plain-text password.
    """
    email: EmailStr
    password: str


class User(BaseModel):
    """
    Schema representing a stored user in the database.

    Attributes:
        email (EmailStr): The user's email address.
        password (str): The hashed password.
    """
    email: EmailStr
    password: str

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

