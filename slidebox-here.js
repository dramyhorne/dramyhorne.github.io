// Slidebox settings ("call us now" slidebox)
$(document).ready(function($) {
    $('#slidebox').slideBox({
        position: 'bottom right', // can be [bottom|middle|top] and [left|center|right]
        appearsFrom: 'right', // can be [left|top|right|bottom]
        slideDuration: 500, // animation duration in ms
        target: '#slidebox-here', // can be a string (jQuery selector) or an offset (in px)
        closeLink: '#close' // a string that is the jQuery selector of the closing element
    })/*.on('sb.hidden', function() {
        console.log('hidden');
    }).on('sb.shown', function() {
        console.log('shown');
    });*/   
});