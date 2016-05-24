var Sighting = require('./sightingModel.js');

var queries = {
  getAll: getAll,
  addOne: addOne
};

function getAll(callback) {
  Sighting.find()
    .exec(function(error, sightings) {
      if (error) {
        ccallback(error);
      } else {
        callback(null, sightings);
      }
    });
}

function addOne(data, callback) {
  Sighting.create(data)
    .exec(function(error, added) {
      if (error) {
        callback(error);
      } else {
        callback(null, added);
      }
    });
}


module.exports = queries;