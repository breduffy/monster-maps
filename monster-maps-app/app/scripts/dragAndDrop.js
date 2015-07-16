// $(document).ready(function() {
  //Make every clone image unique.

  // $("#dropHere").droppable({
  //   drop: function(e, ui) {
  //     $(this).append($(ui.helper).clone());
  //     //Pointing to the dragImg class in dropHere and add new class.
  //     $("#dropHere .dragImg").addClass("item-" + 1);
  //     //Remove the current class (ui-draggable and dragImg)
  //     $("#dropHere .item-" + 1).removeClass("dragImg").addClass("secondDrag ui-draggable");
  //     $(".item-" + 1).dblclick(function() {
  //       $(this).remove();
  //     });

  //     //make the div draggable --- Not working???
  //     make_draggable($(".item-1"));
  //   }


  // });

//   //Increase the z-index so the clones appear in the right order
//   var zIndex = 0;

//   function make_draggable(elements) {
//     elements.draggable({
//       containment: 'parent',
//       start: function(e, ui) {
//         ui.helper.css('z-index', ++zIndex);
//       },
//       stop: function(e, ui) {}
//     });
//   }

//   console.log('setup happening');
// });
