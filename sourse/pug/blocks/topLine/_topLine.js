let topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: app.email,
		tel: app.tel,
		menus: [
			{ title: "Главная", url: "#" },
			{ title: "Ваши выгоды", url: "#" },
			{ title: "Оборудование", url: "#" },
			{ title: "Материалы", url: "#" },
			{ title: "Проекты", url: "#" },
			{ title: "Калькулятор", url: "#" },
			{ title: "Контакты", url: "#" },
		],
		socs: app.socs,
		descr: app.descr
	},
	methods: {
	},
	created: function () {
	},
	filters: {

		gettel(value) {
			return value.replace(/\s/g, '');
		}
	},
})