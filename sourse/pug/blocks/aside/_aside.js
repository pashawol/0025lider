let asideVue = new Vue({
	el: '#aside',
	data: {
		imgSRc: 'img/',
		email: 'info@lpsplus.ru',
		tel: '8 (831) 410-40-60',
		menus: [
			{
				title: "Механизированая штукатурка", url: "#", img: `svg/construction-and-tools.svg`
			},
			{
				title: "Механизированная шпатлевка", url: "#", img: `/svg/construction-and-tools2.svg`
			},
			{
				title: "Безвоздушная покраска", url: "#", img: `/svg/brush.svg`
			},
			{
				title: "Полусухая стяжка пола", url: "#", img: `/svg/floor-polisher.svg`
			},
		],
		// socs: topLineVue.socs
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