let sMaterialsVue = new Vue({
	el: '#sMaterials',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Лучшие материалы',
		items: [
			{
				title: "Штукатурка Knauf",
				img: `img/@2x/sMaterials-3.png`,
				lists: [
					{
						img: 'img/@2x/knauf_logo.png',
						text: `Проверенный немецкий бренд, на&nbsp;рынке более 70&nbsp;лет.`,
					},

					{
						img: 'img/svg/wave.svg',
						text: `Материал не&nbsp;дает усадки, легко наносится и&nbsp;не&nbsp;трескается.`,
					},
					{
						img: 'img/svg/leaf.svg',
						text: `Экологически чистый продукт, не&nbsp;влияющий на&nbsp;ваше здоровье.`,
					},

					{
						img: 'img/svg/ruble.svg',
						text: `Специальная цена для наших клиентов&nbsp;&mdash; 260p`,
					},

				],
			},

			{
				title: "Шпатлевка Dano Jet 5",
				img: `img/@2x/sMaterials-1.png`,
				lists: [
					{
						img: 'img/svg/leaf.svg',
						text: 'Экологичность и&nbsp;безопасность исполняемых работ.',
					},

					{
						img: 'img/svg/bucket.svg',
						text: 'Экономия краски относительно традиционных методов окрашивания.',
					},
					{
						img: 'img/svg/ventilation.svg',
						text: `Нет необходимости в&nbsp;вентиляции, благодаря минимальному применению растворителей.`,
					},

				],
			},

			{
				title: "Краска для пола TEKNOFLOOR",
				img: `img/@2x/sMaterials-2.png`,
				lists: [
					{
						img: 'img/svg/leaf.svg',
						text: 'Экологичность и&nbsp;безопасность исполняемых работ.',
					},

					{
						img: 'img/svg/bucket.svg',
						text: 'Экономия краски относительно традиционных методов окрашивания.',
					},
					{
						img: 'img/svg/ventilation.svg',
						text: `Нет необходимости в&nbsp;вентиляции, благодаря минимальному применению растворителей.`,
					},

				],
			},



		],
	},

	created: function () {
	},
	computed: {

	},
})