$(document).ready(function() {

  var canvas, stage;
  var mouseTarget; // the display object currently under the mouse, or being dragged
  var dragStarted; // indicates whether we are currently in a drag operation
  var offset;
  var update = true;


  stage = new createjs.Stage("canvas");
  createjs.Ticker.addEventListener("tick", stage);

  // enable touch interactions if supported on the current device:
  createjs.Touch.enable(stage);

  //////CODE TO TRY AND MAKE BITMAPS APPEAR AND BE DRAGGABLE
  // // enabled mouse over / out events
  // stage.enableMouseOver(10);
  // stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

  // // load the source image:
  // var image = new Image();
  // image.src = "./images/ship.png";
  // image.onload = handleImageLoad;

  // function stop() {
  //   createjs.Ticker.removeEventListener("tick", tick);
  // }

  // function handleImageLoad(event) {
  //   var image = event.target;
  //   var bitmap;
  //   var container = new createjs.Container();
  //   stage.addChild(container);
  //   // create and populate the screen with random daisies:
  //   for (var i = 0; i < 100; i++) {
  //     bitmap = new createjs.Bitmap(image);
  //     container.addChild(bitmap);
  //     bitmap.x = canvas.width * Math.random() | 0;
  //     bitmap.y = canvas.height * Math.random() | 0;
  //     bitmap.rotation = 360 * Math.random() | 0;
  //     bitmap.regX = bitmap.image.width / 2 | 0;
  //     bitmap.regY = bitmap.image.height / 2 | 0;
  //     bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.4 + 0.6;
  //     bitmap.name = "bmp_" + i;
  //     bitmap.cursor = "pointer";
  //     // using "on" binds the listener to the scope of the currentTarget by default
  //     // in this case that means it executes in the scope of the button.
  //     bitmap.on("mousedown", function(evt) {
  //       this.parent.addChild(this);
  //       this.offset = {
  //         x: this.x - evt.stageX,
  //         y: this.y - evt.stageY
  //       };
  //     });
  //     // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
  //     bitmap.on("pressmove", function(evt) {
  //       this.x = evt.stageX + this.offset.x;
  //       this.y = evt.stageY + this.offset.y;
  //       // indicate that the stage should be updated on the next tick:
  //       update = true;
  //     });
  //     bitmap.on("rollover", function(evt) {
  //       this.scaleX = this.scaleY = this.scale * 1.2;
  //       update = true;
  //     });
  //     bitmap.on("rollout", function(evt) {
  //       this.scaleX = this.scaleY = this.scale;
  //       update = true;
  //     });
  //   }
  //   examples.hideDistractor();
  //   createjs.Ticker.addEventListener("tick", tick);
  // }

  // function tick(event) {
  //   // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
  //   if (update) {
  //     update = false; // only update once
  //     stage.update(event);
  //   }
  // }

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
      drawing.graphics.ss(6, "round").s("#000066");
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

  var bitmap = new createjs.Bitmap("images/ship.png");

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

  ship = new Image();
  ship.src = 'images/ship.png';
  ship.onload = function(event) {
    var bitmap = new createjs.Bitmap('images/ship.png');
    stage.addChild(bitmap);
    stage.update();
  }


  //This is a test clone for blue square
  $("#test-obj").click(function() {
    $("#test-obj").clone().appendTo("#test-container");
  });


  // $("#test-obj").clone().appendTo("#test-container");

});
