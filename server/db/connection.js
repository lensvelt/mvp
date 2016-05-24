var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sightings');

var db = mongoose.connection();

db.on('error', function(err) {
  console.error.call(console, err);
});
db.once(function() {
  console.log('Database connected!');
});