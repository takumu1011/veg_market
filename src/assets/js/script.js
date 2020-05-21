$(window).on('load', function(){
    $('#loading').addClass('start');
    setTimeout(function() {
        $('#wrapper').addClass('loaded');
        $('#loading').animate({'left': '100%'},1000).hide(1000);
    },2600);
});
$(function() {
    var swiper = new Swiper('.swiper-container', {
        initialSlide: 2,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    $h_height=80;
    $('#navi-chara').on('click',function(){
        $('html,body').animate({scrollTop: $('#p-chara').offset().top - $h_height});
    });
    $('#navi-point').on('click',function(){
        $('html,body').animate({scrollTop: $('#p-point').offset().top - $h_height});
    });
    $('#navi-gallery').on('click',function(){
        $('html,body').animate({scrollTop: $('#p-gallery').offset().top - $h_height});
    });
    $('#navi-access').on('click',function(){
        $('html,body').animate({scrollTop: $('#p-access').offset().top - $h_height});
    });
});

