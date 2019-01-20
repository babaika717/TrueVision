 setTimeout(function () {
        if ( !$('.main-preloader').hasClass("done") ) {
            $('.main-preloader').addClass('done');
            $('html').css('overflow', 'visible');
        }
    }, 1500);