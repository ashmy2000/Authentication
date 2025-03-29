# 🌐 ToDo List – Frontend (React + TypeScript)

This is the **frontend** of the ToDo List project. It is built using **React** and **TypeScript**, and it connects to the backend API (FastAPI) to manage user authentication and, soon, tasks.

---

## 📦 Prerequisites

Before running the frontend, make sure you have these installed:

1. ✅ [Node.js](https://nodejs.org/en/) (version 18 or above recommended)
2. ✅ [npm](https://www.npmjs.com/) (comes automatically with Node.js)
3. ✅ The backend API should be running (see `/backend/README.md` for setup)

---

## ⚙️ Local Setup – Step by Step

Follow these simple steps to run the frontend on your computer:

# 1. Go to the frontend folder
```bash
cd frontend
```
# 2. Install all dependencies

```bash
npm install
```
# 3. Start the React development server
```bash
npm start
```
After this, you should see the app running on:
👉 http://localhost:3000

## 🌐 Environment Variable Setup
The frontend uses an .env file to know where to find the backend API.
<br>Create a .env file inside the /frontend folder (if not already present).
<br>Add this line:

```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1/authentication
```
✅ Make sure your backend is running on port 8000.

## 💡 Notes for Beginners
- All the source code is inside the /src folder.

- The app will auto-reload when you make changes in the code.

- You don’t need to install MongoDB for the frontend — it just talks to the backend which handles data storage.