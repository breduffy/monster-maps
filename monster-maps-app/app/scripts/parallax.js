'use strict';

//Make sure the document is ready before applying jQuery library
$(document).ready(function() {

  //Get Bootstrap dropdowns to work
  $('.dropdown-toggle').dropdown()

  //Bran scrolls to top
  $('#birdbrand').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //scroll to sketch a monster
  $('#content').on('click', '#sketch-button', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#sketch-area").offset().top
    }, 500);
  });

  //scroll to track a monster
  $('#content').on('click', '#track-button', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#track-monster-area").offset().top
    }, 500);
  });

  /* Scroll event handler */
  $(window).bind('scroll', function(e) {
    parallaxScroll();
  });

  /* Scroll the background layers */
  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    // $('#layer1').css('top', (0 - (scrolled * .25)) + 'px');
    // $('#layer2').css('top', (0 - (scrolled * .25)) + 'px');
    $('#layer3').css('top', (0 - (scrolled * .8)) + 'px');
    $('#layer4').css('top', (0 - (scrolled * .4)) + 'px');
    $('#layer5').css('top', (0 - (scrolled * .5)) + 'px');
    $('#layer6').css('top', (0 - (scrolled * .2)) + 'px');
    $('#layer7').css('top', (0 - (scrolled * .1)) + 'px');
    $('#layer8').css('top', (0 - (scrolled * .12)) + 'px');
    $('#layer9').css('top', (0 - (scrolled * .06)) + 'px');
  }



});
