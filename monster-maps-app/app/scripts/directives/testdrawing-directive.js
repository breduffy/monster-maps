angular.module('mapApp').directive('testdrawingDirective', testdrawingDirective);


function testdrawingDirective() {

  return {

    restrict: "A",
    link: function(scope, element) {
      //Make sure it's a 2D context
      var ctx = element[0].getContext('2d');

      // variable that decides if something should be drawn on mousemove
      var drawing = false;

      // the last coordinates before the current move
      var lastX;
      var lastY;

      //Bind the data on mouse down at x,y coordinates
      element.bind('mousedown', function(event) {
        if (event.offsetX !== undefined) {
          lastX = event.offsetX;
          lastY = event.offsetY;
        } else { // Firefox compatibility
          lastX = event.layerX - event.currentTarget.offsetLeft;
          lastY = event.layerY - event.currentTarget.offsetTop;
        }

        // begins new line
        ctx.beginPath();

        //Set drawing to true
        drawing = true;
      });

      //On mouse move bind the coordinates
      element.bind('mousemove', function(event) {
        if (drawing) {
          // get current mouse position
          if (event.offsetX !== undefined) {
            currentX = event.offsetX;
            currentY = event.offsetY;
          } else {
            currentX = event.layerX - event.currentTarget.offsetLeft;
            currentY = event.layerY - event.currentTarget.offsetTop;
          }

          draw(lastX, lastY, currentX, currentY);

          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
        }

      });
      //Stop the drawing on mouseup
      element.bind('mouseup', function(event) {
        // stop drawing
        drawing = false;
      });

      // canvas reset
      function reset() {
        element[0].width = element[0].width;
      }

      //Set the drawing properties
      function draw(lX, lY, cX, cY) {
        // line from
        ctx.moveTo(lX, lY);
        // to
        ctx.lineTo(cX, cY);
        //width
        ctx.lineWidth = 4;
        // color
        // ctx.graphics.ss(6, "round").s("blue");
        ctx.strokeStyle = "#352D39";
        // draw it
        ctx.stroke();
      }

      //Attempt to make erase work
      // Draw onto the canvas, and then update the container cache.
      // var erase = document.getElementById("toggle").checked;
      // element.updateCache(erase ? "destination-out" : "source-over");
      // drawing.graphics.clear();
    }
  };
};
