$(function() {

	new WOW().init();

	/*----Languages---*/
	$('.languages .languages-item').click(function() {
		$(this).next().toggleClass('dropdown-languages');
		isClicked = true;
	});

	$('.languages ul li').click(function() {
	    var $liIndex = $(this).index() + 1;
	    $('.languages ul li').removeClass('active');
	    $('.languages ul li:nth-child('+$liIndex+')').addClass('active');
	    var $getLang = $(this).html();
	    $('.languages .languages-item').html($getLang);

	    $('.languages>ul').removeClass('dropdown-languages')
	});


	// Loader
	$('body').addClass('modal-open')
	$(window).on('load', function() {
	  $('.loading-page__logo').fadeOut();
	  $('.loading-page').delay(350).fadeOut('slow');
	  $('body').removeClass('modal-open')
	})

	// Header Fix
	var header_sticky=$("header.-fix")

    if($('body').hasClass( "home" )){
        $(window).scroll(function(){
            $(this).scrollTop()>1?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
        })
    }else{
        header_sticky.addClass("is-active")
    }


    // Check home
	if($('body').hasClass('home')){
		$('.home-story-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			easing: "linear",
			fade: true,
		});


		$('.home-play-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: true,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 599,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			    }
			]
		});

		$('.home-ecosystem-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			dots: true,
			arrows: true,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 599,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			    }
			]
		});

		/**/
		$('.home-roadmap-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			easing: "linear",
			fade: true
		});
		$('.js-home-roadmap-nav li').on("click",function(e) {
			var index = $(this).data('index')
		   $('.home-roadmap-slider').slick('slickGoTo', index);


	        $(document).off("scroll");

	        var target = this.hash,
	        $target = $('.home-roadmap-slider');
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top - 70
	        },500);


		})

		$('.home-roadmap-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  $('.js-home-roadmap-nav li').removeClass('active')
		  $('.js-home-roadmap-nav li[data-index="'+nextSlide+'"]').addClass('active')
		});

		$('.home-ourteam-slider01').slick({
			rows: 1,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			arrows: true,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 991,
			      settings: {
			      	rows: 1,
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			      	rows: 1,
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			]
		});


		$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		  $('.js-slick').slick('setPosition');
		})

		$('.home-partners-slider').slick({
			rows: 2,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			arrows: true,
			dots: false,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			]
		});

		$('.js-slick .slider__item[data-bs-toggle="modal"]').on("click",function(e) {
			var content = $(this).find('.js-slider-content').html()
			$('.js-modal-body').html(content)
		})

	}

	//-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()

        if($('body').hasClass('modal-open')){
			$('.nav__mobile').removeClass('active')
        	$('body').removeClass('modal-open')
        }else{
        	$('body').addClass('modal-open')
        	$('.nav__mobile').addClass('active')
        }
    });


	if($('body').hasClass('games')){
		var setSliderCurrent = $('.games-slider').data('current')
		var $carousel = $('.games-slider').flickity()
		.flickity('next')
		.flickity( 'select', parseInt(setSliderCurrent)  );
	}

	var back_to_top=$(".scrollTop"),offset=220,duration=200;$(window).scroll(function(){
		$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),
	$(document).on("click",".scrollTop",function(o){
		return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
	});

	if($('.gameslider__flickity').length){
		setTimeout(function(){
			$('.gameslider__flickity').flickity({
				 freeScroll: true,
				 contain: true,
				 prevNextButtons: true,
				 pageDots: false
			});
		}, 500);
	}



});