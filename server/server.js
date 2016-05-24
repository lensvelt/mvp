var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

//Instantiate Express app
var app = express();

//Implement middleware
app.use(morgan('dev')); //log server requests
app.use(bodyParser.json()); //parse requests into JSON

app.use(express.static('client'));
app.use(express.static('bower_components'));

//Define API routes & actions
app.get('/api/sightings', function(req, res) {
  var data = [{
      species: 'lion',
      sex: 'male'
    },
    {
      species: 'leopard',
      sex: 'female'
    },
    {
      species: 'rhino',
      sex: 'female'
    },
    {
      species: 'elephant',
      sex: 'male'
    }];

  //Send 200 OK response and data
  res.status(200).send(data)
});

app.post('/api/sightings', function(req, res) {
  console.log('post request', req.body);
  console.log('post response', res);
  req
});

//Bind and listen for connections on the specified port
app.listen(4000, function() {
  console.log('Connected to server!');
});