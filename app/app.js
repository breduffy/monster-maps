(function mapAppIIFE() {

  var app = angular.module('mapApp', ['uiGmapgoogle-maps', 'ngRoute'])
  app.config(['$routeProvider', 'uiGmapGoogleMapApiProvider',
    function($routeProvider, uiGmapGoogleMapApiProvider) {

      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDJuOArGuaxiLhvyv3BLpnI4zWACD1MJtY',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
      });

      $routeProvider
        .when('/', {
          controller: 'mapController as mapController',
          templateUrl: 'app/views/map.html'
        })

    }
  ]);

})();
