import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();

const server = createServer(app);

mongoose.connect('mongodb://localhost/rocketsocket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const io = new Server(server);

io.on('connection', (socket) => {
    console.log(socket.id);
});

app.get('/', (request, response) => {
    return response.json({ message: 'Hello WebSocket' });
});

export { server, io }