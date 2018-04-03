/*
Template Name: Cytocean
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
$(function() {

            $('.bxslider').bxSlider({
                //                    auto: true, // 자동 재생
                captions: false, // 캡션 사용 유무(true/false)
                responsive: true,
                minSlides: 1, // 슬라이드 개수
                maxSlides: 1, // 슬라이드 개수
                slideWidth: 1600,

                //                    pause: 2000 // 정지시간

            });
        });
