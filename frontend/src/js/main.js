//make sure sw are supported
if ('serviceWorker' in navigator) {
    console.log('serviceWorker supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_page.js')
            .register('../cache_site.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log('Service Worker: Error: ${err}'));
    });
}

function main() {

(function () {

    //make sure sw are supported
if ('serviceWorker' in navigator) {
    console.log('serviceWorker supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_page.js')
            .register('../cache_site.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log('Service Worker: Error: ${err}'));
    });
}
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();