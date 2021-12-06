$(function() {

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

	new WOW().init();

	// Video custom
	$playPause = $(".btn-video-play");

	$playPause.on("click", function (e) {
	  e.preventDefault();
	  var videoElement = $(this).closest('.video-play__wrapper').find('video')[0]

	  if (videoElement.paused || videoElement.ended) {
	    videoElement.play();
	   	$(this).css('opacity',0)
	  } else {
	    videoElement.pause();
	    $(this).css('opacity',1)
	  }
	})


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
			rows: 2,
			slidesToShow: 6,
			slidesToScroll: 2,
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

	/**/
	// Page play to earn
	if($('body').hasClass('play-to-earn')){

		$('.playtoearn-block__slider').slick({
			rows: 1,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: false,
			easing: "linear"
		});
	}

	// if($('body').hasClass('games')){
	// 	var setSliderCurrent = $('.games-slider').data('current')
	// 	var $carousel = $('.games-slider').flickity()
	// 	.flickity('next')
	// 	.flickity( 'select', parseInt(setSliderCurrent)  );
	// }

	var back_to_top=$(".scrollTop"),offset=220,duration=200;$(window).scroll(function(){
		$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),
	$(document).on("click",".scrollTop",function(o){
		return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
	});

	if($('.gameslider__slick').length){

		$('.gameslider__slick').slick({
			variableWidth: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			arrows: true,
			dots: false,
			easing: "linear"
		});

	}

	if($('.games-system__slider').length){

		$('.games-system__slider').slick({
			infinite: true,
			centerMode: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			dots: false,
			// easing: "linear"
		});

	}

	//Select Item
	function dnselect(elm) {
	    var dnselect_parent = $(elm).closest('.js-dnselect')
	    $(elm).click(function(e) {
	        e.preventDefault();
	        $(elm).closest('.js-dnselect').toggleClass('active');
	    })

	    $('.js-dnselect').mousedown(function(e){ e.stopPropagation(); });

	    $(document).mousedown(function(e){ $('.js-dnselect').removeClass('active'); });
	}
	dnselect('.js-dnselect__label')


	// Fix tab boostrap
	$('#gameTab .nav-link').on("click",function(e) {
		$('.nav-link').removeClass('active')
		$(this).addClass('active')

		var bg = $(this).find('.js-tab-data').data('bg')
		var logo = $(this).find('.js-tab-data').data('logo')
		var link = $(this).find('.js-tab-data').data('link')

		$('.games-banner').css("background-image",'url(' + bg + ')')
		$('.games-banner .el__logo img').attr("src",logo)

		if(link){
			$('.games-banner .js-tab-play').show().attr("href",link)
		}else{
			$('.games-banner .js-tab-play').hide()
		}
	})

	$('#orbitTab .nav-link').on("click",function(e) {
		$('.nav-link').removeClass('active')
		$(this).addClass('active')

		var bg = $(this).find('.js-tab-data').data('bg')
		var logo = $(this).find('.js-tab-data').data('logo')
		var link = $(this).find('.js-tab-data').data('link')

		$('.games-banner__bg').css("background-image",'url(' + bg + ')')
		// $('.games-banner .el__logo img').attr("src",logo)

		if(link){
			$('.games-banner .js-tab-play').show().attr("href",link)
		}else{
			$('.games-banner .js-tab-play').hide()
		}
		if(logo){
			$('.games-banner .el__comming').hide()
			$('.games-banner .el__logo').show().find('img').attr("href",link)
		}else{
			$('.games-banner .el__logo').hide()
			$('.games-banner .el__comming').show()
		}
	})

	if($('.js-flickity').length){
		$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		  $('.js-flickity').flickity('resize');
		})
	}

	if($('body').hasClass('games')){
		$('.nav-link').on("click",function(e) {
			var setSliderCurrent = $(this).data('current')
			setTimeout(function(){
				var $carousel = $('.games-system__carousel').flickity()
				.flickity('next')
				.flickity( 'select', parseInt(setSliderCurrent)  );
			}, 500);
		})
	}


	/*page slider dao*/
	var url = document.URL;
	var hash = url.substring(url.indexOf('#'));

	$(".games-slider").find(".nav-link").each(function(key, val) {

	  if (hash == $(val).data('bs-target')) {

	  	setTimeout(function(){
	    	$(val).click();

			 $(".tab-pane").removeClass("show active");
			$(hash).addClass("show active");

	    }, 500);
	    var slider = $('.gameslider__slick');

			var number = hash.match(/\d+/);

			if(number[0] >=4){
				slider[0].slick.slickGoTo(3);
			}else{
				slider[0].slick.slickGoTo(number[0] - 1);
			}

	  }

	  $(val).click(function(ky, vl) {
	    location.hash = $(this).data('bs-target');
	  });

	});
});
