// var Sighting = require('./sightingModel.js');

// var queries = {
//   getAll: getAll,
//   addOne: addOne
// };

// //Get all sightings
// function getAll(callback) {
//   console.log('called', Sighting.find().exec());  
//   Sighting.find()
//     .exec(function(error, sightings) {
//       console.log(error, sightings);
//       if (error) {
//         callback(error);
//       } else {
//         callback(null, sightings);
//       }
//     });
// }

// //Add specified sighting
// function addOne(data, callback) {
//   Sighting.create(data)
//     .exec(function(error, added) {
//       if (error) {
//         callback(error);
//       } else {
//         callback(null, added);
//       }
//     });
// }

// module.exports = queries;