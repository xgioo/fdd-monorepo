import Vue from "vue";
import App from "./App.vue";
import FddUI from "fdd-ui";
import "../../packages/them-chalk/src/index.scss";
Vue.config.productionTip = false;
Vue.use(FddUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
