var preloader = document.getElementsByClassName('main-preloader')[0];

    setTimeout(function () {
        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done');
            // document.body.style.background = 'none';
            document.body.style.overflow = 'hidden';
        }
    }, 1500);