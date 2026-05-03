
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { mockData } from "./mock-data";

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
    }, 10000); // Update every 10 seconds
});

server.listen(3000,()=>{
    console.log('server listening port 3000');
})