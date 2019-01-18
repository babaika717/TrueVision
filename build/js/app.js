
$(document).ready(function () {


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

//scroll to top


$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {
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



});