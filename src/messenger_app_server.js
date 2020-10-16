const express = require('express')
const app = express()
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const path = require("path")

const doSockets = require("./messenger_app_socket")

const port = 3001

app.get('/resources/:file', (req, res) => {
   res.sendFile(path.resolve(__dirname + "/../site/" + req.params.file))
})
app.get('/', (req, res) => res.sendfile(path.resolve(__dirname+"/../site/messenger_app.html")))

io.on('connection', doSockets(io));

http.listen(port, () => console.log(`My messenger app listening on port ${port}!`))
