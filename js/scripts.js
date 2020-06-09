// BURGER MENU
	$('.first-button').on('click', function () {
		$('.animated-icon1').toggleClass('open');
	});


// WINDOW SIZE
	var header = $('header').outerHeight();
	$('.hero-nav').css({'padding-top' : header}); // padding-top para el hero-nav
	$('body').css({'top' : header}); // padding-top para el header

	$(window).on('resize', function(){
		var header = $('header').outerHeight();
		$('.hero-nav').css({'padding-top' : header}); // padding-top para el hero-nav on resize
		$('body').css({'top' : header}); // padding-top para el header
	});

	$('.homesvg').addClass('show');


// ON SCROLL
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		// SAVE ID'S
		var animation = $('.animation').offset().top - 200;;

		if (top > animation) {
			$('.fade-in').addClass('show');
		}
	});



// HERO MENU
	$(".triggerMenu").click(function(event) {
		event.preventDefault();
		$(this).toggleClass("open");
		$(".hero-nav").toggleClass("show");
		$("body").toggleClass("overflow-active");
		$("html").toggleClass("html-overflow-active");
		$("#aside-menu").toggleClass("aside-overflow-active");
		$("#orange-menu").toggleClass("show");
		$(".blue-nav-mask").toggleClass("hide");
	});

	$(".hero-nav-close").click(function(event) {
		event.preventDefault();
		$(".blue-nav-mask").addClass("hide");
		$(".hero-nav").removeClass("show");
		$("body").removeClass("overflow-active");
		$("html").removeClass("html-overflow-active");
		$("#aside-menu").removeClass("aside-overflow-active");
		$("#orange-menu").removeClass("show");
	});

	$(".blue-nav-mask").click(function(event) {
		event.preventDefault();
		$(".blue-nav-mask").addClass("hide");
		$(".hero-nav").removeClass("show");
		$("body").removeClass("overflow-active");
		$("html").removeClass("html-overflow-active");
		$("#aside-menu").removeClass("aside-overflow-active");
		$("#orange-menu").removeClass("show");
	});


// IF GET PAGE, PAINT  BLUE MENU
	var pathname = window.location.href;
	var url = pathname.substring(0, pathname.lastIndexOf('/'));

	var inversion = url + '/inversion.php';
	var credito = url + '/credito.php';
	var conocenos = url + '/conocenos.php';
	var blog = url + '/blog.php';

	switch(pathname) {
		case inversion :
			$(".has-menu li:nth-child(1) > a").addClass('c-blue');
			break;
		case credito :
			$(".has-menu li:nth-child(2) > a").addClass('c-blue');
			break;
		case conocenos :
			$(".has-menu li:nth-child(3) > a").addClass('c-blue');
			break;
		case blog :
			$(".has-menu li:nth-child(4) > a").addClass('c-blue');
			break;
	}


// BOOTSTRAP FORMS
// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function() {
	'use strict';
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
	})();


// DYNAMIC BACKGROUND COLOR SCRIPT
// Credits: https://codepen.io/DevillersJerome/pen/bpLPGe
	adaptColor('.inline-color-script');

	function adaptColor(selector) {
		var rgb = $(selector).css("background-color");

		if (rgb.match(/^rgb/)) {
			var a = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
				r = a[1],
				g = a[2],
				b = a[3];
		}
		var hsp = Math.sqrt(
			0.299 * (r * r) +
			0.587 * (g * g) +
			0.114 * (b * b)
		);
		if (hsp > 127.5) {
			$(selector).addClass('dark-color');
		} else {
			$(selector).addClass('light-color');
		}
	};


// HOME HERO SLIDER SLIDER
	$('.slider-img').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
		adaptiveHeight: true
	});


// POSTS SLIDER
	var $sliderPosts = $('.slider-posts');
	if ($sliderPosts.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('div');
		sliderCounter.classList.add('slider__counter');

		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).html(currentSlide + ' / <span class="c-light-gray">' + slidesCount + '</span>');
		};

		$sliderPosts.on('init', function(event, slick) {
			$sliderPosts.append(sliderCounter);
			updateSliderCounter(slick);
			$(sliderCounter).html('1 / <span class="c-light-gray">1</span>');

		});

		$sliderPosts.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$sliderPosts.slick();
	}


// SLIDER POSTS
	var $status = $('.custom_paging');
	var $slickElement = $('.slider-post');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		if(!slick.$dots){
			return;
		}

		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html('<span class="c-blue">' + i + '</span> / ' + (slick.$dots[0].children.length));
	});

	$slickElement.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		responsive: [
			{
				breakpoint: 2560,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
		]
	});
