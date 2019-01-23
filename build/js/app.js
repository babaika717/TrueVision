$(document).ready(function () {


//arrow scroll down

$('.scale__arrow--wrapper').click(function(e) {

    e.preventDefault();
    $('body, html').animate({
        scrollTop : $("#block-1").offset().top
    }, 1200);

});

//tabs

    $('.tabs__list--item').on('click', function(e) {
        var currentAttrValue = $(this).children().attr('href');
        $('.tabs ' + currentAttrValue).fadeIn(500).siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

//video

    $("#video1").on("ended", function (){
        this.src = this.src
    });

//calculator
    //step 1

    // step 2
    $('.const__item--label').on('click', function () {
       $('.checked').removeClass('checked');
       $(this).addClass('checked');
    });
    
    // step 3
    $('.const__item--text').on('click', function () {
        $('.checked_arch').removeClass('checked_arch');
        $(this).addClass('checked_arch');
    });

//numbers

var show = true;
var countbox = ".block-1";
$(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.countering--items__numbers').css('opacity', '1');
        $('.countering--items__numbers').spincrement({
            thousandSeparator: "",
            duration: 7000
        });

        show = false;
    }
});

//scroll to top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});

$('#return-to-top').click(function(el) {
    el.preventDefault();
    $('body,html').animate({
        scrollTop : 0
    }, 1500);
});

//popup

$(".head-info__button").on('click', function () {
   $('.callback--popup').addClass('popup-opened');
   $('.popup__header').text('Заявка на обратный звонок');
});

$('.popup__close-btn, .popup__background').on('click', function () {
    $('.callback--popup').removeClass('popup-opened');
});

//popup 2

$('.scale__button').on('click', function () {
   $('.callback--popup').addClass('popup-opened');
   $('.popup__header').text('Заявка на консультацию специалиста');
});
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


});