'use strict';

//Make sure the document is ready before applying jQuery library
$(document).ready(function() {

  //Get Bootstrap dropdowns to work
  $('.dropdown-toggle').dropdown()


  /* Scroll event handler */
  $(window).bind('scroll', function(e) {
    parallaxScroll();
  });

  /* Scroll the background layers */
  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    // $('#layer1').css('top', (0 - (scrolled * .25)) + 'px');
    // $('#layer2').css('top', (0 - (scrolled * .25)) + 'px');
    $('#layer3').css('top', (0 - (scrolled * .75)) + 'px');
    $('#layer4').css('top', (0 - (scrolled * .5)) + 'px');
    $('#layer5').css('top', (0 - (scrolled * .4)) + 'px');
    $('#layer6').css('top', (0 - (scrolled * .2)) + 'px');
    $('#layer7').css('top', (0 - (scrolled * .15)) + 'px');
  }



});
