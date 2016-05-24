var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sightingSchema = new Schema({
  species: { type: String, lowercase : true, required: true },
  sex: { type: String, lowercase : true, default: 'unknown' },
  animal_id: { type: String, lowercase : true, default: 'unknown' },
  location: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

var Sighting = mongoose.model('Sighting', sightingSchema);

