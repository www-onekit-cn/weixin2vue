import Vue from 'vue'
export default function (APP) {
  Vue.prototype.APP = APP
  //
  if(APP.onLaunch){
    const path =   Vue.prototype.ENTRY 
    const query = {

    }
   const scene = 1001;
   const referrerInfo = {};
    const wx_options = {path,query,scene,referrerInfo}
    APP.onLaunch(wx_options);
  }
}
