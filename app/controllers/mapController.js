(function mapControllerIIFE() {

  var MapController = function($scope, $log, $timeout, uiGmapGoogleMapApi) {

    // Define variables for our Map object
    var areaLat = 44.2126995,
      areaLng = -100.2471641,
      areaZoom = 3;

    // this.markers = [];
    // $scope.marker = {};
    // $scope.markers = [];

    //attribute an ID to each location
    $scope.count = 0;

    var events = {
      places_changed: function(searchBox) {
        var query = searchBox.getPlaces()[0];
        //create array for location
        var artLocation = {};
        //Get latitude and longitude from google maps search
        artLocation.latitude = query.geometry.location.k;
        artLocation.longitude = query.geometry.location.D;
        //increase id count
        $scope.count++;
        //set id equal to scope
        artLocation.id = $scope.count;
        artLocation.title = location.formatted_address;
        // push id into art array locations
        $scope.artLocations.push(artLocation);
        console.log(query);
      }
    }

    $scope.searchbox = {
      template: 'searchbox.tpl.html',
      events: events
    };

    $scope.artLocations = [];


    // // map marker
    // $scope.marker = {
    //   id: 0,
    //   coords: {
    //     latitude: 7.0933,
    //     longitude: 79.9989
    //   },
    //   options: {
    //     //set this to true if you want the marker draggable
    //     draggable: false,
    //     title: 'The KVK Blog',
    //     animation: 1 // 1: BOUNCE, 2: DROP
    //   }
    // };

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {
        center: {
          latitude: areaLat,
          longitude: areaLng
        },
        zoom: areaZoom,
        draggable: true
      };
      $scope.options = {
        scrollwheel: false
      };

    });

  }

  // MapController.$inject = ['mapFactory', 'appSettings'];

  // The Controller is part of the module.
  angular.module('mapApp').controller('mapController', MapController);

})();
