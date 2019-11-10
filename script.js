$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:3
            },
            1000:{
                items:4
            }
        }
  })
});

$(document).ready(function($) {
    $('#slidebox').slideBox({
        position: 'bottom right', // can be [bottom|middle|top] and [left|center|right]
        appearsFrom: 'right', // can be [left|top|right|bottom]
        slideDuration: 500, // animation duration in ms
        target: '#slidebox-here', // can be a string (jQuery selector) or an offset (in px)
        closeLink: '#close' // a string that is the jQuery selector of the closing element
    }).on('sb.hidden', function() {
        console.log('hidden');
    }).on('sb.shown', function() {
        console.log('shown');
    });   
});

window.addEventListener('load', function() {
    let year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
});

