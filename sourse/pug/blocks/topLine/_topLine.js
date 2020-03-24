let topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: app.email,
		tel: app.tel,
		menus: [
			{ title: "Главная", url: "#headerBlock" },
			{ title: "Ваши выгоды", url: "#sBenefits" },
			{ title: "Оборудование", url: "#sEquipment" },
			{ title: "Материалы", url: "#sMaterials" },
			{ title: "Проекты", url: "#sCases" },
			{ title: "Калькулятор", url: "#sCalc" },
			{ title: "Контакты", url: "#sContact" },
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