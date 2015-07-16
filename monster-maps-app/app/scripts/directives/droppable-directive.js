angular.module('mapApp').directive('dropDirective', dropDirective);


function dropDirective() {

  return {
    restrict: 'A',
    link: function(scope, element) {
      element.droppable({
        drop: function(e, ui) {
          // console.log($(this));
          $(this).append($(ui.helper).clone());

          //Pointing to the dragImg class in dropHere and add new class.
          $("#dropHere .dragImg").addClass("item-" + 1);
          //Remove the current class (ui-draggable and dragImg)
          $("#dropHere .item-" + 1).removeClass("dragImg").addClass("ui-draggable highlight");
          var c = document.getElementById("canvas");
          var ctx = c.getContext("2d");
          var currentImages = document.getElementsByClassName("item-1");
          //Uncomment this line in order to place an image in the upper-corner. This will save.
          // ctx.drawImage(currentImages[currentImages.length - 1], 10, 10);

          $(".item-" + 1).dblclick(function() {
            $(this).remove();
          });

          //make the div draggable --- Not working???
          make_draggable($(".item-1"));
        }
      });

      var zIndex = 0;

      function make_draggable(elements) {
        elements.draggable({
          containment: 'parent',
          start: function(e, ui) {
            ui.helper.css('z-index', ++zIndex);
          },
          stop: function(e, ui) {}
        });
      }
    }
  }
}
