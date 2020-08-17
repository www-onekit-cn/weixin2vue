
// // import Vue from 'vue';
// // import Router from 'vue-router';Vue.use(Router);

// // import $ from 'jquery'
// // import axios from 'axios';Vue.prototype.$axios= axios;

// // import {isMobile} from './onekit/js/TheKit'
// // import Tabs from './onekit/page/Tabs.vue'
// // import Page from './onekit/page/Page.vue'
// // import APP_JSON from './app.json.js'

// // const screen_width = isMobile()?(($(window).width())-0):750;
// // $("body").css('--screen-width', screen_width + "px");
// /////////////////////////////////////////////////////////
// // Vue.component("page",()=>import(`@/onekit/ui/page.vue`));
// // for(let ui of ["page","ad", "audio","button","camera","canvas","checkbox","checkbox-group","cover-image","cover-view",
// //   "editor","form","functional-page-navigator","image",
// //   "icon","map","input","label","live-player","live-pusher","map","movable-area","movable-view","navigator",
// //   "open-data","picker","picker-view","picker-view-column","progress",
// //   "radio","radio-group","rich-text","scroll-view","slider","swiper","swiper-item","switch",
// //   "text","textarea","video","view","web-view" ]){
// //   Vue.component(`onekit-${ui}`,()=>import(`@/onekit/ui/${ui}.vue`));
// // }
// //////////////////////////////////////////////
// // let router = {
// //   mode: 'history',
// //   routes: [{Y
// //     path: '/',
// //     redirect: `/${APP_JSON.pages[0]}`,
// //   }]
// // };
// // //
// // let tabPages = [];
// // let tabBar = APP_JSON["tabBar"];

// // if(tabBar) {
// //   let children = [];

// //  for (let tab of tabBar.list) {
// //     let pagePath = tab["pagePath"];

// // console.log(pagePath);

// //     children.push({
// //       path: `/${pagePath}`,
// //       component:()=>import(`@/${pagePath}.vue`),
// //       // data(){
// //       //   return {}
// //       // }
// //     });

// //     tabPages.push(pagePath);
// //   }
// //   router.routes[0].component = Tabs;
// //   router.routes[0].children = children;
// // }
// //

// // for(let page of APP_JSON.pages) {
// //   if(tabBar && tabPages.indexOf(page)>=0){
// //       continue;
// //   }
// //   router.routes.push({
// //      path: `/${page}`,
// //     // component:()=>import(`@/${page}.vue`)
// //     // component: () => resolve => require([`@/${page}.vue`], resolve)
// //    });
// // }


// import APP from './APP.vue'
// import API from './page/API/index.vue'
// import cloud from './page/cloud/index.vue'
// const routes = [
//   {
//     path:'',
//     redirect:'/src/page/API/index.vue'
//   },
//   {
//     path:'/src/page/API/index.vue',
//     component:API
//   },
//   {
//     path:'./APP.vue',
//     component:APP
//   },
//   {
//     path:'/src/page/cloud/index.vue',
//     component:cloud
//   }
// ]

// const router = new Router({
//   router,
//   mode:'history'
// })
// export default router


// new Vue({
//   router:new Router(router),
//   render: h => h(Page)
// }).$mount('#app');

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
