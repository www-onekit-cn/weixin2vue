import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);
import $ from 'jquery'
import OneKit from '../weixin2vue/js/OneKit'
import tabs from '../weixin2vue/pages/tabs'
import activity from '../weixin2vue/pages/activity'
import APP_JSON from './app.json.js'
import PROJECT_JSON from './project.config.json.js'
import weixin2vue from "weixin2vue"

// import wx from '../weixin2vue/wx'

Vue.use(weixin2vue);
Vue.prototype.$EventBus = {}
Vue.prototype.APP_JSON = APP_JSON;
Vue.prototype.PROJECT_JSON = PROJECT_JSON;
////////////////////////////////////////////////

/**  wyw  */
// const wx_path = OneKit.currentUrl()
// const wx_query = OneKit.current().$route.query
// let isEntry = false

// const vue_current = OneKit.currentUrl().replace(/\//g, '')
// if (!APP_JSON.pages.includes(vue_current)) {
//   wx_callback(wx_path, wx_query, isEntry)
// } else {
//   return true
// }
function onekit_onError(error) {
  if (Vue.prototype.onError) {
    Vue.prototype.onError(error)
  } else {
    throw error
  }
}
Vue.config.errorHandler = onekit_onError

if (Vue.prototype.onThemeChange) {
  Object.defineProperty(Vue.prototype.THEME, 'theme', {
    get: function() {
      return Vue.prototype.THEME;
    },

    set: function(newValue) {
      Vue.prototype.onThemeChange(newValue)
    }
  })
}
window.addEventListener('unhandledrejection', function() {
  if (Vue.prototype.onUnhandledRejection) {
    window.addEventListener('unhandledrejection', vue_e => {
      const wx_reason = vue_e.reason
      const wx_promise = vue_e.promise
      Vue.prototype.onUnhandledRejection(wx_reason, wx_promise);
    })
  }
})
document.addEventListener("visibilitychange", function() {

  if (document.hidden) {
    if (Vue.prototype.onAudioInterruptionBegin) {
      Vue.prototype.onAudioInterruptionBegin()
    }
    if (Vue.prototype.onAppHide) {
      const wx_path = OneKit.current().$route.path
      const wx_query = {
        params: "",
        query: ""
      }
      const wx_scene = undefined;
      const wx_referrerInfo = {};
      let wx_res = {
        path: wx_path,
        scene: wx_scene,
        query: wx_query,
        referrerInfo: wx_referrerInfo,
        shareTicket: undefined
      };
      Vue.prototype.onAppHide(wx_res)
    }

  } else {
    if (Vue.prototype.onAppShow) {
      const wx_path = OneKit.current().$route.path
      const wx_query = {
        params: "",
        query: ""
      }
      const wx_scene = undefined;
      const wx_referrerInfo = {};
      let wx_res = {
        path: wx_path,
        scene: wx_scene,
        query: wx_query,
        referrerInfo: wx_referrerInfo,
        shareTicket: undefined
      };
      Vue.prototype.onAppShow(wx_res)

    }
    if (Vue.prototype.onAudioInterruptionEnd) {
      Vue.prototype.onAudioInterruptionEnd()
    }
    
  }
})


//////////////////////////
const screen_width = OneKit.isMobile() ? (($(window).width()) - 0) : 750;
$("body").css('--screen-width', screen_width + "px");
//
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
let entry
  if (tabBar) {
    entry = tabBar.list[0].pagePath
    //
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
  } else {
    entry = APP_JSON.pages[0]
  }
const init_path = "xxx"
  if (APP_JSON.pages.indexOf(init_path)>=0) {
    entry = "" // out link open mini app
  } else{
    console.log(location.href)
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
////////////////////////////

const wx_path = entry
const wx_query = {
  params: "",
  query: ""
}
const wx_scene = 1001;
const wx_referrerInfo = {
  appId: PROJECT_JSON.appid,
  extraData: {}
};
let wx_option = {
  path: wx_path,
  scene: wx_scene,
  query: wx_query,
  referrerInfo: wx_referrerInfo,
  shareTicket: {}
};
Vue.prototype.OPTION = wx_option
/////////////////////////////
/*
let wx_theme = {
  theme: wx.getSystemInfoSync().theme
}
Vue.prototype.THEME = wx_theme
*/
////////////////////////////

const vue = Vue.prototype.ROOT = new Vue({
  router: new Router(router),
  render: h => h(activity)
})
import('./app.js')
vue.$mount('#app');