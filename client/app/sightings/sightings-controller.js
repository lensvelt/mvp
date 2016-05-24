(function() {
  'use strict'

  angular
    .module('sightings-app')
    .controller('SightingsController', SightingsController);

  SightingsController.$inject = ['$scope', 'dataFactory'];

  function SightingsController($scope, dataFactory) {
    /* jshint validthis: true */
    var vm = this;

    vm.message = "Hello World Adam!!"
    vm.sightings = fetch;

    // [{
    //   species: 'lion',
    //   sex: 'male'
    // },
    // {
    //   species: 'leopard',
    //   sex: 'female'
    // },
    // {
    //   species: 'elephant',
    //   sex: 'male'
    // }]
    
    fetch();
    
    function fetch() {
      dataFactory.getSightings()
        .then(function(data) {
          console.log(data);
          vm.sightings = data;
        });
    }
  }
  
})();
