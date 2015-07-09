(function mapControllerIIFE() {

  var MapController = function($scope, $log, $timeout, uiGmapGoogleMapApi) {

    // Define variables for our Map object
    var areaLat = 44.2126995,
      areaLng = -100.2471641,
      areaZoom = 3;

    this.markers = [];
    $scope.marker = {};
    $scope.markers = [];

    var events = {
      places_changed: function(searchBox) {
        var location = searchBox.getPlaces();
        console.log(location[0].geometry.location.D)
        console.log(location[0].geometry.location.k)
        var marker = {
          latitude: location[0].geometry.location.D,
          longitude: location[0].geometry.location.k,
          title: "our first marker",
          id: 1
        };
        $scope.markers.push(marker);
      }
    };

    $scope.searchbox = {
      template: 'searchbox.tpl.html',
      events: events
    };

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
