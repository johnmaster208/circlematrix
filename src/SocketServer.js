
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);
const io = require('socket.io').listen(server);
console.log('SocketIO server listening to requests on port ' + PORT);
//Server Variables
const selectedCircles = [];
const connections = [];

io.sockets.on('connection', function(socket) {
  connections.push(socket.id);
  socket.emit('activeSocketConnections',connections);
  socket.broadcast.emit('activeSocketConnections', connections);

  // EVENT - DISCONNECT
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    selectedCircles.length = [];
    socket.emit('activeSocketConnections',connections);
    socket.broadcast.emit('activeSocketConnections', connections);
    console.log("Disconnected from socket server.");
  });

  // EVENT - SOCKET CIRCLE SELECT
  socket.on('socketCircleSelect', function(payload) {
    console.log('Circle ' + payload.id + ' is being selected...');
    selectedCircles.push(payload);
    socket.broadcast.emit('addSocketCircleById',payload.id);
  });

  // EVENT - SOCKET CIRCLE UN-SELECT
  socket.on('socketCircleUnSelect', function(payload) {
    console.log("Payload is " + payload);
    selectedCircles.splice(selectedCircles.indexOf(payload), 1);
    socket.broadcast.emit('removeSocketCircleById',payload.id);
  });

  //print out the total number of active connections...
  console.log('Connection established with (' + socket.id + ').');
  console.log('Selected circles:',selectedCircles);
  console.log(connections.length + ' active connections to SocketServer.');
});
