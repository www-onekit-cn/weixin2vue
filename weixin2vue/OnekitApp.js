import Vue from 'vue'
export default function (APP) {
  Vue.prototype.APP = APP
  //
  if(APP.onLaunch){
    const path =   Vue.prototype.ENTRY 
    const query = {
      query:'',
      params: ''
      // query: Vue.prototype.CURRENT
    }
   const scene = 1001;
   const referrerInfo = {
     __proto__: Vue.prototype.referrerInfo
   };
    const wx_options = {path,query,scene,referrerInfo}
    APP.onLaunch(wx_options);
  }
}
