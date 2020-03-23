
let basideVue = new Vue({
	el: '#aside',
	data: {
		imgSRc: app.imgSRc,
		email: app.email,
		tel: app.tel,
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
		socs: app.socs,
		descr: app.descr
	},
	methods: {
	},
	created: function () {
	},
	computed: {
		gettel() {
			app.gettel;
		}

	},
})
