let app = new Vue({
	el: '#app',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',

		socs: [
			{ text: "Фейсбук", title: "fb", url: "#" },
			{ text: "ВКонтакте", title: "vk", url: "#" },
			{ text: "Инстаграм", title: "instagram", url: "#" },
		],
		descr: 'Ремонт и&nbsp;отделка помещений в&nbsp;Нижнем Новгороде'
	},
	methods: {
	},
	created: function () {
	},
	computed: {
		gettel() {
			return this.tel.replace(/\s/g, '');
		}

	},
})