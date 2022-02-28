import router from "vue-router";
import Vue from "vue";
import routes from "./routes.js";
Vue.use(router);
const routerInstance = new router({
  mode: "history",
  routes,
});
export default routerInstance;
