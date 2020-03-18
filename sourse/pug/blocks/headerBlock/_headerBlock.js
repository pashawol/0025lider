let headerBlockVue = new Vue({
  el: '#headerBlock',
  data: {
    imgSRc: 'img/',
    mainImg: 'img/@2x/head-1.jpg',
    text: 'Равномерное покрытие за 3 дня',
    title: '<strong>Механизированная шпатлевка помещений от&nbsp;130&nbsp;руб/м2</strong> в&nbsp;Нижнем Новгороде'
  },
  methods: {
    scrollDown() {

    }
  }

})

Vue.component('my-checkbox', {
  data() {
    return { checked: false, title: 'Check me' }
  },
  methods: {
    check() { this.checked = !this.checked; }
  }
});