$(document).ready(function() {


    tippy('.tippy', {
        theme: 'light',
        size: 'big',
        arrow: true
    });

    tippy('.tippy2', {
        theme: 'light',
        size: 'big',
        arrow: true
    });

});

$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();



    // effect - No3
    var secondAnimation = function() {
        $('.method:eq(0)').delay(1000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(1)').delay(2000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(2)').delay(3000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(3)').delay(4000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(4)').delay(5000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(5)').delay(6000).animate({ opacity: 1 }, 'slow', function() {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
    };

    if (windowWidth <= 576) {
        if (windowScrollTop > 3500) {
            $('.process').css('background', 'tomato');
            secondAnimation();

        }

    }

    if (windowWidth > 576 && windowWidth <= 768) {
        if (windowScrollTop > 3300) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }


    if (windowWidth > 768 && windowWidth <= 992) {
        if (windowScrollTop > 2200) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }

    if (windowWidth > 992) {
        if (windowScrollTop > 2100) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
    }


});