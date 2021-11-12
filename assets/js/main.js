$(function() {

	$('body').addClass('modal-open')
	$(window).on('load', function() {
	  $('.loading-page__logo').fadeOut();
	  $('.loading-page').delay(350).fadeOut('slow');
	  $('body').removeClass('modal-open')
	})

	var header_sticky=$("header.-fix")


    if($('body').hasClass( "home" )){
        $(window).scroll(function(){
            $(this).scrollTop()>1?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
        })
    }else{
        header_sticky.addClass("is-active")
    }

	new WOW().init();

	if($('body').hasClass('home')){
		$('.home-story-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
			easing: "linear",
			fade: true,
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
		})

		$('.home-roadmap-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  $('.js-home-roadmap-nav li').removeClass('active')
		  $('.js-home-roadmap-nav li[data-index="'+nextSlide+'"]').addClass('active')
		});

		$('.home-ourteam-slider01').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			easing: "linear"
		});


		$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		  $('.js-slick').slick('setPosition');
		})

		$('.home-partners-slider').slick({
			rows: 2,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: false,
			easing: "linear"
		});

		$('.js-slick .slider__item[data-bs-toggle="modal"]').on("click",function(e) {
			var content = $(this).find('.js-slider-content').html()
			$('.js-modal-body').html(content)
		})

	}

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

});