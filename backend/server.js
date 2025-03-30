const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// Connect to MongoDB
connectDB()
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => {
        console.error('🔥 MongoDB Connection Error:', err);
        process.exit(1);
    });

// CORS Middleware
app.use(cors({ origin: CLIENT_URL, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));

// Socket.io Setup
const io = new Server(server, { cors: { origin: CLIENT_URL } });

io.on('connection', (socket) => {
    console.log('🔗 New WebSocket connection:', socket.id);

    socket.on('joinDocument', (documentId) => {
        socket.join(documentId);
        console.log(`📄 User ${socket.id} joined document ${documentId}`);
    });

    socket.on('documentUpdate', ({ documentId, title, content }) => {
        socket.to(documentId).emit('receiveUpdate', { title, content });
    });

    socket.on('disconnect', () => {
        console.log('❌ User disconnected:', socket.id);
    });
});

// Start Server
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Graceful Shutdown Handling
process.on('SIGINT', () => {
    console.log('🛑 Server shutting down...');
    process.exit();
});

process.on('SIGTERM', () => {
    console.log('🛑 Server terminated.');
    process.exit();
});
