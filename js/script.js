/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

/************************************************************************
                        PRELOADER
************************************************************************/
$(window).on('load', function(){
    $("#preloader").delay(200).fadeOut("slow");
});

/************************************************************************
                        owlCarousel
************************************************************************/
$(document).ready(function(){
   $("#team-right").owlCarousel({
       items: 2,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>']
   });               
});

$(document).ready(function(){
   $("#progress-elements").waypoint(function(){
       $(".progress-bar").each(function(){
           $(this).animate({
               width: $(this).attr("aria-valuenow")+"%"
           }, 800);
       });
       this.destroy();
   }, {
       offset: 'bottom-in-view'
   }); 
});

/************************************************************************
                        SERVICES
************************************************************************/
$(document).ready(function(){
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});


/************************************************************************
                        PORTFOLIO SECTION
************************************************************************/
$(document).ready(function(){
    $("#isotope-container").isotope({}); //initailizing isotopes
    
    $("#isotope-filters").on("click", "button", function(){
       let filerValue = $(this).attr("data-filter");
        //console.log(filterValue);
        $("#isotope-container").isotope({
           filter: filerValue 
        });
        
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
   $("#portfolio-wrapper").magnificPopup({
       delegate: 'a',
       type: 'image',
       gallery: {
           enabled: true
       },
       zoom: {
           enabled: true,
           duration: 300,
           easing: 'ease-in-out',
           
           opener: function(openerElement){
               return openerElement.is('img') ? openerElement :
               openerElement.find('img');
           }
       }
   }) 
});

/************************************************************************
                        TESTIMONIAL SECTION
************************************************************************/

$(document).ready(function(){
   $("#testimonial-slider").owlCarousel({
       items: 1,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>']
   });               
});

/************************************************************************
                        STATS SECTION
************************************************************************/

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/************************************************************************
                        CLENTS SECTION
************************************************************************/

$(document).ready(function(){
   $("#client-list").owlCarousel({
       items: 6,
       autoplay: true,
       margin: 20,
       loop: true,
       nav: true,
       smartspeed: 700,
       autoplayHoverPause: true,
       dots: false,
       navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
       
       responsive: {
           0:{
               items: 2,
               nav: false
           },
            480:{
               items: 4,
                nav: false
           },
            768:{
               items: 6
           }
       }
   });               
});

/************************************************************************
                        GOOGLE MAPS
************************************************************************/

$(window).on('load', function(){
   var addressString = "302, Evergreen CHS,<br>Airoli, Maharashtra, <br>India";
    var myLatLng = {
      lat: 19.173829,
      lng: 72.953716
    };
    var myMap = new google.maps.Map(document.getElementById('map'),{
       zoom: 17,
        center: myLatLng
    });
    
    var marker = new google.maps.Marker({
       position: myLatLng,
        map: myMap,
        title: "Click to see address!"
    });
    
    var infoWindow = new google.maps.InfoWindow({
       content: addressString 
    });
    marker.addListener('click', function(){
        infoWindow.open(myMap, marker);
    })  
});











