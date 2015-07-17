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
          //Remove the current class and add new classes
          $("#dropHere .item-" + 1).removeClass("dragImg").addClass("ui-draggable highlight");
          //On doubleclick erase the image
          $(".item-" + 1).dblclick(function() {
            $(this).remove();
          });

          //make the new image draggable
          make_draggable($(".item-1"));
        }
      });

      //Increase the z-index so it goes on top of the previous image
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
