$(document).ready(function() {

  var stage = new createjs.Stage("canvas");
  createjs.Ticker.addEventListener("tick", stage);


  ////CREATE JS CODE FOR DRAWING/////////////

  // Set up the container to draw in, and also to get mouse events.
  var wrapper = new createjs.Container();
  wrapper.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(0, 0, 800, 600));
  wrapper.cache(0, 0, 800, 600); // Cache it.
  stage.addChild(wrapper);

  // Create the shape to draw into
  var drawing = new createjs.Shape();
  wrapper.addChild(drawing);

  var lastPoint = new createjs.Point();

  wrapper.addEventListener("mousedown", function(event) {

    // Store the position. We have to do this because we clear the graphics later.
    lastPoint.x = event.stageX;
    lastPoint.y = event.stageY;

    // Listen for mousemove
    event.addEventListener("mousemove", function(event) {

      // Draw a round line from the last position to the current one.
      drawing.graphics.ss(8, "round").s("#fffffff");
      drawing.graphics.mt(lastPoint.x, lastPoint.y);
      drawing.graphics.lt(event.stageX, event.stageY);

      // Update the last position for next move.
      lastPoint.x = event.stageX;
      lastPoint.y = event.stageY;

      // Draw onto the canvas, and then update the container cache.
      var erase = document.getElementById("toggle").checked;
      wrapper.updateCache(erase ? "destination-out" : "source-over");
      drawing.graphics.clear();
    });
    /////END CREATEJS FOR DRAWING//////////


  });
});
