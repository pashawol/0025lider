let topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',
		menus: [
			{ title: "Главная", url: "#" },
			{ title: "Ваши выгоды", url: "#" },
			{ title: "Оборудование", url: "#" },
			{ title: "Материалы", url: "#" },
			{ title: "Проекты", url: "#" },
			{ title: "Калькулятор", url: "#" },
			{ title: "Контакты", url: "#" },
		],
		socs: [
			{ text: "Фейсбук", title: "fb", url: "#" },
			{ text: "ВКонтакте", title: "vk", url: "#" },
			{ text: "Инстаграм", title: "instagram", url: "#" },
		]
	},
	methods: {
		gettel() {
			return this.tel.replace(/\s/g, '');
		}
	},
	created: function () {
	},
	computed: {

	},
})