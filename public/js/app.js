"use strict";

var asideVue = new Vue({
	el: '#aside',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',
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
		}]
	},
	methods: {
		gettel: function gettel() {
			return this.tel.replace(/\s/g, '');
		}
	},
	created: function created() {},
	computed: {}
}); // .footer scripts goes here

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
	methods: {
		scrollDown: function scrollDown() {}
	}
});
Vue.component('my-checkbox', {
	data: function data() {
		return {
			checked: false,
			title: 'Check me'
		};
	},
	methods: {
		check: function check() {
			this.checked = !this.checked;
		}
	}
});
var sBenefitsVue = new Vue({
	el: '#sBenefits',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sCalcVue = new Vue({
	el: '#sCalc',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sCasesVue = new Vue({
	el: '#sCases',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sContactVue = new Vue({
	el: '#sContact',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sContentVue = new Vue({
	el: '#sContent',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sEquipmentVue = new Vue({
	el: '#sEquipment',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sFormVue = new Vue({
	el: '#sForm',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var sMaterialsVue = new Vue({
	el: '#sMaterials',
	data: {
		imgSRc: 'img/'
	},
	created: function created() {},
	computed: {}
});
var topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',
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
		}]
	},
	methods: {
		gettel: function gettel() {
			return this.tel.replace(/\s/g, '');
		}
	},
	created: function created() {},
	computed: {}
});