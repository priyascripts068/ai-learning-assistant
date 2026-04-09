# AI Learning Assistant

## Overview

AI Learning Assistant is a full-stack web application that helps students study more effectively using AI-generated learning tools.
Users can upload learning material, generate quizzes and flashcards automatically, and practice them in an interactive way.

The goal of this project is to make studying **faster, more organized, and interactive**.

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* Lucide React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt.js for password hashing

---

## Features

### Authentication

* User registration
* Secure login system
* JWT based authentication
* Protected routes
* Change password functionality
* User profile page

### Quiz System

* Generate quizzes from uploaded documents
* Interactive quiz interface
* Track selected answers
* View quiz results
* Retry quizzes

### Flashcards

* Automatically generated flashcards
* Flip card to reveal answer
* Organized flashcard sets
* Easy study interface

### Learning Dashboard

* View all created quizzes
* Manage flashcard sets
* Access learning materials

### UI Features

* Responsive design
* Loading spinners
* Empty state UI
* Toast notifications
* Password show/hide feature

---

## Project Structure

```
ai-learning-assistant
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── upload
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   └── App.jsx
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/your-username/ai-learning-assistant.git
cd ai-learning-assistant
```

---

### 2. Setup Backend

Go to the backend folder:

```
cd backend
npm install
```

Create a `.env` file inside the backend folder.

Example:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

Run the backend server:

```
npm run dev
```

Backend will run on:

```
http://localhost:8000
```

---

### 3. Setup Frontend

Open a new terminal and go to the frontend folder:

```
cd frontend
npm install
```

Run the frontend:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---



## Future Improvements

* AI powered study summaries
* Progress tracking system
* Dark mode support
* Leaderboard for quizzes
* Mobile optimized UI

---


