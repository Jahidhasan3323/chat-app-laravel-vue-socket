// const express  = require('express');
// const app      = express();
// const http     = require('http');
// const server   = http.createServer(app);
// const cors =require('cors')
// app.use(cors())
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
// const socket = require("./src/socket");
// socket(server);
app.use(cors());
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: [ "GET", "POST" ]
    }
});
// const io       = new Server(server);
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/resources/views/index.html');
});

server.listen(3001, () => {
    console.log('connection done');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("disconnect", () => {
        console.log('disconect')
    })
    socket.on('created', (data) => {
        console.log('abc', data)
        socket.broadcast.emit('created', data)
    })
    socket.on('chatMessage', (data) => {
        socket.broadcast.emit('chatMessage', data)
    })
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
    socket.on('stopTyping', (data) => {
        socket.broadcast.emit('stopTyping', data)
    })
});
