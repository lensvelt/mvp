(function() {
  'use strict'

  angular
    .module('sightings-app')
    .controller('MapController', MapController);

    MapController.$inject = ['$scope'];

    function MapController($scope) {

      var vm = this;
      vm.initialize = initialize;

      //Initialisation function to set up map // uses JQuery to set up listeners
      function initialize() {
         var mapOptions = {                                                                   //Setup the map options
              'center': new google.maps.LatLng(-24.939602, 31.578375),                        //specify map centre
              'mapTypeId': google.maps.MapTypeId.HYBRID,                                    //specify map type
              'zoom': 14                                                                      //set default zoom
          };

        var map = new google.maps.Map(document.getElementById('map-canvas') ,mapOptions);    //draw the map
        map.addListener('dblclick', function(event){
          console.log(event);
          console.log(event.latLng);
        }); //get co-ords of click
        map.addListener('click',drawBoundary(map));               //draw boundary
        // google.maps.event.addListener(map,'dblclick',newSi§ghting(map));               //draw boundary
      }

      //-----------------------------------------------------------------------------
      //REFERENCE: Google Maps API reference per <https://developers.google.com/maps/
      //  documentation/javascript/examples/polygon-simple>
      //-----------------------------------------------------------------------------
      function drawBoundary(map) {

        var toulonCoords = [                                    //Specify boundary polygon coords
          new google.maps.LatLng(-24.9194596, 31.5364185),
          new google.maps.LatLng(-24.9182142, 31.6170135),
          new google.maps.LatLng(-24.9537045, 31.6227642),
          new google.maps.LatLng(-24.956039, 31.5874019),
          new google.maps.LatLng(-24.9521481, 31.5852562),
          new google.maps.LatLng(-24.9528484, 31.5833679),
          new google.maps.LatLng(-24.9562651, 31.5851314),
          new google.maps.LatLng(-24.9584051, 31.5561207),
          new google.maps.LatLng(-24.9194596, 31.5364185),
        ];

        //Instantiate new polygon object for boundary
        var toulonBoundary = new google.maps.Polygon({                          //new Polygon object
          paths: toulonCoords,                                  //Boundary coords
          strokeColor: '#FF0000',                                 //Boundary colour
          strokeOpacity: 0.5,                                   //Boundary transparency
          strokeWeight: 0.8,                                    //Boundary thickness
          fillColor: '#FF0000',
          fillOpacity: 0.03
          });

        //Draw Toulon boundary
        toulonBoundary.setMap(map);
      }

      // function showMarker(map, data) {

      //   var marker = new google.maps.Marker({
      //     position: event.LatLng,
      //     title:"Hello World!"

      //   marker.setMap(map);

      // }

      // function hideMarkers( data, selection) {

      // }

      /* function showSightings(selection) {
        if(typeof selection != 'object') {
          //if is 'All', populate all
        } else {
          switch (selection.species)
          
            case 'lion':
              //code
              
        
        
      } */


    }
})();