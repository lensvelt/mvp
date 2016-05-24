(function() {
  'use strict'

  angular
    .module('sightings-app', [
      'ngRoute'])
    .config(configure)
    // .run(appRun);

  configure.$inject = ['$routeProvider'];

  function configure ($routeProvider) {
    $routeProvider
      .when('/sightings', {
        templateUrl: 'app/sightings/sightings.html',
        controller: 'SightingsController'
      })
      .when('/new', {
        templateUrl: 'app/sightings/new.html',
        controller: 'SightingsController'
      })
      .otherwise({
        redirectTo: '/sightings'
      });
  }

  // appRun.$inject = ['MapController'];

  // function appRun (MapController) {
  //   MapController.initialize();
  // }

})();