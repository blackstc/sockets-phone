var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// *** Models *** //

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.get('/controller', function(req, res) {
    //Serve up phone page here.
    res.sendFile(path.join(__dirname, '../client', 'controller.html'));
});

/////////////////
//** SOCKETS **//
/////////////////

var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = app;
