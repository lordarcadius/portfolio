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

    $('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: 'rgba(255, 255, 255, 0.8)',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
    
            }
            if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
                $(".counter").each(function() {
                    var element = $(this);
                    var endVal = parseInt(element.text());
    
                    element.countup(endVal);
                })
    
                countUpFinished = true;


        }


    });

    $("[data-fancybox]").fancybox();
    $(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
    });
    
    $("#filters a").click(function(){
        $("#filters.current").removeClass("current");
        $(this).addClass("current");

         var selector = $(this).attr("data-filter");

         $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
    
});