$('.block8__carousel--init').slick({
    infinite: true,
    // autoplay: true,
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