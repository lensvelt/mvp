var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoose = require('mongoose');

//Database connection & error loggindf
mongoose.connect('mongodb://localhost/sightings');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});
//--------------------------------------

//Define Mongoose data schema
var sightingSchema = new Schema({
  species: { type: String, lowercase : true, required: true },
  sex: { type: String, lowercase : true, default: 'unknown' },
  animal_id: { type: String, lowercase : true, default: 'unknown' },
  location: { type: Number, required: true }
});
  // date : { type: Date, default: Date.now }

//Export an instance of the model
var Sighting = mongoose.model('Sighting', sightingSchema);

module.exports = Sighting; 