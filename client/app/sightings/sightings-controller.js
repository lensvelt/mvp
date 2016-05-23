(function() {
  'use strict'

  angular
    .module('sightings-app')
    .controller('SightingsController', SightingsController);

  // SightingsController.$inject = ['dataFactory'];

  function SightingsController() {
    /* jshint validthis: true */
    var vm = this;

    vm.message = "Hello World"
    vm.sightings = sightings;




    var sightings = [{
      species: 'lion',
      sex: 'male'
    },
    {
      species: 'leopard',
      sex: 'female'
    },
    {
      species: 'elephant',
      sex: 'male'
    }]

  }

})();
