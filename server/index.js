//console.log("Hello, I'm optik ;) ");
const express = require('express');
const http = require('http');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var socketio = require("socket.io")(server);

//middleware
app.use(express.json());

const DB = "mongodb+srv://optik:4gtXCj9fDmS7sG1D@cluster0.8x8dld1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection successful!");
})
.catch((e) => {
    console.log (e);
});

server.listen(port,'0.0.0.0', () => {
    console.log("Server started and running on port " + port);

});







