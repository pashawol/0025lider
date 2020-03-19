let sBenefitsVue = new Vue({
	el: '#sBenefits',
	data: {
		imgSRc: 'img/',
		subT: ' Почему клиенты выбирают нас?',
		h2: 'Ваши выгоды при работе с&nbsp;нами',
		items: [
			{
				title: "От&nbsp;3&nbsp;дней <br> точно в&nbsp; срок",
				p: 'Технология и&nbsp;опыт позволяют выполнять объемы до&nbsp; 500 м2 &nbsp; точно в&nbsp; срок.', img: `img/@2x/sBenefits-1.png`,
				style: 'width: 10.77778rem;'
			},
			{
				title: "Высокое качество готовой поверхности",
				p: 'Не&nbsp;требует дальнейшей обработки за&nbsp; счет увеличения адгезии между поверхностью и&nbsp; раствором.',
				img: `img/@2x/sBenefits-2.png`
			},
			{
				title: "Высокое качество используемого раствора",
				p: 'За&nbsp;счет механического смешивания компонентов.',
				img: `img/@2x/sBenefits-3.png`,
				style: "right:0; bottom: 2rem; margin-right: 0"
			},

			{
				title: "Экономный расход шпаклевочной смеси",
				p: 'А&nbsp;также выгодная цена шпатлевки от&nbsp; 130&nbsp; руб/ м2.',
				img: `img/@2x/sBenefits-4.png`
			},

		]
	},
	created: function () {
	},
	computed: {

	},
})