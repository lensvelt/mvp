var Sighting = require('./sightings/sightingModel.js');

exports.getAll = function(req, res) {
// console.log('called', Sighting.find().exec());  
  Sighting.find()
    .exec(function(error, sightings) {
      if (error) {
        res.status(500).send();
      } else {
        res.status(200).send(sightings);
      }
    });
};  

exports.addOne = function(req, res) {
 console.log(req.body);
 Sighting.create(req.body, function(error, sighting) {
  // console.log(data);
  // console.log(sighting);
    if (error) { //send server error
      res.status(500).send(error);
    } else { //Added ok
      res.status(200).send(sighting);
    }
  });
};