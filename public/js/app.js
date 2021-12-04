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
	filters: {

		gettel(value) {
			return value.replace(/\s/g, '');
		}
	},
	computed: {
		gettel() {
			return this.tel.replace(/\s/g, '');
		}

	},
})
let footerVue = new Vue({
  el: '#footer',
  data: {
    // copy:
    socs: app.socs,
  },
  created: function () {
  },
  computed: {
    setCopy() {
      let now = new Date();
      return `© ${now.getFullYear()} «Лидер Профстрой».`
    }
  },
})// .footer scripts goes here

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
let header = new Vue({
	el: '#header',
	data: {
		imgSRc: 'img/',
	},
	created: function () {
	},
	computed: {

	},
})
// let headerBlockVue = new Vue({
//   el: '#headerBlock',
//   data: {
//     imgSRc: 'img/',
//     mainImg: 'img/@2x/head-1.jpg',
//     text: 'Равномерное покрытие за 3 дня',
//     title: '<strong>Механизированная шпатлевка помещений от&nbsp;130&nbsp;руб/м2</strong> в&nbsp;Нижнем Новгороде'
//   },
// })
let sArticalsVue = new Vue({
		el: '#sArticals',
		data: {
			imgSRc: 'img/',
		},
		methods: { 
		},
		 created: function () { 
		},
		computed: {
		
		},
	})


let sCasesVue = new Vue({
	el: '#sCases',
	data: {
		imgSRc: 'img/',
		subT: 'Более 50 реализованных проектов',
		h2: 'Реализованные проекты',

		items: [
			{
				title: "Дом в деревне Афонино",
				p: `Качественно выполненная работа по&nbsp;машинной штукатурке дома в&nbsp;деревне Афонино. Сложность данного объекта заключалась в&nbsp;том что была проведена штукатурка печи с&nbsp;которой наши специалисты отлично справились.`,
				img: `img/@2x/sEquipment-1.png`,
				area: '450 м2',
				date: '4 дн.',
				gals: ['case-1.jpg']
			},

		],
	},
	created: function () {
	},
	computed: {

	},
})
let sCeilingsVue = new Vue({
	el: '#sCeilings',
	data: {
		imgSRc: 'img/',
		subT: 'Мы также делаем натяжные потолки',
		h2: `Тандем&nbsp;&mdash; натяжные потолки в&nbsp;Нижнем Новгороде`,
		footT: `Организация &laquo;Тандем потолки&raquo; входит в&nbsp;группу компаний &laquo;Лидерпрофстрой&raquo;`,
		title: `Фиксировнная цена на&nbsp;потолок!`,
		p: `При заказе механизированной шпатлевки натяжной потолок в&nbsp;подарок!`,
		gal: 'ceiling.jpg'
	},
	methods: {
	},
	created: function () {
	},
	computed: {

	},
})
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
let sContentVue = new Vue({
	el: '#sContent',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование',
	},
	created: function () {
	},
	computed: {

	},
})
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
let sEquipmentVue = new Vue({
	el: '#sEquipment',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование',
		items: [
			{
				title: "ASpro 7300",
				p: 'Поршневой безвоздушный окрасочный агрегат для начально профессионального применения.Используется для проведения покрасочных работ, дома, на&nbsp;строительной площадке и&nbsp;у&nbsp;себя на&nbsp;даче.',
				img: `img/@2x/sEquipment-1.png`,
			},

			{
				title: "Graco 290 Classic",
				p: `Поршневой безвоздушный окрасочный агрегат для начально профессионального применения. Используется для проведения покрасочных работ, дома, на&nbsp;строительной площадке и&nbsp;у&nbsp;себя на&nbsp;даче.`,
				img: `img/@2x/944.png`,
			},
			{
				title: "PFT Ritmo XL",
				p: `Cтанция RITMO&nbsp;XL, в&nbsp;сравнении с&nbsp;другими машинами данного модельного ряда,&nbsp;&mdash; более мощное и&nbsp;серьёзное оборудование, приближенное по&nbsp;своим эксплуатационным параметрам к&nbsp;моделям линейки PFT&nbsp;G.`,
				img: `img/@2x/123.png`,
			},
			{
				title: "PFT Ritmo XL",
				p: `Максимальная производительность в&nbsp;условиях максимальной экономичности и&nbsp;надежности. Контроль над всеми этапами производства. Мощный привод способен справиться с&nbsp;любыми задачами. Новый капот, способный выдержать любые удары. Улучшенные характеристики теплоотвода. Новый вентилятор и&nbsp;система охлаждения. Испытано в&nbsp;суровых российских условиях. Более высокий уровень комфорта и&nbsp;увеличение производительности.`,
				img: `img/@2x/qw.png`,
			},

		],
	},

	created: function () {
	},
	computed: {

	},
})
let sFormVue = new Vue({
	el: '#sForm',
	data: {
		imgSRc: 'img/',
		subT: 'В работе используем',
		h2: 'Современное оборудование',
	},
	created: function () {
	},
	computed: {

	},
})
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
let sProcessVue = new Vue({
	el: '#sProcess',
	data: {
		imgSRc: 'img/',
		subT: 'Этапы работы',
		h2: 'Процесс полусухой стяжки пола',
		items: [
			{
				img: `img/@2x/process-1.jpg`,
				title: `Укладка ПВХ пленки`,
				p: `Устройство разделительного слоя: пленка, шумоизоляция и&nbsp;утеплитель.`,
			},

			{
				img: `img/@2x/process-2.jpg`,
				title: `Подача смеси`,
				p: `Приготовление и&nbsp;подача смеси с&nbsp;помощью пневмонагнетателя.`,
			},
			{
				img: `img/@2x/process-3.jpg`,
				title: `Выставление маяков`,
				p: `Выставление маяков из&nbsp;полусухого раствора по&nbsp;лазерному нивелиру.`,
			},
			{
				img: `img/@2x/process-4.jpg`,
				title: `Распределение стяжки`,
				p: `Распределение стяжки между маяками с&nbsp;помощью прямоугольного правила.`,
			},
			{
				img: `img/@2x/process-5.jpg`,
				title: `Уплотнение и затирка`,
				p: `Уплотнение и&nbsp;затирка &laquo;вертолетом&raquo; под финишное покрытие.`,
			},
			{
				img: `img/@2x/process-6.jpg`,
				title: `Покрытие пленкой`,
				p: `Покрытие пленкой готовой стяжки для набора марочной прочности.`,
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
let topLineVue = new Vue({
	el: '#topLine',
	data: {
		imgSRc: 'img/',
		email: app.email,
		tel: app.tel,
		menus: [
			{ title: "Ваши выгоды", url: "#sBenefits" },
			{ title: "Оборудование", url: "#sEquipment" },
			{ title: "Материалы", url: "#sMaterials" },
			{ title: "Проекты", url: "#sCases" },
			{ title: "Калькулятор", url: "#sCalc" },
			{ title: "Блог", url: "/" },
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