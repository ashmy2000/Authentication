"""
database.py - MongoDB client setup using Motor.

Initialises an asynchronous MongoDB connection using the connection string and
database name defined in the .env file. Used to interact with collections across the app.

Author: Ashmy
Created: 28 March 2025
"""

from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

# Create the MongoDB async client using URI from .env
client: AsyncIOMotorClient = AsyncIOMotorClient(settings.MONGO_URI)

# Reference the MongoDB database using the name from .env
db = client[settings.MONGO_DB_NAME]
