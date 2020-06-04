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
		var homeID = $('#home-animation');
		var numbersID = $('#numbers');


		if (homeID.length) {
		var homeSvg = $('#home-animation').offset().top - 400;
			if (top > homeSvg) {
				$('.homesvg').attr("class", "homesvg show");
				$('.fade-in').addClass('show');
			}
		}

		if (numbersID.length) {
			var numbers = $('#numbers').offset().top - 500;
			if (top > numbers) {
				$('.count').each(function() {
				  var $this = $(this),
					countTo = $this.attr('data-count');

				  $({
					countNum: $this.text()
				  }).animate({
					  countNum: countTo
					},

					{
					  duration: 2000,
					  easing: 'linear',
					  step: function() {
						$this.text(commaSeparateNumber(Math.floor(this.countNum)));
					  },
					  complete: function() {
						$this.text(commaSeparateNumber(this.countNum));
						//alert('finished');
					  }
					}
				  );

				});

				function commaSeparateNumber(val) {
				  while (/(\d+)(\d{3})/.test(val.toString())) {
					val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
				  }
				  return val;
				}

				$('.numeros').removeClass('count');
				$('.fade-in').addClass('show');
			}
		}
	});

	var numbers3ID = $('#numbers3');
	if (numbers3ID.length) {
		$('.count').each(function() {
			var $this = $(this),
			countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
				},{
					duration: 2300,
					easing: 'linear',
					step: function() {
						$this.text(commaSeparateNumber(Math.floor(this.countNum)));
					},
					complete: function() {
						$this.text(commaSeparateNumber(this.countNum));
						//alert('finished');
					}
				}
			);
		});

		function commaSeparateNumber(val) {
			while (/(\d+)(\d{3})/.test(val.toString())) {
				val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
			}
			return val;
		}

		$('.numeros').removeClass('count');
		$('.fade-in').addClass('show');
	}

//
	var numbers2ID = $('#numbers2');
	if (numbers2ID.length) {
		//var numbers2 = $('#numbers2').offset().top - 500;
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 1400,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});

		$('.numeros').removeClass('count');
		$('.fade-in').addClass('show');
	}

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


// VIDEOS SLIDER
	var $slider = $('.slider-video');
	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('div');
		sliderCounter.classList.add('slider__counter');

		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).html(currentSlide + ' / <span class="c-light-gray">' + slidesCount + '</span>');
		};

		$slider.on('init', function(event, slick) {
			$slider.append(sliderCounter);
			updateSliderCounter(slick);
			$(sliderCounter).html('1 / <span class="c-light-gray">1</span>');

		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick();
	}

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
