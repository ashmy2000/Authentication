# 🌐 ToDo List – Frontend (React + TypeScript) (LOCAL)

This is the **frontend** of the ToDo List project, built using **React + TypeScript**.
It connects to a FastAPI backend for user authentication and soon, task management.

---

## ✨ What Can You Do So Far?
- ✅ **Sign Up** as a new user
- ✅ **Login** if you're already registered
- ✅ **Forgot Password** UI (no real email is sent – this is for learning/template purposes)

---

## 📦 Prerequisites
Make sure you have the following tools installed:

- ✅ Node.js (v18 or higher recommended)
- ✅ npm (comes with Node.js)
- ✅ The backend API should be running locally first (see `/backend/README.md`)

---

## ⚙️ Local Setup – Step by Step

### 1. Clone the Repository
```bash
git clone https://github.com/ashmy2000/Authentication.git
```

### 2. Navigate to the Frontend Folder
```bash
cd Authentication/frontend
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a file named `.env` in the root of the `/frontend` folder and add the following line:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1/authentication
```
✅ Make sure your backend is running on port 8000.

### 5. Start the React App
```bash
npm start
```

The app will now run on 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🗂 Folder Structure
```bash
frontend/
│
├── build/                # Production build folder
├── public/               # Static files like index.html
├── src/                  # Source code
│   ├── api/              # Axios setup for API calls
│   │   └── auth.ts
│   ├── components/       # Reusable components (Auth form, etc.)
│   │   ├── authform.tsx
│   │   ├── authform.css
│   │   └── forgotpassword.tsx
│   ├── pages/            # UI pages (e.g. Home)
│   │   └── home.ts
│   ├── utils/            # Helper functions (e.g. storage.ts)
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx         # Entry point
│   └── index.css
├── .env.example          # Sample env file
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md             # You're reading it!
```

---

## 💡 Notes for Beginners
- All source code lives inside `/src`
- The app auto-reloads when you save changes
- No MongoDB is needed for frontend – it communicates with the backend
- This project uses **TypeScript** for better development experience

---

## 🤝 Contributions & Feedback
This is a **beginner-friendly** template aimed at students and those new to web development.

📣 Suggestions are welcome — I'm still improving this.
Future projects will build on this foundation (in new repos)!

Check the full project here: [https://github.com/ashmy2000/Authentication](https://github.com/ashmy2000/Authentication)