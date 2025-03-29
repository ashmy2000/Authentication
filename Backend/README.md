# 🧠 ToDo List API – Backend (FastAPI + MongoDB)

This is the backend of a full-stack ToDo List application built using **FastAPI** and **MongoDB Atlas**.

It includes authentication features such as:
- ✅ Sign Up
- ✅ Login
- ✅ Password hashing
- ✅ MongoDB integration



## 🚀 Prerequisites

Before running this project locally, make sure you have the following:

- ✅ Python 3.8 or higher installed
- ✅ A MongoDB Atlas account → [https://cloud.mongodb.com](https://cloud.mongodb.com)
- ✅ Create .env file and copy everything from .env.example file 
- ✅ Make Sure to ADD all sensitive informations in this .env ONLY

## 🧩 MongoDB Setup (Atlas)

1. Visit [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a **new project**
3. Create a **free shared cluster**
4. Once the cluster is ready, click **“Connect”**
5. Choose **"MongoDB for VS Code"** or **"Connect using MongoDB Compass"**
6. Copy the connection URI (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`)
7. Inside your `backend/` folder, create a `.env` file and paste the URI:



## 🛠️ Running the Backend Locally
1. Navigate to the backend folder
```bash 
cd backend
```

1. Create a virtual environment
```bash 
python3 -m venv venv
```

1. Activate the virtual environment
```bash 
source venv/bin/activate
```

1. Install dependencies
```bash 
pip install -r requirements.txt
```

1. Start the FastAPI development server
```bash 
uvicorn app.main:app --reload
```


## 🔒 Security
- Passwords are hashed with bcrypt using passlib

- Emails must be valid thanks to EmailStr from pydantic

- No sensitive credentials are hardcoded in the codebase


## 🛡 License
- MIT – Use freely, contribute kindly. 💙


## 🌍 Local Development URLs
1. Homepage (JSON response): http://127.0.0.1:8000

2. Swagger Docs (API Testing): http://127.0.0.1:8000/docs

3. ReDoc (Alternative API docs): http://127.0.0.1:8000/redoc


---
## 🗂️ Project Structure
backend/
...


---
## ℹ️ Helpful Notes for Beginners
- ✅ What does the .env file do?
<br> This file stores private environment variables like your database URI.
FastAPI uses config.py to load values from .env using the pydantic-settings package.

- ✅ What happens if I change MONGO_DB_NAME?
<br>MongoDB Atlas will automatically create a new database with that name when data is inserted.

- ✅ Why restart the server when .env changes?
<br>Because .env values are loaded only once at startup. If you make changes, restart with:

```bash 
uvicorn app.main:app --reload
```

- ✅ Should I commit .env to GitHub?
<br> Never. Add .env to .gitignore. Use .env.example to show other devs what keys are needed.