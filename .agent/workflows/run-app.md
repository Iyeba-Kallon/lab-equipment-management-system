---
description: How to run the Lab Equipment Management System (Frontend and Backend)
---

# Running the Application

This guide explains how to start both the Python backend and the React frontend.

## 1. Backend Setup & Startup (Flask)

The backend is located in the `/backend` directory.

### Initial Setup (First time only)
```bash
cd backend
python -m venv venv
./venv/Scripts/activate
pip install -r requirements.txt
```

### Start Backend
// turbo
```bash
cd backend
./venv/Scripts/activate
python run.py
```
The backend will start at [http://localhost:5000](http://localhost:5000).

---

## 2. Frontend Setup & Startup (Vite/React)

The frontend is located in the `/frontend` directory.

### Initial Setup (First time only)
```bash
cd frontend
npm install
```

### Start Frontend
// turbo
```bash
cd frontend
npm run dev
```
The frontend will usually start at [http://localhost:5173](http://localhost:5173).

---

## 3. Running Both (Alternative)

If you have `docker-compose` installed, you can try running from the root:
```bash
docker-compose up
```
