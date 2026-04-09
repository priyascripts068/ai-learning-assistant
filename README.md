# 🚀 AI Learning Assistant

## 📌 Overview

AI Learning Assistant is a full-stack web application designed to help students study smarter using AI-powered tools.

Users can upload study materials, generate quizzes and flashcards automatically, and interactively practice them — making learning faster, structured, and engaging.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React Icons

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT-based Authentication
- Protected Routes
- User Profile Management
- Change Password

### 🧠 Quiz System
- Generate quizzes from documents
- Interactive quiz interface
- Answer tracking
- View results & retry quizzes

### 🗂️ Flashcards
- Auto-generated flashcards
- Flip-to-reveal answers
- Organized flashcard sets

### 📊 Dashboard
- View all quizzes
- Manage flashcards
- Access uploaded materials

### 🎨 UI/UX
- Fully responsive design
- Loading indicators
- Toast notifications
- Clean UI

---

## 📁 Project Structure
ai-learning-assistant
│
├── backend
│ ├── config
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── upload
│ ├── utils
│ └── server.js
│
├── frontend
│ ├── src
│ │ ├── assets
│ │ ├── components
│ │ ├── context
│ │ ├── pages
│ │ ├── services
│ │ ├── utils
│ │ └── App.jsx
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/priyascripts068/ai-learning-assistant.git  
cd ai-learning-assistant  

---

### 2️⃣ Backend Setup

cd backend  
npm install  

Create a `.env` file inside backend folder:

PORT=8000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
JWT_EXPIRE=7d  

Run backend:

npm run dev  

Backend runs on:

http://localhost:8000  

Expected output:

Server running on port 8000  
MongoDB connected  

---

### 3️⃣ Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend runs on:

http://localhost:5173  

---

## 🔗 API Endpoints

### 📌 Base Routes

/api/auth  
/api/documents  
/api/flashcards  
/api/ai  
/api/quizzes  
/api/progress  

---

### 🔐 Auth Routes

Public  
POST   /api/auth/register  
POST   /api/auth/login  

Protected  
GET    /api/auth/profile  
PUT    /api/auth/profile  
POST   /api/auth/change-password  

---

### 📄 Document Routes (Protected)
git add README.md
POST   /api/documents/upload  
GET    /api/documents/  
GET    /api/documents/:id  
PUT    /api/documents/:id  
DELETE /api/documents/:id  

---

### 🧠 AI Routes (Protected)

POST   /api/ai/generate-flashcards  
POST   /api/ai/generate-quiz  
POST   /api/ai/generate-summary  
POST   /api/ai/chat  
POST   /api/ai/explain-concept  
GET    /api/ai/chat-history/:documentId  

---

### 📝 Quiz Routes (Protected)

GET    /api/quizzes/quiz/:id  
POST   /api/quizzes/:id/submit  
GET    /api/quizzes/:id/results  
DELETE /api/quizzes/:id  
GET    /api/quizzes/:documentId  

---

### 📊 Progress Routes (Protected)

(Define based on your implementation)

---

## 🔒 Authentication Flow

User logs in → receives JWT token  
Token stored in frontend (localStorage)  
Token sent in headers:  

Authorization: Bearer <token>  

Backend middleware validates user access  

---

## 🚀 Future Improvements

- AI-based study summaries  
- Progress tracking system  
- Dark mode  
- Leaderboard for quizzes  
- Mobile optimization  

---

## 💡 Notes

- Use 0.0.0.0/0 in MongoDB Atlas for development access  
- Clear localStorage if facing JWT expired issues  
- Run npm install if dependencies are missing  

---