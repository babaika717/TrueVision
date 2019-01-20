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
$('.block8__carousel--init').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick_prev_arrow"></button>',
    nextArrow: '<button class="slick_next_arrow"></button>'
});
particlesJS("particleCanvas-Blue", {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#1B5F70"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 3
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 10,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 394.57382081613633,
				rotateY: 157.82952832645452
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "grab"
			},
			onclick: {
				enable: false,
				mode: "push"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 200,
				line_linked: {
					opacity: 0.2
				}
			},
			bubble: {
				distance: 1500,
				size: 40,
				duration: 7.272727272727273,
				opacity: 0.3676323676323676,
				speed: 3
			},
			repulse: {
				distance: 50,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
});

particlesJS("particleCanvas-White", {
	particles: {
		number: {
			value: 250,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#ffffff"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 3
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 0.2,
				opacity_min: 0,
				sync: false
			}
		},
		size: {
			value: 15,
			random: true,
			anim: {
				enable: true,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 3945.7382081613637,
				rotateY: 157.82952832645452
			}
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "grab"
			},
			onclick: {
				enable: false,
				mode: "push"
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 200,
				line_linked: {
					opacity: 0.2
				}
			},
			bubble: {
				distance: 1500,
				size: 40,
				duration: 7.272727272727273,
				opacity: 0.3676323676323676,
				speed: 3
			},
			repulse: {
				distance: 50,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
});
 setTimeout(function () {
        if ( !$('.main-preloader').hasClass("done") ) {
            $('.main-preloader').addClass('done');
            $('html').css('overflow', 'visible');
        }
    }, 1500);


});