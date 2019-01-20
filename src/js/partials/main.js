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
