(function mapControllerIIFE() {

  //TO DO: ADD GEO-LOCATION SO THE IMAGE POPULATES ON SUBMIT

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

    //This is the button for submitting the image
    //TO DO: Get it to save the bitmaps added to the canvas
    $scope.submitCanvas = function() {
      alert('submitting');
      //Set up the canvas and make it a stage
      var canvas = document.getElementById("canvas");
      var stage = new createjs.Stage("canvas");

      //Create a new container to put the bitmaps in
      var container = new createjs.Container();
      var bitmap;
      //Add the container to the stage
      stage.addChild(container);

      //Put the images in the drop area into a variable
      var images = $('#dropHere > img');

      //set the canvas to a variable and make it 2d ontext
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      //All current images have item-1 class
      var currentImages = document.getElementsByClassName("item-1");

      //This iterates through the images on the canvas
      //Gets the x and y coordinated
      for (var i = 0; i < currentImages.length; i++) {
        var x = currentImages[i].offsetLeft;
        var y = currentImages[i].offsetTop;
        console.log(x);
        ctx.drawImage(currentImages[i], x, y);
      }

      //Create a bitmap from the images
      //Add it as a child to the container
      images.each(function(image) {
        bitmap = new createjs.Bitmap(image);
        container.addChild(bitmap);
      });

      //Open the image in a new window
      var newWindow = $('#canvas')[0].toDataURL();
      window.open(newWindow);
    };

    //This is the google map controls
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
  };

  angular.module('mapApp').controller('mapController', MapController);

})();
