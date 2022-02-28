import Vue from "vue";
import App from "./App.vue";
import el from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/index.js";
import "./store/index.js";
Vue.config.productionTip = false;
Vue.use(el);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
