let express = require('express');
let app = express();
let server = require('http').Server(app);
let port = 3000;

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

server.listen(port);

console.log('============= Server started ===============');

let io = require('socket.io')(server, {});

io.sockets.on('connection', (socket) => {
    console.log('Socket connection');

    socket.on('create', (room) => {
        console.log('Join room: ' + room + ' socketId: ' + socket.id);
        socket.join(room);
    })
});