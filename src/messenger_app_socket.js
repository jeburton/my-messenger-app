const socketStuff = io => socket => {

  socket.on("JMMessage", msg => { io.emit("JMMessage", msg)})
  socket.on('JBMessage', function(msg){
    io.emit("JBMessage", msg);
  })
  socket.on('RSMessage', msg => io.emit("RSMessage", msg));

}

module.exports = socketStuff;