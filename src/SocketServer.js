
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);
const io = require('socket.io').listen(server);
console.log('SocketIO server listening to requests on port ' + PORT);
//Server Variables
var myCircles = [];
var peerCircles = [];
const connections = [];

function prettyJSON(data) {
  return JSON.stringify(data, undefined, 2);
}

io.sockets.on('connection', function(socket) {
  socket.emit('pushUserSocketId', socket.id);
  connections.push(socket.id);
  socket.emit('activeSocketConnections',connections);
  peerCircles[socket.id] = [];
  // socket.emit('discoverOccupiedCircles', peerCircles);
  socket.broadcast.emit('activeSocketConnections', connections);

  // EVENT - BOOTSTRAP CIRCLE MATRIX
  socket.on('bootstrapCircleMatrix', function() {
    console.log("Firing 'bootstrapCircleMatrix' event...");
    console.log('Receiving request to generate circle matrix for socket user ' + this.id);
    var otherCircles = [];
    for(var i = 0; i < Object.keys(peerCircles).length; i++ ) {
      if(Object.keys(peerCircles)[i] !== this.id) {
        var otherSocketID = Object.keys(peerCircles)[i];
        for ( var z = 0; z < peerCircles[otherSocketID].length; z++) {
          otherCircles.push(peerCircles[otherSocketID][z]["id"]);
        }
      }
    }
    console.log("Contents of othercircles: " + otherCircles);
    socket.emit('peerCirclesLoaded', otherCircles);
  });

  // EVENT - SOCKET CIRCLE SELECT
  socket.on('socketCircleSelect', function(payload) {
    console.log('Circle ' + payload.id + ' is being selected...');
    myCircles.push(payload);
    peerCircles[this.id].push(payload);
    socket.broadcast.emit('addSocketCircleById',payload.id);
    console.log("Here's a list of everyone's circles by socket ID: ", peerCircles);
  });

  // EVENT - SOCKET CIRCLE UN-SELECT
  socket.on('socketCircleUnSelect', function(payload) {
    console.log("Payload is " + payload);
    myCircles.splice(myCircles.indexOf(payload), 1);
    peerCircles[this.id].splice(peerCircles[socket.id].indexOf(payload), 1);
    socket.broadcast.emit('removeSocketCircleById',payload.id);
    console.log("Here's a list of everyone's circles by socket ID: ", peerCircles);
  });

  // EVENT - DISCONNECT
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    delete peerCircles[this.id];
    socket.emit('activeSocketConnections',connections);
    socket.broadcast.emit('activeSocketConnections', connections);
    console.log("Disconnected from socket server.");
  });

  //print out the total number of active connections...
  console.log('Connection established with (' + socket.id + ').');
  //console.log( socket.id + ' noticed the following circles were selected:',myCircles);
  console.log("Here's a list of everyone's circles by socket ID: ", peerCircles);
  //console.log(connections.length + ' active connections to SocketServer.');
});
