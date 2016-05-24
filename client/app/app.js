(function() {
  'use strict'

  angular
    .module('sightings-app', [
      'ngRoute'])
    .config(configure);
    // .run(appRun);

  configure.$inject = ['$routeProvider'];

  function configure ($routeProvider) {
    $routeProvider
      .when('/sightings', {
        templateUrl: 'app/sightings/sightings.html',
        controller: 'SightingsController'
      })
      .when('/new', {
        templateUrl: 'sightings/new.html',
        controller: 'SightingsCtrl',
        controllerAs: 'Sightings'
      })
      .otherwise({
        redirectTo: '/sightings'
      });
  }

  // appRun.$inject = [];

  // function appRun () {

  // }


})();