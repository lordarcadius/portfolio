$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Android Developer", "Kernel Developer", "Student"],
        typeSpeed: 50,
        loop: true,
        startDelay: 400,
        showCursor: false

    });
});