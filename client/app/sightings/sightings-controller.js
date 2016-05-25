(function() {
  'use strict'

  angular
    .module('sightings-app')
    .controller('SightingsController', SightingsController);

  SightingsController.$inject = ['$scope', '$location', 'dataFactory'];

  function SightingsController($scope, $location, dataFactory) {
    /* jshint validthis: true */
    var vm = this;
    vm.sighting = {};
    vm.message = "Hello World Adam!!"
    vm.sightings = [];
    vm.addNew = addNew;
    vm.remove = remove;
    vm.changeView = changeView;
    fetch();
    
    function fetch() {
      dataFactory.getSightings()
        .then(function(data) {
          console.log(data);
          vm.sightings = data;
        });
    }

    function addNew() {
      dataFactory.addSighting(vm.sighting)
        .then(function(data) {
          $location.path('/sightings');
        });
    }

    function remove() {
      window.alert('Remove this item?');
    }

    function changeView() {
      $location.path('/new');
    }
  }
  
})();
