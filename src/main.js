// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui"; //New Added
import "element-ui/lib/theme-chalk/index.css"; //New Added

Vue.config.productionTip = false;
Vue.use(ElementUI); //New Added

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
