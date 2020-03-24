let sContactVue = new Vue({
	el: '#sContact',
	data: {
		imgSRc: 'img/',
		subT: 'Контактная информация',
		h2: app.tel,
		tel0: app.gettel,
		addr: `г. Нижний Новгород, ул. Черепичная, 2Ак2`,
		timer: `Пн-пт: 8:00-19:00; Сб-вс: выходной`,
	},
	created: function () {
	},
	computed: {

	},
})