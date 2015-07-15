$(document).ready(function() {

  var canvas, stage;
  var mouseTarget; // the display object currently under the mouse, or being dragged
  var dragStarted; // indicates whether we are currently in a drag operation
  var offset;
  var update = true;

  canvas = document.getElementById("canvas");
  stage = new createjs.Stage("canvas");
  createjs.Ticker.addEventListener("tick", stage);

  // enable touch interactions if supported on the current device:
  createjs.Touch.enable(stage);

  // enabled mouse over / out events
  stage.enableMouseOver(10);
  stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

  //////CODE TO TRY AND MAKE BITMAPS APPEAR AND BE DRAGGABLE


  ////CREATE JS CODE FOR DRAWING/////////////

  // Set up the container to draw in, and also to get mouse events.
  var wrapper = new createjs.Container();
  wrapper.hitArea = new createjs.Shape(new createjs.Graphics().f("#000").dr(0, 0, 1200, 600));
  wrapper.cache(0, 0, 1200, 600); // Cache it.
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
      drawing.graphics.ss(6, "round").s("#352d39");
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

  // var bitmap = new createjs.Bitmap("images/ship.png");

  var circle = new createjs.Shape();
  circle.graphics.beginFill("blue").drawCircle(0, 0, 10);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);

  circle.on("pressmove", function(evt) {
    evt.target.x = evt.stageX;
    evt.target.y = evt.stageY;

  });
  circle.on("pressup", function(evt) {
    console.log("up");

  })


});
