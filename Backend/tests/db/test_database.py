# tests/db/test_database.py

# import pytest
# from motor.motor_asyncio import AsyncIOMotorDatabase
# from app.db.database import db

# @pytest.mark.asyncio
# async def test_db_connection():
#     # Check that the db object is an instance of AsyncIOMotorDatabase
#     assert isinstance(db, AsyncIOMotorDatabase)

# @pytest.mark.asyncio
# async def test_db_ping():
#     # Check if the DB is reachable using the 'ping' command
#     result = await db.command("ping")
#     assert result.get("ok") == 1.0
