import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const server = createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
    console.log(socket.id);
});

app.get("/", (request, response) => {
    return response.json({ message: "Hello WebSocket" });
});

server.listen(3000, () => {
    console.log('Server is running!')
});