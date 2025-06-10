import {Server} from 'socket.io';
import http from 'http';
import express from 'express';
const app = express()
const server=http.createServer(app);
const io= new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        
    }
});
export const getreceiversocketid=(receiverId)=>{
    return users[receiverId] || null; // Return the socket ID for the given receiver ID, or null if not found

}
const users={}
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    const userId=socket.handshake.query.userId;
    if(userId) {
        users[userId] = socket.id; // Store the user ID and socket ID
        console.log(`User ${userId} connected with socket ID: ${socket.id}`);
    }
    io.emit("getonlineuser",Object.keys(users)); // Emit the list of online users to all clients
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete users[userId]; // Remove the user from the online users list
        io.emit("deleteuser", Object.keys(users)); // Notify all clients about the disconnection
    });
})
export { io, server, app };



