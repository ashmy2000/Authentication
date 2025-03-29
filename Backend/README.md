# 🧠 ToDo List API – Backend (FastAPI + MongoDB) (LOCAL)

This is the **backend** of a full-stack ToDo List app. It handles all API logic including:

- ✅ User Registration (Sign Up)
- ✅ Login & Password Validation
- ✅ Secure Password Hashing
- ✅ MongoDB Atlas Integration

---

## ✅ Prerequisites

Make sure the following are installed/setup before running:

- Python 3.8 or higher
- MongoDB Atlas Account → [https://cloud.mongodb.com](https://cloud.mongodb.com)
- `.env` file created (see `.env.example`)
  - Create .env file and copy all from .env.example and update accordingly.
- All secrets (like MONGO_URI) should be in the `.env` file only

---

## 🧩 MongoDB Atlas Setup (Quick Steps)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a **new project** and a **free shared cluster**
3. Connect to your cluster and choose a method (VS Code or Compass)
4. Copy your connection string (e.g., `mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority`)
5. Paste this inside a new `.env` file like so:

```env
MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster.mongodb.net/?retryWrites=true&w=majority
MONGO_DB_NAME=ToDoList
```

---

## 🛠️ Local Setup – Step by Step
- Create a folder for your project in Files
- Open your desired GUI-based IDE like VS Code
- Open that folder in your GUI-based IDE

1. **Clone the repo:**
```bash
git clone https://github.com/ashmy2000/Authentication.git
```

1. **Navigate to backend directory:**
```bash
cd /backend
```

1. **Create virtual environment:**
```bash
python3 -m venv venv
```

1. **Activate it:**
```bash
source venv/bin/activate  # macOS/Linux
# OR
venv\Scripts\activate  # Windows
```

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

1. **Start the server:**
```bash
uvicorn app.main:app --reload
```

You should now see FastAPI running locally! 🎉
<br> You can now open the frontend ReadMe file now...

---

## 📁 Folder Structure

```
backend/
│
├── app/                    # Core application code
│   ├── __init__.py
│   ├── main.py             # Entry point
│   ├── config.py           # Loads env vars using Pydantic Settings
│   ├── db/
│   │   └── database.py     # MongoDB connection setup
│   ├── models/
│   │   └── user.py         # User model
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py         # Signup, Login, Forgot Password routes
│   │   └── homepage.py     # Root/homepage route
│   ├── schemas/
│   │   └── user_schema.py  # Pydantic request/response models
│   ├── service/
│   │   └── auth_service.py # DB ops & business logic
│   └── utils/
│       └── security.py     # Password hashing helpers
│
├── .env                    # Your secrets (never push this!)
├── .env.example            # Template for required keys
├── requirements.txt        # Python dependencies
├── README.md               # You're reading it!
└── venv/                   # Virtual environment (not pushed)
```

---

## 🔐 Security Measures

- Passwords are hashed using **passlib[bcrypt]**
- Email validation via **Pydantic’s EmailStr**
- `.env` file keeps secrets out of the codebase
- `.env` is **ignored** via `.gitignore`

---

## 📍 Local API URLs

- Root: [http://localhost:8000](http://localhost:8000)
- Swagger Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🧠 Helpful Notes for Beginners

✅ **What is `.env`?**
> Stores secret config values (like DB connection string). It's used via `pydantic-settings` in `config.py`.

✅ **Will MongoDB create the DB if it doesn't exist?**
> Yes! It auto-creates the database name you define in your `.env` when data is added.

✅ **Why restart the server after `.env` change?**
> Because changes don’t auto-reload. Run:
```bash
uvicorn app.main:app --reload
```

✅ **Should `.env` be pushed?**
> ❌ NEVER. Always use `.env.example` for public sharing.

✅ **What does `__init__.py` do?**
> It lets Python treat directories as importable modules.

```python
from app.routes import auth  # ✅ Works because of __init__.py
```

---

## 🛡 License
MIT – Use freely and kindly 💙

---

Let me know if you'd like a section for production deployment or error logging tips!
