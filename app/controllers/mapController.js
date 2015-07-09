(function mapControllerIIFE() {

  var MapController = function($scope, $log, $timeout, uiGmapGoogleMapApi) {

    // Define variables for our Map object
    var areaLat = 44.2126995,
      areaLng = -100.2471641,
      areaZoom = 3;

    var events = {
      places_changed: function(searchBox) {
        console.log(searchBox.getPlaces());
      }
    }
    $scope.searchbox = {
      template: 'searchbox.tpl.html',
      events: events
    };


    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {
        center: {
          latitude: areaLat,
          longitude: areaLng
        },
        zoom: areaZoom
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
