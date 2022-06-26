import Vue from "vue";
import App from "@/App.vue";
import vuetify from "plugins/vuetify";
import $store from "plugins/$store";
import router from "@/routes";

Vue.config.productionTip = false;
Vue.use($store);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
