var express = require('express'); // Importer le module express
var http = require('http');

var app = express();
var port = process.env.PORT || 1234;

var sessionID;

app.use(express.static(__dirname + '/public')); // Lire le fichier public

console.log('The node server is running! :D');

app.get("/", function(req, res) {
  res.render("index");
});

console.log('Le serveur s\'est ouvert correctement.');

var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(port);

io.sockets.on('connection', newConnection);

io.sockets.on('connection', function (socket) {
  socket.on('ping', function() {
    socket.emit('pong');
  });
});

let users = []

function newConnection(socket) {

  socket.on('disconnect', function() {
    console.log('Deconnexion: ' + socket.id);
    users.forEach((user, i) => {
      if(user.id == socket.id) {
        users.pop(i)
      }
    })
  });
  console.log('Connexion: ' + socket.id);
  users.push(new user(socket.id))
  io.sockets.emit('getID', socket.id) // emit à tous les clients

  // Reception de requetes
  socket.on('update', sendInfo);

  function sendInfo(data) {

    users.forEach((user) => {
      if(user.id == socket.id) {
        user.carX = data.carX
        user.carY = data.carY
        user.angle = data.angle
      }
    })

    socket.broadcast.emit('update', users); // Renvoyer l'information à tous les clients sauf le client qui envoit

    // clients = io.engine.clientsCount;
    // socket.broadcast.emit('clientsCount', clients);
    //
    // ping = Date.now();
    // socket.broadcast.emit('pingms', ping);
    // console.log(data);

  }

}

class user {
  constructor(id) {
    this.id = id
    this.carX = 0
    this.carY = 0
    this.angle = 0
  }
}
