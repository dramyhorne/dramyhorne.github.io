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

window.addEventListener('load', function() {
    let year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = year;
});

