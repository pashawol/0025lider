"use strict";

var app = new Vue({
	el: '#app',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',
		socs: [{
			text: "Фейсбук",
			title: "fb",
			url: "#"
		}, {
			text: "ВКонтакте",
			title: "vk",
			url: "#"
		}, {
			text: "Инстаграм",
			title: "instagram",
			url: "#"
		}],
		descr: 'Ремонт и&nbsp;отделка помещений в&nbsp;Нижнем Новгороде'
	},
	methods: {},
	created: function created() {},
	computed: {
		gettel: function gettel() {
			return this.tel.replace(/\s/g, '');
		}
	}
});
var footerVue = new Vue({
	el: '#footer',
	data: {// copy:
	},
	created: function created() {},
	computed: {
		setCopy: function setCopy() {
			var now = new Date();
			return "\xA9 ".concat(now.getFullYear(), " \xAB\u041B\u0438\u0434\u0435\u0440 \u041F\u0440\u043E\u0444\u0441\u0442\u0440\u043E\u0439\xBB.");
		}
	}
}); // .footer scripts goes here

var asideVue = new Vue({
	el: '#aside',
	data: {
		imgSRc: app.imgSRc,
		email: app.email,
		tel: app.tel,
		menus: [{
			title: "Механизированая штукатурка",
			url: "#",
			img: "svg/construction-and-tools.svg"
		}, {
			title: "Механизированная шпатлевка",
			url: "#",
			img: "/svg/construction-and-tools2.svg"
		}, {
			title: "Безвоздушная покраска",
			url: "#",
			img: "/svg/brush.svg"
		}, {
			title: "Полусухая стяжка пола",
			url: "#",
			img: "/svg/floor-polisher.svg"
		}],
		// socs: topLineVue.socs
		socs: app.socs,
		descr: app.descr
	},
	methods: {},
	created: function created() {},
	computed: {
		gettel: function gettel() {
			app.gettel;
		}
	}
});
var header = new Vue({
	el: '#header',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var headerBlockVue = new Vue({
	el: '#headerBlock',
	data: {
		imgSRc: 'img/',
		mainImg: 'img/@2x/head-1.jpg',
		text: 'Равномерное покрытие за 3 дня',
		title: '<strong>Механизированная шпатлевка помещений от&nbsp;130&nbsp;руб/м2</strong> в&nbsp;Нижнем Новгороде'
	},
	methods: {}
});
var sBenefitsVue = new Vue({
	el: '#sBenefits',
	data: {
		imgSRc: 'img/',
		subT: ' Почему клиенты выбирают нас?',
		h2: 'Ваши выгоды при работе с&nbsp;нами',
		items: [{
			title: "От&nbsp;3&nbsp;дней <br> точно в&nbsp; срок",
			p: 'Технология и&nbsp;опыт позволяют выполнять объемы до&nbsp; 500 м2 &nbsp; точно в&nbsp; срок.',
			img: "img/@2x/sBenefits-1.png",
			style: 'width: 10.77778rem;'
		}, {
			title: "Высокое качество готовой поверхности",
			p: 'Не&nbsp;требует дальнейшей обработки за&nbsp; счет увеличения адгезии между поверхностью и&nbsp; раствором.',
			img: "img/@2x/sBenefits-2.png"
		}, {
			title: "Высокое качество используемого раствора",
			p: 'За&nbsp;счет механического смешивания компонентов.',
			img: "img/@2x/sBenefits-3.png",
			style: "right:0; bottom: 2rem; margin-right: 0"
		}, {
			title: "Экономный расход шпаклевочной смеси",
			p: 'А&nbsp;также выгодная цена шпатлевки от&nbsp; 130&nbsp; руб/ м2.',
			img: "img/@2x/sBenefits-4.png"
		}]
	},
	created: function created() {},
	computed: {}
});
var sCalcVue = new Vue({
	el: '#sCalc',
	data: {
		imgSRc: 'img/',
		subT: 'Узнайте стоимость работ',
		h2: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C  <br> \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0448\u043F\u0430\u0442\u043B\u0435\u0432\u043A\u0438"
	},
	created: function created() {},
	computed: {}
});
var sCasesVue = new Vue({
	el: '#sCases',
	data: {
		imgSRc: 'img/',
		subT: 'Более 50 реализованных проектов',
		h2: 'Реализованные проекты',
		items: [{
			title: "Дом в деревне Афонино",
			p: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043F\u043E&nbsp;\u043C\u0430\u0448\u0438\u043D\u043D\u043E\u0439 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0435 \u0434\u043E\u043C\u0430 \u0432&nbsp;\u0434\u0435\u0440\u0435\u0432\u043D\u0435 \u0410\u0444\u043E\u043D\u0438\u043D\u043E. \u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u043B\u0430\u0441\u044C \u0432&nbsp;\u0442\u043E\u043C \u0447\u0442\u043E \u0431\u044B\u043B\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0430 \u0448\u0442\u0443\u043A\u0430\u0442\u0443\u0440\u043A\u0430 \u043F\u0435\u0447\u0438 \u0441&nbsp;\u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C.",
			img: "img/@2x/sEquipment-1.png",
			area: '450 м2',
			date: '4 дн.',
			gals: ['case-1.jpg']
		}]
	},
	created: function created() {},
	computed: {}
});
var sCeilingsVue = new Vue({
	el: '#sCeilings',
	data: {
		imgSRc: 'img/',
		subT: 'Мы также делаем натяжные потолки',
		h2: "\u0422\u0430\u043D\u0434\u0435\u043C&nbsp;&mdash; \u043D\u0430\u0442\u044F\u0436\u043D\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438 \u0432&nbsp;\u041D\u0438\u0436\u043D\u0435\u043C \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434\u0435",
		footT: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F &laquo;\u0422\u0430\u043D\u0434\u0435\u043C \u043F\u043E\u0442\u043E\u043B\u043A\u0438&raquo; \u0432\u0445\u043E\u0434\u0438\u0442 \u0432&nbsp;\u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 &laquo;\u041B\u0438\u0434\u0435\u0440\u043F\u0440\u043E\u0444\u0441\u0442\u0440\u043E\u0439&raquo;",
		title: "\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u043D\u043D\u0430\u044F \u0446\u0435\u043D\u0430 \u043D\u0430&nbsp;\u043F\u043E\u0442\u043E\u043B\u043E\u043A!",
		p: "\u041F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0448\u043F\u0430\u0442\u043B\u0435\u0432\u043A\u0438 \u043D\u0430\u0442\u044F\u0436\u043D\u043E\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A \u0432&nbsp;\u043F\u043E\u0434\u0430\u0440\u043E\u043A!",
		gal: 'ceiling.jpg'
	},
	methods: {},
	created: function created() {},
	computed: {}
});
var sContactVue = new Vue({
	el: '#sContact',
	data: {
		imgSRc: 'img/',
		subT: 'Контактная информация',
		h2: app.tel,
		tel0: app.gettel,
		addr: "\u0433. \u041D\u0438\u0436\u043D\u0438\u0439 \u041D\u043E\u0432\u0433\u043E\u0440\u043E\u0434, \u0443\u043B. \u0427\u0435\u0440\u0435\u043F\u0438\u0447\u043D\u0430\u044F, 2\u0410\u043A2",
		timer: "\u041F\u043D-\u043F\u0442: 8:00-19:00; \u0421\u0431-\u0432\u0441: \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439",
		title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
	},
	created: function created() {},
	computed: {}
});
var sContentVue = new Vue({
	el: '#sContent',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование'
	},
	created: function created() {},
	computed: {}
});
var sEquipmentVue = new Vue({
	el: '#sEquipment',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование',
		items: [{
			title: "ASpro 7300",
			p: 'Поршневой безвоздушный окрасочный агрегат для начально профессионального применения.Используется для проведения покрасочных работ, дома, на&nbsp;строительной площадке и&nbsp; у&nbsp;себя на&nbsp;даче.',
			img: "img/@2x/sEquipment-1.png"
		}, {
			title: "Graco 290 Classic",
			p: "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u0433\u0440\u0435\u0433\u0430\u0442 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442, \u0434\u043E\u043C\u0430, \u043D\u0430&nbsp;\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u0438&nbsp;\u0443&nbsp;\u0441\u0435\u0431\u044F \u043D\u0430&nbsp;\u0434\u0430\u0447\u0435.",
			img: "img/@2x/944.png"
		}, {
			title: "PFT Ritmo XL",
			p: "C\u0442\u0430\u043D\u0446\u0438\u044F RITMO&nbsp;XL, \u0432&nbsp;\u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441&nbsp;\u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043C\u0430\u0448\u0438\u043D\u0430\u043C\u0438 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u044F\u0434\u0430,&nbsp;&mdash; \u0431\u043E\u043B\u0435\u0435 \u043C\u043E\u0449\u043D\u043E\u0435 \u0438&nbsp;\u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0435\u043D\u043D\u043E\u0435 \u043F\u043E&nbsp;\u0441\u0432\u043E\u0438\u043C \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u043A&nbsp;\u043C\u043E\u0434\u0435\u043B\u044F\u043C \u043B\u0438\u043D\u0435\u0439\u043A\u0438 PFT&nbsp;G.",
			img: "img/@2x/123.png"
		}, {
			title: "PFT Ritmo XL",
			p: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432&nbsp;\u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0438&nbsp;\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u0432\u0441\u0435\u043C\u0438 \u044D\u0442\u0430\u043F\u0430\u043C\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430. \u041C\u043E\u0449\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u0435\u043D \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0441&nbsp;\u043B\u044E\u0431\u044B\u043C\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438. \u041D\u043E\u0432\u044B\u0439 \u043A\u0430\u043F\u043E\u0442, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0439 \u0432\u044B\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043B\u044E\u0431\u044B\u0435 \u0443\u0434\u0430\u0440\u044B. \u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0442\u0435\u043F\u043B\u043E\u043E\u0442\u0432\u043E\u0434\u0430. \u041D\u043E\u0432\u044B\u0439 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440 \u0438&nbsp;\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F. \u0418\u0441\u043F\u044B\u0442\u0430\u043D\u043E \u0432&nbsp;\u0441\u0443\u0440\u043E\u0432\u044B\u0445 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. \u0411\u043E\u043B\u0435\u0435 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438&nbsp;\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.",
			img: "img/@2x/qw.png"
		}]
	},
	created: function created() {},
	computed: {}
});
var sFormVue = new Vue({
	el: '#sForm',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование'
	},
	created: function created() {},
	computed: {}
});
var sMaterialsVue = new Vue({
	el: '#sMaterials',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Лучшие материалы',
		items: [{
			title: "Штукатурка Knauf",
			img: "img/@2x/sMaterials-3.png",
			lists: [{
				img: 'img/@2x/knauf_logo.png',
				text: "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u0431\u0440\u0435\u043D\u0434, \u043D\u0430&nbsp;\u0440\u044B\u043D\u043A\u0435 \u0431\u043E\u043B\u0435\u0435 70&nbsp;\u043B\u0435\u0442."
			}, {
				img: 'img/svg/wave.svg',
				text: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435&nbsp;\u0434\u0430\u0435\u0442 \u0443\u0441\u0430\u0434\u043A\u0438, \u043B\u0435\u0433\u043A\u043E \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u0438&nbsp;\u043D\u0435&nbsp;\u0442\u0440\u0435\u0441\u043A\u0430\u0435\u0442\u0441\u044F."
			}, {
				img: 'img/svg/leaf.svg',
				text: "\u042D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043D\u0435&nbsp;\u0432\u043B\u0438\u044F\u044E\u0449\u0438\u0439 \u043D\u0430&nbsp;\u0432\u0430\u0448\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435."
			}, {
				img: 'img/svg/ruble.svg',
				text: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432&nbsp;&mdash; 260p"
			}]
		}, {
			title: "Шпатлевка Dano Jet 5",
			img: "img/@2x/sMaterials-1.png",
			lists: [{
				img: 'img/svg/leaf.svg',
				text: 'Экологичность и&nbsp;безопасность исполняемых работ.'
			}, {
				img: 'img/svg/bucket.svg',
				text: 'Экономия краски относительно традиционных методов окрашивания.'
			}, {
				img: 'img/svg/ventilation.svg',
				text: "\u041D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0432&nbsp;\u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u0435\u0439."
			}]
		}, {
			title: "Краска для пола TEKNOFLOOR",
			img: "img/@2x/sMaterials-2.png",
			lists: [{
				img: 'img/svg/leaf.svg',
				text: 'Экологичность и&nbsp;безопасность исполняемых работ.'
			}, {
				img: 'img/svg/bucket.svg',
				text: 'Экономия краски относительно традиционных методов окрашивания.'
			}, {
				img: 'img/svg/ventilation.svg',
				text: "\u041D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0432&nbsp;\u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u0438, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044E \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u0435\u0439."
			}]
		}]
	},
	created: function created() {},
	computed: {}
});
var topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: app.email,
		tel: app.tel,
		menus: [{
			title: "Главная",
			url: "#"
		}, {
			title: "Ваши выгоды",
			url: "#"
		}, {
			title: "Оборудование",
			url: "#"
		}, {
			title: "Материалы",
			url: "#"
		}, {
			title: "Проекты",
			url: "#"
		}, {
			title: "Калькулятор",
			url: "#"
		}, {
			title: "Контакты",
			url: "#"
		}],
		socs: app.socs,
		descr: app.descr
	},
	methods: {},
	created: function created() {},
	computed: {
		gettel: function gettel() {
			return app.gettel;
		}
	}
});