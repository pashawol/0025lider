const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".aside--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".aside--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})

		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		// $(document).on('beforeClose.fb', function (e, instance, slide) {
		// 	// Your code goes here
		// 	$("form").trigger("reset");
		// 	// $(".wpcf7-not-valid-tip , div.wpcf7-validation-errors, div.wpcf7-acceptance-missing").hide();
		// });
		// $(".wpcf7").on('wpcf7:mailsent', function (event) {
		// 	// $.magnificPopup.close(); 
		// 	$.fancybox.close();
		// 	$.fancybox.open({
		// 		src: '#modal-thanks',
		// 		type: 'inline'
		// 	});
		// 	$("div.wpcf7-mail-sent-ok").hide();
		// 	// ym(55556008, 'reachGoal', 'order', goalParams); 
		// 	yaCounter56382826.reachGoal('zakaz');
		// });
		// $("div.wpcf7-mail-sent-ok").hide(); // yaCounter50059198.reachGoal('done');

		$(document).on('click', '.link-modal', function () {

			var th = $(this);
			var modal = th.attr('href');
			$(modal).find(".order").val(th.data('order'));
			$(modal).find(".form-wrap__title--js").html(th.data('title'));
			// $(modal).find(".form-wrap__text--js").html(th.data('text')); 
			$(modal).find(".form-wrap__btn").val(th.data('btn'));
			if ($(this).hasClass("modal-win__btn")) {
				$(modal).find(".order").val("Акция: " + th.parent().find(".title").text());

			}

			if ($(this).hasClass("s-services__btn")) {
				$(modal).find(".order").val("Заявка на: " + th.parents(".s-services__item")
					.find(".s-services__item-title").text());

			}

		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".aside--js.active"); // (1)
			if (!container) {
				// _this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	},
	// /inputMask
	customRange: function () {
		var $d3 = $(".slider-range-js");

		$d3.ionRangeSlider({
			skin: "round",
			// hide_min_max: 'true',
			// hide_from_to: 'true',
		});

		$d3.on("change", function () {
			var $inp = $(this);
			var from = $inp.prop("value"); // reading input value
			var from2 = $inp.data("from"); // reading input data-from attribute

			$('.range-result-js').text(from); // FROM value
			$('.range-result-js').val(from); // FROM value
		});

		var $d3_instance = $d3.data("ionRangeSlider");
		$(document).on('change  input  cut  copy  paste', '.range-result-js', function () {
			var th = $(this);
			var data = th.val();
			var min = +data;
			// th.val(data + ' т')
			$d3_instance.update({
				from: min,
			})
		});
	},
};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();
	JSCCommon.customRange();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		// конец добавил
		if (window.matchMedia("(min-width: 1440px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});


	$(".slider-js ").each(function () {
		let th = $(this);
		if (th.find('.swiper-slide').length > 1) {
			const swiperJs = new Swiper(th, {
				slidesPerView: 1,
				navigation: {
					nextEl: th.find('.swiper-button-next'),
					prevEl: th.find('.swiper-button-prev'),
				},
				lazy: {
					loadPrevNext: true,
				},
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: th.closest('.section').find('.swiper-pagination'),
					type: 'bullets',
					clickable: true
				},
			});
		}
		else {
			th.find(".swiper-button-wrapper").remove();
			th.find('img').each(function () {
				$(this).attr('src', $(this).data('src'))
			})
		}
	})





	// modal window


	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [56.24491006850043, 43.99628449999994],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'г. Нижний Новгород, ул. Черепичная, 2Ак2',
				balloonContent: 'г. Нижний Новгород, ул. Черепичная, 2Ак2'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'img/svg/placeholder.svg',
				// Размеры метки.
				iconImageSize: [41, 57],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-30, -47]
			});

		myMap.geoObjects
			.add(myPlacemark);
	});





	// Cache selectors
	var lastId,
		topMenu = $(" .topLine ul"),
		topMenuHeight = 40,
		// topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1100);
		e.preventDefault();
	});


	function getActive() {

		// Get container scroll position
		var fromTop = $(window).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.removeClass("active").parent()
				.end().filter("[href='#" + id + "']").addClass("active");
		}
	}

	getActive();
	// Bind to scroll
	$(window).scroll(function () {
		getActive();
	});
	// $(".headerBlock").addClass("currentSection");


	// console.log(window.pageYOffset);
	$(".btn-bottom--js").click(function () {
		// Visible(element);
		var currentSection = $(".headerBlock");
		// console.log(currentSection);
		var offsetTop = currentSection.offset().top + currentSection.height();

		$('html, body').animate({
			scrollTop: offsetTop + 40
		}, 1100);
		if ((offsetTop - window.pageYOffset) <= $(window).height()) {
		}

		// currentSection.removeClass('currentSection')
		// 	.next('.section').addClass("currentSection")

	})

	let dur = .6;
	let delay = dur;
	$('.section-title').each(function () {

		$(this).addClass("wow fadeInUp");
		$(this).attr("data-wow-duration", dur + 's');
		// $(this).attr("data-wow-delay", delay + 's')
	})

	$('.section-title .swiper-pagination ').each(function () {

		$(this).addClass("wow fadeInUp");
		$(this).attr("data-wow-duration", dur + 's');
		$(this).attr("data-wow-delay", delay + 's')
	})

	$(' .swiper-button-wrapper').each(function () {

		$(this).addClass("wow fadeInUp");
		$(this).attr("data-wow-duration", dur + 's');
		$(this).attr("data-wow-delay", delay + .6 + 's')
	})


	// $('.section-title .swiper-pagination').each(function () {

	// 	$(this).addClass("wow fadeInUp");
	// 	$(this).attr("data-wow-duration", dur + 's');
	// 	$(this).attr("data-wow-delay", delay + 's')
	// })


	$(".sBenefits__col, .sProcess__col").each(function (i) {
		$(this).attr("data-wow-delay", delay * .5 * (i + .5) + 's')
	})

	var wow = new WOW({
		mobile: false
	});
	wow.init();
	var controller = new ScrollMagic.Controller();

	function bgAnimate(el, bg, posL = { left: '-100%' }, offset = -180) {

		let elem = el;
		let elemParent = bg;
		let height = $(elemParent).height();
		let offsetEl = height * .52
		var durationEl = ($(window).height() - offsetEl) * 1.2;
		var tween = TweenMax.fromTo(elem, .05,
			posL,
			{ left: 0, ease: "elastic", }
		);
		var scene = new ScrollMagic.Scene({ triggerElement: elemParent, duration: height, offset: offset })
			.setTween(tween)
			// .addIndicators({ name: "loop" }) // add indicators (requires plugin)
			.addTo(controller);
	}
	bgAnimate('#sEquipmentbg', "#sEquipmentbgWrap");
	bgAnimate('#sMaterialsbg', "#sMaterialsbgWrap", { left: '100%' });
	bgAnimate('#sCasesbg', "#sCasesbgWrap");
	bgAnimate('#sCalcbg', "#sCalcbgWrap", { left: '100%' });
	bgAnimate('#sCeilingsbg', "#sCeilingsbgWrap");
	bgAnimate('#sContactbg', "#sContactbgWrap", { left: '100%' }, -300);


}
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

