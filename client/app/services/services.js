(function() {
  'use strict'

  angular
    .module('sightings-app')
    .factory('dataFactory', dataFactory);

  dataFactory.$inject = ['$http'];

  function dataFactory($http) {
    //Revealing module pattern
    var serviceInstance = {
      initialize: initialize,
      getSightings: getSightings,
      addSighting: addSighting
    };

    return serviceInstance;
    
    //First time load, get all data
    function initialize() {
      return $http.get('/api/sightings')
        .then(function(resp) {
          return resp.data;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function getSightings() {
      return $http.get('/api/sightings')
        .then(function(resp) {
          return resp.data;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

    function addSighting() {
      return $http.post('/api/sightings', data)
        .then(function(resp) {
          return resp;
        })
        .catch(function(err) {
          console.error(err);
        });
    }

  }

})(); 