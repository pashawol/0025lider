let sDifferenceVue = new Vue({
	el: '#sDifference',
	data: {
		imgSRc: 'img/',
		subT: 'Сравните качество материала',
		h2: `Отличие полусухой стяжки от&nbsp;обычной`,
		items: [








			{
				title: `Объем работ в день`,
				t2: `до 50 м2`,
				t3: `до 200 м2`,
			},
			{
				title: `Дополнительное выравнивание`,
				t2: `да`,
				t3: `нет`,
			},
			{
				title: `Пешие нагрузки`,
				t2: `через 72 часа`,
				t3: `через 12 часов`,
			},
			{
				title: `Отделочные работы`,
				t2: `через 72 часа`,
				t3: `на следующий день`,
			},
			{
				title: `Допустимые перепады`,
				t2: `10 мм`,
				t3: `2 мм`,
			},
			{
				title: `Потребление воды`,
				t2: `максимальное`,
				t3: `минимальное`,
			},
			{
				title: `Протечки при заливке`,
				t2: `да`,
				t3: `нет`,
			},
			{
				title: `Элемент армирования`,
				t2: `сетка`,
				t3: `фибраволокно`,
			},

		]
	},
	methods: {
	},
	created: function () {
	},
	computed: {

	},
})