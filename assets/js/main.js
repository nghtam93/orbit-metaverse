$(function() {

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
			easing: "linear"
		});
	}

	var back_to_top=$(".scrollTop"),offset=220,duration=200;$(window).scroll(function(){
		$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),
	$(document).on("click",".scrollTop",function(o){
		return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1
	});

});