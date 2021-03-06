$(function() {

	// Loader
	$('body').addClass('modal-open')
	$( document ).ready(function() {
	  $('.loading-page__logo').fadeOut();
	  $('.loading-page').delay(350).fadeOut('slow');
	  $('body').removeClass('modal-open')
	})

	new WOW().init();

	// Header Fix
	var header_sticky=$("header.-fix")
    $(window).scroll(function(){
        $(this).scrollTop()>1?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
    })

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
			rows: 2,
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
			      	rows: 2,
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			      	rows: 2,
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

		$('.js-slick').on('click', '.slider__item[data-bs-toggle="modal"]', function() {
		  	var content = $(this).find('.js-slider-content').html()
			$('.js-modal-body').html(content)
		});

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
    // Page play to earn

	if($('body').hasClass('play-to-earn')){
	    $('.playtoearn-block__slider').slick({
			rows: 1,
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true,
			dots: false,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}


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
			infinite: true,
			arrows: true,
			dots: false,
			easing: "linear",
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			      	variableWidth: false,
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			      	variableWidth: false,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		});
	}

	//Select Item
	function dnselect(elm) {
	    $(elm).click(function(e) {
	        e.preventDefault();
	        $(this).closest('.js-dnselect').toggleClass('active');
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
	});

	if($('.js-flickity').length){
		$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		  $('.js-flickity').flickity('resize');
		})
	}

	if($('body').hasClass('games')){

		$('.g-treasure__characters .el__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			      	variableWidth: false,
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			      	variableWidth: false,
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			      	variableWidth: false,
			        slidesToShow: 1,
			      }
			    }
			]
		});

	}

	/*page slider dao*/
	var url = document.URL;
	var hash = url.substring(url.indexOf('#'));

	$(".games-slider").find(".nav-link").each(function(key, val) {

	  if (hash == $(val).data('bs-target')) {

	  	setTimeout(function(){
	    	$(hash+'-tab').click();

			$(".tab-pane").removeClass("show active");
			$(hash).addClass("show active");
			$('.js-flickity').flickity('resize');
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

	/*Page Marketplace*/
	$('.market__settings, .js-market--close').on("click",function(e) {
		var content = $(this).closest('.container').find('.js-market-sidebar')

		if(content.hasClass('active')){
        	content.removeClass('active')
        }else{
        	content.addClass('active')
        }

        if($('body').hasClass('modal-open')){
        	$('body').removeClass('modal-open')
        }else{
        	$('body').addClass('modal-open')
        }
	});

	$('.market-sidebar').mousedown(function(e){ e.stopPropagation(); });
    $(document).mousedown(function(e){
        $('.js-market-sidebar').removeClass('active');
		$('body').removeClass('modal-open')
    });


	//Select 2 Item
	function dnselect2(elm) {
		var dnselect_parent = $(elm).closest('.js-dnselect2')
	    $(elm).click(function(e) {
	    	e.preventDefault();
	        $(this).closest('.js-dnselect2').toggleClass('active');
	    })
	    $(elm).closest('.js-dnselect2').find('li label').on("click",function(e) {
	    	var dnselect_parent = $(this).closest('.js-dnselect2')
	        var text = $(this).text()

	        dnselect_parent.find('li').removeClass('active')
	        $(this).addClass('active')
	        dnselect_parent.removeClass('active')
	        dnselect_parent.find('.js-dnselect2__label').text(text)
	    })
	    $('.js-dnselect2').mousedown(function(e){ e.stopPropagation(); });

	    /**/
	    var el= $(dnselect_parent).find(".js-dnselect2__list");
        el.find(".has-children>label").after('<button class="js-ul__sub"></button>'),
        el.find(".js-ul__sub").on("click",function(e){
            e.preventDefault();
            $(this).parent().find('.ul__sub').first().is(":visible")?$(this).parent().removeClass("sub-active"):
            $(this).parent().addClass("sub-active"),
            $(this).parent().find('.ul__sub').first().slideToggle()
        })

	    $(document).mousedown(function(e){ $('.js-dnselect2').removeClass('active'); });
	}
	dnselect2('.js-dnselect2__label')

	/*Page market*/
	if($('div').find('.js-range-slider').length !=0){
		$(".js-range-slider").ionRangeSlider({
	      min: 1,
	      max: 5,
	      from: 1,
	   	});
	}

	if($('div').find('.js-range-slider2').length !=0){
		$(".js-range-slider2").ionRangeSlider({
			min: 1,
			max: 3,
			step: 1,            // default 1 (set step)
			grid: true,         // default false (enable grid)
			grid_num: 2,        // default 4 (set number of grid cells)
		});
	}


	$('.js-reset-market').on("click",function(e) {
		thiz_from = $(this).closest('.tab-pane')
		if(thiz_from.find('.js-range-slider').length !=0){
			thiz_from.find('.js-range-slider').data("ionRangeSlider").reset();
		}
		if(thiz_from.find('.rateit').length !=0){
			thiz_from.find('.rateit').rateit('reset');
		}

		if(thiz_from.find('.js-dnselect2').length !=0){
			var select_item = thiz_from.find('.js-dnselect2')

			select_item.each(function(){
				var label = $(this).find('.dnselect2__label')
				$(this).find('.dnselect2__list li').removeClass('active')

				if(label.attr('data-label')){
					label.text(label.data('label'))
				}else{
					label.text($(this).find('.dnselect2__list li:first-child').text())
					$(this).find('.dnselect2__list li:first-child').addClass('active')
				}
			});
		}
	})

	// Tooltip page account
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// ClipboardJS
	if($(document).find('.js-item-copy').length !=0){
		let clipboard = new ClipboardJS('.js-item-copy');
		clipboard.on('success', function (e) {
		    let trigger_button = e.trigger;
		    // update the tooltip title, get the tooltip instance, and show it
		    trigger_button.setAttribute('data-bs-original-title', 'Copied!');
		    let btn_tooltip = bootstrap.Tooltip.getInstance(trigger_button);
		    btn_tooltip.show();
		    // reset the tooltip title
		    trigger_button.setAttribute('data-bs-original-title', 'Copy to clipboard');
		});
	}

});