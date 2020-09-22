import Vue from 'vue'
import Router from 'vue-router';Vue.use(Router);
import $ from 'jquery'
import thekit from '../onekit/js/thekit'
import tabs from '../onekit/pages/tabs/tabs.vue'
import activity from '../onekit/pages/activity/activity.vue'
import APP_JSON from './app.json.js'
//import app from './app.js'
import lyxlwz from "vue-lyxlwz"
Vue.use(lyxlwz);
const screen_width = thekit.isMobile()?(($(window).width())-0):750;
$("body").css('--screen-width', screen_width + "px");
import wx from "../onekit/wx"
console.log(wx.f1(1,2))
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
if(tabBar) {
  let children = [];
  for (let tab of tabBar.list) {
    let pagePath = tab["pagePath"];

    children.push({
      path: `/${pagePath}`,
      component:()=>import(`@/${pagePath}.vue`),
      data(){
        return {}
      }
    });
    tabPages.push(pagePath);
  }
  router.routes[0].component = tabs;
  router.routes[0].children = children;
}
//
for(let page of APP_JSON.pages) {
  if(tabBar && tabPages.indexOf(page)>=0){
      continue;
  }
  router.routes.push({
    path: `/${page}`,
    component:()=>import(`@/${page}.vue`)
  });
}
//
new Vue({
  router:new Router(router),
  render: h => h(activity)
}).$mount('#app');