# Fullstack Chat Application

A real-time chat application built with **React**, **Express**, **MongoDB**, and **Socket.IO**.

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.IO
- JWT-based authentication
- User search and conversation list
- Responsive UI

## Tech Stack

- **Frontend:** React, React Router, Axios, Tailwind CSS, DaisyUI, Socket.IO Client
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO, JWT, bcrypt

## Folder Structure

```
fullstack chat application/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   ├── context/
│   │   └── assets/
│   ├── index.html
│   └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance

### Backend Setup

1. **Install dependencies:**
    ```bash
    cd backend
    npm install
    ```

2. **Configure environment variables:**  
   Create a `.env` file in the `backend` folder:
    ```
    PORT=8001
    MONGODB_URL=your_mongodb_connection_string
    DB_NAME=chatapp
    CORS_ORIGIN=http://localhost:5173
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_EXPIRY=7d
    ```

3. **Start the backend server:**
    ```bash
    npm run dev
    ```

### Frontend Setup

1. **Install dependencies:**
    ```bash
    cd frontend
    npm install
    ```

2. **Start the frontend dev server:**
    ```bash
    npm run dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

### Socket.IO

- The backend runs Socket.IO on the same port as the Express server (`8001` by default).
- The frontend connects to Socket.IO at `http://localhost:8001`.

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Register a new account or log in.
- Start chatting in real time!

## License

This project is licensed under the MIT License.
