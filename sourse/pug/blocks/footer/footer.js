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