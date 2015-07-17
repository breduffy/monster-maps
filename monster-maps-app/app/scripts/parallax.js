'use strict';

//Make sure the document is ready before applying jQuery library
$(document).ready(function() {


  //Brand scrolls to top
  $('#birdbrand').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  //TO DO: Make it so these scroll to the div, not arbitrary length from top.
  //getting messed up in angular

  //Scroll green pencil icon scroll to sketch area: DOES NOT WORK
  $('.green-icon-pencil').click(function(e) {
    $("html, body").animate({
      scrollTop: 800
    }, 500);
    return false;
  });

  // //Scroll green pencil icon scroll to track area: DOES NOT WORK
  $('.green-icon-binoculars').click(function(e) {
    $("html, body").animate({
      scrollTop: 2200
    }, 500);
    return false;
  });


  // $('.green-icon-pencil').click(function(e) {
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: $("#track-monster-area").offset().top
  //   }, 500);
  // });

  //scroll to sketch a monster
  //Need to specify a content div on the main index
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
      scrollTop: $("#track-monster-area-title").offset().top
    }, 500);
  });


  //PARALLAX!
  // IDEA: the background div is fixed while the image has position absolute (CSS)
  // The images in the foreground scroll faster than the images in the background

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
