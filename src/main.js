import Vue from 'vue'
import Router from 'vue-router'; Vue.use(Router);
import $ from 'jquery'
import TheKit from '../weixin2vue/js/TheKit'
import tabs from '../weixin2vue/pages/tabs'
import activity from '../weixin2vue/pages/activity'
import APP_JSON from './app.json.js'
import weixin2vue from "weixin2vue"
import wx from "../weixin2vue/wx"
import('./app.js')
Vue.use(weixin2vue);
const screen_width = TheKit.isMobile() ? (($(window).width()) - 0) : 750;
$("body").css('--screen-width', screen_width + "px");
//////////////////////////////////////////////
let router = {
  mode: 'history',
  routes: [{
    path: '/',
    redirect: `/${APP_JSON.pages[0]}`,
  }]
};
//
let tabPages = [];
let tabBar = APP_JSON["tabBar"];
if (tabBar) {
  let children = [];
  for (let tab of tabBar.list) {
    let pagePath = tab["pagePath"];

    children.push({
      path: `/${pagePath}`,
      component: () => import(`@/${pagePath}.vue`),
      data() {
        return {}
      }
    });
    tabPages.push(pagePath);
  }
  router.routes[0].component = tabs;
  router.routes[0].children = children;
}
//
for (let page of APP_JSON.pages) {
  if (tabBar && tabPages.indexOf(page) >= 0) {
    continue;
  }
  router.routes.push({
    path: `/${page}`,
    component: () => import(`@/${page}.vue`)
  });
}

//
const vue = Vue.prototype.VUE = new Vue({
  router: new Router(router),
  render: h => h(activity)
})
vue.$mount('#app');
