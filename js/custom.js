(function(){
  "use strict";

// Preloader
$(window).load(function() { 
    $('#status').fadeOut(); 
    $('#preloader').delay(550).fadeOut('slow'); 
    $('body').delay(550).css({'overflow':'visible'});
})

$(document).ready(function($) {

    //Prevent empty links scroll to top default functionality 
    /* <![CDATA[ */
    ( function( $ ) {
       $( 'a[href="#"]' ).click( function(e) {
          e.preventDefault();
       } );
    } )( jQuery );
    /* ]]> */

     //Alerts
    $('.close').on('click', function(){
      $(this).parent().fadeOut();
    });

    // Hide Horizontal Scroll
    $('html').css('overflow-x', 'hidden');

    // Smooth Scroll to Section
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 800);
            return false;
          }
        }
      });
    });

    //Mobile Nav
    $('.mobile-nav ul').hide();

    $('.show-menu').show();

    $('.show-menu').on('click', function(){
      $('.mobile-nav ul.mobile-nav-menu').toggle();
    });

    $('.mobile-nav-menu li a').on('click', function(){
      $('.mobile-nav ul.mobile-nav-menu').toggle();
    });

    $('ul.mobile-nav-menu div').on('click', function(){
      $('.mobile-nav ul li ul li ul').toggle();
      $(this).next('ul li ul').toggle();
    });

    // Countdown
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
              '<div><p>%w</p><span>Weeks</span></div><div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div><div><p>%S</p><span>Seconds</span></div>'
            ));
        });
    });

    // Countdown Mobile
    $('[data-countdown-mobile]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown-mobile');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
              '<div><p>%D</p><span>Days</span></div><div><p>%H</p><span>Hours</span></div><div><p>%M</p><span>Minutes</span></div>'
            ));
        });
    });

    // Google Map
    function initialize() {
        var myLatlng = new google.maps.LatLng(40.711376, -74.010368);
        var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        draggable: false,
        center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    // RSVP Form
    jQuery('#rsvp-form').ajaxForm(function(data) {
       if (data==1){
         $('#success').fadeIn("slow");
         $('#emailerr').fadeOut("slow");
         $('#servererr').fadeOut("slow");
         $('#rsvp-form').resetForm();
         }
       else if (data==2){
           $('#servererr').fadeIn("slow");
          }
       else if (data==3)
        {
         $('#emailerr').fadeIn("slow");
        }
    });


    // Image Gallery
    var owl = $("#owl-gallery");
 
        owl.owlCarousel({
         
          itemsCustom : [
            [0, 2],
            [400, 3],
            [600, 4],
            [800, 5],
            [1000, 6],
            [1600, 8]
          ],
          navigation : false,
          autoPlay : true,
          pagination : true

    });

    // Scroll Reveal
    // The starting defaults.
    var config = {

        after: '0s',
        enter: 'top',
        move: '60px',
        over: '0.66s',
        easing: 'ease-in-out',
        viewportFactor: 0.33,
        reset: true,
        init: true

    };

    window.scrollReveal = new scrollReveal( config );

});

})();