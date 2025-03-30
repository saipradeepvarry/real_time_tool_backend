# Real-Time Document Collaboration Backend

This is the backend for a real-time document collaboration tool using **Node.js, Express, MongoDB, and Socket.io**.

## Features
- User authentication (JWT-based)
- CRUD operations for documents
- Real-time document collaboration using WebSockets
- Secure API with token-based authentication
- CORS support for frontend integration

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Real-time:** Socket.io
- **Environment Variables:** dotenv

---

## Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/saipradeepvarry/real_time_tool_backend.git
cd real_time_tool_backend
```

## Install Dependencies
npm install

## Setup Environment Variables
Create a .env file in the root and add:
PORT=5000
MONGO_URI="mongodb://127.0.0.1:27017/internship"
JWT_SECRET="your_jwt_secret"
CLIENT_URL="http://localhost:3000"

##  Start the Server
npm start

## Folder Structure

backend/
│── config/
│   ├── db.js          # Database connection
│── middleware/
│   ├── auth.js        # Authentication middleware
│── models/
│   ├── Document.js    # Document schema
│   ├── User.js        # User schema
│── routes/
│   ├── authRoutes.js  # Authentication routes
│   ├── documentRoutes.js # Document routes
│── server.js          # Main server file
│── .env               # Environment variables
│── package.json       # Dependencies and scripts

## License
This project is open-source and available under the MIT License.


This **README.md** is fully structured, easy to understand, and GitHub-friendly. 🚀  
Let me know if you need any modifications! 😃

