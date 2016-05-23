(function() {
  'use strict'

  angular
    .module('sightings-app')
    .controller('SightingsController', SightingsController);

  SightingsController.$inject = ['$scope'];

  function SightingsController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.message = "Hello World Adam!!"
    vm.sightings = [{
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
