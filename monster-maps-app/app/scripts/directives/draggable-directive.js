angular.module('mapApp').directive('dragDirective', dragDirective);


function dragDirective() {

  return {
    restrict: 'A',
    link: function(scope, element) {
      element.draggable({
        helper: "clone"
        //Create counter
        // start: function() {
        //   counts[0]++;
        // }
      });
    }
  }
}
