"""
config.py - Environment variable handler using pydantic-settings.

This module loads sensitive configurations such as the MongoDB URI and
database name from a .env file using Pydantic's BaseSettings.

Author: Ashmy
Created: 28 March 2025
"""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    Application configuration settings loaded from .env file.

    Attributes:
        MONGO_URI (str): MongoDB connection string.
        MONGO_DB_NAME (str): Name of the MongoDB database to use.
    """
    MONGO_URI: str
    MONGO_DB_NAME: str

    class Config:
        env_file = ".env"  # Automatically loads variables from .env


# Singleton instance for accessing settings
settings = Settings()
