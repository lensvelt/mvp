(function() {

  angular
    .module('sightings-app')
    .directive('map', map);

    map.$inject = ['$location'];

    function map($location) {
      return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
          console.log(element);
          
          var myOptions = {
              zoom: 14,
              center: new google.maps.LatLng(-24.939602, 31.578375),
              mapTypeId: google.maps.MapTypeId.HYBRID
          };
          var map = new google.maps.Map(document.getElementById(attrs.id), myOptions);

          var boundaryCoords = [                                    //Specify boundary polygon coords
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
          var boundary = new google.maps.Polygon({                          //new Polygon object
            paths: boundaryCoords,                                  //Boundary coords
            strokeColor: '#FF0000',                                 //Boundary colour
            strokeOpacity: 0.5,                                   //Boundary transparency
            strokeWeight: 0.8,                                    //Boundary thickness
            fillColor: '#FF0000',
            fillOpacity: 0.03
            });
          //Draw Toulon boundary
          boundary.setMap(map);

          //Use scope.$apply to run non-angular function inside directive (add event listener)
          var marker;
          scope
            .$apply(
              google.maps.event.addListener(boundary, 'rightclick', function(e) {

                if (marker) {
                  //do nothing
                } else {
                  marker = new google.maps.Marker({
                    position: e.latLng, 
                    map: map
                  })
                  $location.path('/new');
                }
                
              }));

        }
      
    };
  };
})();