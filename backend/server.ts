
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { mockData } from "./mock-data";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app=express();
app.use(cors());

const server=http.createServer(app);

const io=new Server(server,{
    cors:{origin:'*'}
});

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.emit('dashboard-update', mockData());

    setInterval(() => {
      socket.emit('dashboard-update', mockData(true));
    }, 15000); // Update every 15 seconds
});

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})