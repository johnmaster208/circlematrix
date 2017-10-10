const io = require('socket.io')();

io.on('connection', client => {
  client.on('socketConnect', (wasConnected) => {
    console.log('Client was connected!', wasConnected);
  })
});

const port = 4008;
io.listen(port);
