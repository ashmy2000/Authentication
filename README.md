# ✅ ToDo List Web Application – Full Stack Project (LOCAL)

Welcome to my simple full-stack authentication app! This project allows users to:
- ✅ Sign Up
- ✅ Log In (if already registered)
- ✅ Request a Password Reset Link (mocked)

It securely stores user data using **MongoDB Atlas** and uses **password hashing** to protect credentials. It’s ideal for **students new to coding**, with beginner-friendly structure, clear file naming, and full documentation.

I built this to help **new developers** understand full-stack workflows from scratch — backend, frontend, deployment, and more. You’ll find guides for both local setup and deployment in their respective folders. I'm also open to receiving feedback and suggestions to improve my code and approach!

## 🚀 Deployed Version

This project is deployed on **Render**!

- 🌐 **Frontend:** [authentication-frontend-r2gx.onrender.com](https://authentication-frontend-r2gx.onrender.com)
- 📚 **Backend API Docs (Swagger):** [authentication-backend-f6qn.onrender.com/docs](https://authentication-backend-f6qn.onrender.com/docs)
  
---

## 📁 Project Structure (With File Descriptions)
```
Authentication/ (root)
├── backend/                        # FastAPI backend project
│   ├── app/
│   │   ├── db/
│   │   │   └── database.py         # MongoDB connection setup
│   │   ├── models/
│   │   │   └── user.py             # (Optional) future DB models
│   │   ├── routes/
│   │   │   ├── auth.py             # API routes for login/signup
│   │   │   ├── homepage.py         # Dummy route for testing
│   │   │   └── __init__.py         # Marks routes as a Python package
│   │   ├── schemas/
│   │   │   └── user_schema.py      # Pydantic models for validation
│   │   ├── service/
│   │   │   └── auth_service.py     # Auth business logic (create, login)
│   │   ├── utils/
│   │   │   └── security.py         # Password hashing, JWT helper
│   │   ├── config.py               # Loads env vars with Pydantic Settings
│   │   ├── main.py                 # FastAPI app entry point
│   │   └── __init__.py             # Package initializer
│   ├── .env                        # Actual secrets (excluded from Git)
│   ├── .env.example                # Sample env config for users
│   ├── requirements.txt            # Python dependencies
│   └── README.md                   # Backend setup instructions
│
├── frontend/                      # React + TypeScript frontend
│   ├── public/
│   │   └── index.html             # Main HTML template
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.ts            # Axios functions to call backend
│   │   ├── components/
│   │   │   ├── authform.tsx       # Form used for login/signup
│   │   │   └── forgotpassword.tsx # Forgot password form
│   │   ├── pages/
│   │   │   └── home.tsx           # Landing page after login
│   │   ├── utils/
│   │   │   └── storage.ts         # LocalStorage helpers
│   │   ├── App.tsx                # React root component
│   │   └── index.tsx              # ReactDOM render
│   ├── .env                       # Connects frontend to backend
│   ├── .env.example               # Example env for users
│   ├── package.json               # Project metadata + scripts
│   ├── tsconfig.json              # TypeScript config
│   └── README.md                  # Frontend setup instructions
│
├── .gitignore                     # Ignore sensitive/system files
├── node_modules/                  # Installed dependencies
└── README.md                      # ← You are here (project overview)
```

---

## 💻 How to Run Locally
You’ll need to run frontend and backend separately:

> ❗ These instructions are specifically for running the project locally.  
> If you'd like to deploy it on Render, I recommend using **Generative AI** tools (like ChatGPT or GitHub Copilot) to guide you with `.env` setup, deployment pipelines, and any required changes.
<br><br>Open Backend ReadMe file first then Frontend ReadMe file. 

### 📦 Backend (FastAPI)
- Python 3.8+
- MongoDB Atlas URI in `.env`
- Run using: `uvicorn app.main:app --reload`

### 🎼 Frontend (React + TypeScript)
- Node.js + npm
- API base URL in `.env`
- Run using: `npm start`

Each has its own `README.md` with full local setup instructions.

---

## 🔐 Handling Sensitive Info
All API keys and secrets are managed using a `.env` file.

- This keeps your codebase clean and secure.
- Helps your project stay **dynamic** — when running locally, your URL will be like `http://localhost:8000`, but when deployed (e.g. Render), it will be a hosted URL like `https://your-app.onrender.com`.
- Simply update your `.env` files when switching between environments.

🚨 If you're deploying to **Render**, don’t forget to **update your `.env` with the deployed backend URL** in the frontend folder.

---

## 🛠 Tech Stack

### Backend (FastAPI):
- FastAPI
- Python 3.11
- MongoDB Atlas
- Motor (Async MongoDB Driver)
- Passlib (Password hashing)
- Pydantic & Pydantic Settings
- Uvicorn
- CORS Middleware
- Python-dotenv

### Frontend (React + TypeScript):
- React
- TypeScript
- Axios
- CSS Modules
- React Router DOM (if applicable)
- Environment variables via `.env`

---

## 💼 What This Project Taught Me

| ✅ What I Did                          | 🌟 Role It Matches       | 💬 Why It Matters                        |
|------------------------------------------|------------------------|-----------------------------------------------|
| Wrote Backend Code (FastAPI)             | Backend Dev / SWE      | Created APIs, managed logic                   |
| Wrote Frontend Code (React)              | Frontend Dev           | Built UI and hooked it to API                |
| Connected Frontend & Backend             | Full-Stack Dev         | Handled both client & server sides           |
| Used MongoDB Atlas                       | Backend / DevOps       | Configured DB securely                       |
| Set up auto-deploy on Render             | DevOps Engineer        | Simulated pipelines                          |
| Handled `.env` configs                   | DevOps / Platform Eng  | Managed secrets and variables                |
| Debugged deployment errors               | DevOps                 | Solved logs + errors from deployment         |
| Deployed full app                        | DevOps / Cloud Eng     | Cloud-based hosting & testing                |

---

## 📣 Feedback is Welcome!
This project is still **work in progress**, and suggestions are **super welcome**.

🔄 I plan to build more advanced projects using this authentication as a **base template**, and will post them in separate repositories soon!

🙏 Hope this helps **someone new to coding** start their full-stack journey. If you use it or learn from it, I’d love to hear your thoughts!

