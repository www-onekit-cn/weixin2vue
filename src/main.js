import Vue from 'vue'
import Router from 'vue-router';Vue.use(Router);
import $ from 'jquery'
import {isMobile} from './onekit/js/TheKit'
import MainPage from './onekit/page/Tabs.vue'
import SinglePage from './onekit/page/Page.vue'
import APP_JSON from './app.json.js'
import axios from 'axios'
Vue.prototype.$axios= axios
const screen_width = isMobile()?(($(window).width())-0):750;
$("body").css('--screen-width', screen_width + "px");
/////////////////////////////////////////////////////////
for(let ui of ["page","ad", "audio","button","camera","canvas","checkbox","checkbox-group","cover-image","cover-view",
  "editor","form","functional-page-navigator","image",
  "icon","map","input","label","live-player","live-pusher","map","movable-area","movable-view","navigator",
  "open-data","page","picker","picker-view","picker-view-column","progress",
  "radio","radio-group","rich-text","scroll-view","slider","swiper","swiper-item","switch",
  "text","textarea","video","view","web-view" ]){
  Vue.component(`onekit-${ui}`,()=>import(`@/onekit/ui/${ui}.vue`));
}
/*
import page from "./onekit/ui/page.vue";Vue.component(`onekit-page`,page);
import ad from "./onekit/ui/ad.vue";Vue.component(`onekit-ad`,ad);
import audio from "./onekit/ui/audio.vue";Vue.component(`onekit-audio`,audio);
import button from "./onekit/ui/button.vue";Vue.component(`onekit-button`,button);
import camera from "./onekit/ui/camera.vue";Vue.component(`onekit-camera`,camera);
import canvas from "./onekit/ui/canvas.vue";Vue.component(`onekit-canvas`,canvas);
import checkbox from "./onekit/ui/checkbox.vue";Vue.component(`onekit-checkbox`,checkbox);
import checkbox_group from "./onekit/ui/checkbox-group.vue";Vue.component(`onekit-checkbox-group`,checkbox_group);
import cover_image from "./onekit/ui/cover-image.vue";Vue.component(`onekit-cover-image`,cover_image);
import cover_view from "./onekit/ui/cover-view.vue";Vue.component(`onekit-cover-view`,cover_view);
import editor from "./onekit/ui/editor.vue";Vue.component(`onekit-editor`,editor);
import form from "./onekit/ui/form.vue";Vue.component(`onekit-form`,form);
import functional_page_navigator from "./onekit/ui/functional-page-navigator.vue";Vue.component(`onekit-functional-page-navigator`,functional_page_navigator);
import icon from "./onekit/ui/icon.vue";Vue.component(`onekit-icon`,icon);
import image from "./onekit/ui/image.vue";Vue.component(`onekit-image`,image);
import input from "./onekit/ui/input.vue";Vue.component(`onekit-input`,input);
import label from "./onekit/ui/label.vue";Vue.component(`onekit-label`,label);
import live_player from "./onekit/ui/live-player.vue";Vue.component(`onekit-live-player`,live_player);
import live_pusher from "./onekit/ui/live-pusher.vue";Vue.component(`onekit-live-pusher`,live_pusher);
import map from "./onekit/ui/map.vue";Vue.component(`onekit-map`,map);
import movable_area from "./onekit/ui/movable-area.vue";Vue.component(`onekit-movable-area`,movable_area);
import movable_view from "./onekit/ui/movable-view.vue";Vue.component(`onekit-movable-view`,movable_view);
import navigator from "./onekit/ui/navigator.vue";Vue.component(`onekit-navigator`,navigator);
import open_data from "./onekit/ui/open-data.vue";Vue.component(`onekit-open-data`,open_data);
import picker from "./onekit/ui/picker.vue";Vue.component(`onekit-picker`,picker);
import picker_view from "./onekit/ui/picker-view.vue";Vue.component(`onekit-picker-view`,picker_view);
import picker_view_column from "./onekit/ui/picker-view-column.vue";Vue.component(`onekit-picker-view-column`,picker_view_column);
import progress from "./onekit/ui/progress.vue";Vue.component(`onekit-progress`,progress);
import radio from "./onekit/ui/radio.vue";Vue.component(`onekit-radio`,radio);
import radio_group from "./onekit/ui/radio-group.vue";Vue.component(`onekit-radio-group`,radio_group);
import rich_text from "./onekit/ui/rich-text.vue";Vue.component(`onekit-rich-text`,rich_text);
import scroll_view from "./onekit/ui/scroll-view.vue";Vue.component(`onekit-scroll-view`,scroll_view);
import slider from "./onekit/ui/slider.vue";Vue.component(`onekit-slider`,slider);
import swiper from "./onekit/ui/swiper.vue";Vue.component(`onekit-swiper`,swiper);
import swiper_item from "./onekit/ui/swiper-item.vue";Vue.component(`onekit-swiper-item`,swiper_item);
import switch_ from "./onekit/ui/switch.vue";Vue.component(`onekit-switch`,switch_);
import text from "./onekit/ui/text.vue";Vue.component(`onekit-text`,text);
import textarea from "./onekit/ui/textarea.vue";Vue.component(`onekit-textarea`,textarea);
import video from "./onekit/ui/video.vue";Vue.component(`onekit-video`,video);
import view from "./onekit/ui/view.vue";Vue.component(`onekit-view`,view);
import web_view from "./onekit/ui/web-view.vue";Vue.component(`onekit-web-view`,web_view);
 */
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
  router.routes[0].component = MainPage;
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
  render: h => h(SinglePage)
}).$mount('#app');