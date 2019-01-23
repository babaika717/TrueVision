$('.block8__carousel--init').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick_prev_arrow"></button>',
    nextArrow: '<button class="slick_next_arrow"></button>',
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


// $(window).on('load resize', function () {
//
//     var tabSlider = $('.tab__pict--slider');
//
//     if ( $(window).width() >= '575') {
//         tabSlider.slick("unslick");
//     } else {
//         tabSlider.not(".slick-initialized").slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: true,
//             infinite: true,
//             prevArrow: '<button class="tab_prev_arrow"></button>',
//             nextArrow: '<button class="tab_next_arrow"></button>'
//         });
//     }
//
// });