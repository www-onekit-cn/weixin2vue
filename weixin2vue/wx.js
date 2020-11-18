import Vue from 'vue'
import $ from 'jquery'
import html2canvas from "html2canvas"
import vconsole from 'vconsole'
import Animation from "./api/Animation"
import EventChannel from "./api/EventChannel"
import LogManager from "./api/LogManager"
import RequestTask from "./api/RequestTask"
import SocketTask from "./api/SocketTask"
import UpdateManager from "./api/UpdateManager"
import OneKit from './js/OneKit'
import DownloadTask from './api/DownloadTask'
import UploadTask from './api/UploadTask'
//import {COLOR} from 'oneutil'
import axios from 'axios'
// import JSZip from 'jszip'
// let saveAs = require('file-saver');

// import { STRING } from 'oneutil'
// import AudioContext from "./api/AudioContext"
// import CameraContext from "./api/CameraContext"
// import CanvasContext from "./api/CanvasContext"
// import CanvasGradient from "./api/CanvasGradient"


// import FileSystemManager from "./api/FileSystemManager"
// import Gradient from "./api/Gradient"
// import InnerAudioContext from "./api/InnerAudioContext"
// import InterstitialAd from "./api/InterstitialAd"
// import LivePlayerContext from "./api/LivePlayerContext"
// import LivePusherContext from "./api/LivePusherContext"

// import MapContext from "./api/MapContext"
// import RecorderManager from "./api/RecorderManager"

// import RewardedVideoAd from "./api/RewardedVideoAd"

// import UDPSocket from "./api/UDPSocket"

// import UploadTask from "./api/UploadTask"
// import VideoContext from "./api/VideoContext"


///
// import APP_JSON from '../src/app.json'
// import { includes } from 'core-js/fn/array'
///
const MobileDetect = require('mobile-detect')
let interaction;
export default class wx {

  static RUN(body, wx_success, wx_fail, wx_complete) {
    try {
      return body(res => {
        if (wx_success) {
          wx_success(res);
        }
        if (wx_complete) {
          wx_complete(res);
        }
      }, res => {
        if (wx_fail) {
          wx_fail(res);
        }
        if (wx_complete) {
          wx_complete(res);
        }
      }, )

    } catch (vue_e) {
      const wx_errMsg = vue_e.message;
      let res = {
        errMsg: wx_errMsg
      }
      if (wx_fail) {
        wx_fail(res);
      }
      if (wx_complete) {
        wx_complete(res);
      }
    }
  }
  /**基础 */
  static canIUse() {
    return true;
  }

  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }

  static arrayBufferToBase64(arrayBuffer) {
    let binary = '';
    let len = arrayBuffer.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(arrayBuffer[i]);
    }
    console.log(len);
    return window.btoa(binary);
  }

  /**系统 */
  static getSystemInfoSync() {
    try {
      const device_type = navigator.userAgent
      const md = new MobileDetect(device_type)
      const os = md.os()
      let model,
        system,
        platform;
      switch (os) {
        case 'iOS':
          model = md.mobile()
          system = 'ios' + md.version('iPhone'),
            platform = 'ios'
          break;
        case 'AndroidOS':
          system = 'Android ' + md.version('Android');
          model = md.mobile();
          platform = 'android';
          break;
      }
      return {
        brand: 'Onekit',
        model: model,
        pixelRatio: window.devicePixelRatio,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        statusBarHeight: 20,
        language: window.navigator.language,
        version: '7.0',
        system: system,
        platform: platform,
        fontSizeSetting: 20,
        SDKVersion: "2.12.1",
        benchmarkLevel: 1,
        theme: 'light'
      };
    } catch (e) {
      throw new Error('getSystemInfoSync:fail');
    }
  }

  static getSystemInfo(wx_object) {
    let wx_success = wx_object ? wx_object.success : null;
    let wx_fail = wx_object ? wx_object.fail : null
    let wx_complete = wx_object ? wx_object.complete : null
    /////////////////////////////


    let wx_res;
    try {
      wx_res = wx.getSystemInfoSync();
      if (wx_success) { wx_success(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    } catch (e) {

      wx_res = { errMsg: e.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  /**更新 */
  static updateWeChatApp(wx_object) {
    const wx_success = wx_object.success || ''
    const wx_fail = wx_object.fail || ''
    const wx_complete = wx_object.complete || ''
    // window.open("https://support.weixin.qq.com/update/", '_blank')

    try {
      const wx_res = { errMsg: "private_openUrl:ok" }
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      const wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static getUpdateManager() {
    // return new UpdateManagerClass();
    return new UpdateManager()
    // return true;
  }

  static UpdateManager() {

  }
  /**生命周期 */
  static getLaunchOptionsSync() {
    return Vue.prototype.OPTION
  }

  static getEnterOptionsSync() {
    return Vue.prototype.OPTION
  }

  /**应用级事件 */
  static onUnhandledRejection(wx_callback) {
    Vue.prototype.onUnhandledRejection = wx_callback
  }

  static onThemeChange(wx_callback) {

    Vue.prototype.onThemeChange = wx_callback

  }

  static onPageNotFound(wx_callback) {
    Vue.prototype.onPageNotFound = wx_callback
  }

  static onError(wx_callback) {
    Vue.prototype.onError = wx_callback
  }

  static onAudioInterruptionEnd(wx_callback) {
    Vue.prototype.onAudioInterruptionEnd = wx_callback
  }

  static onAudioInterruptionBegin(wx_callback) {
    Vue.prototype.onAudioInterruptionBegin = wx_callback
  }

  static onAppShow(wx_callback) {
    Vue.prototype.onAppShow = wx_callback
  }

  static onAppHide(wx_callback) {
    Vue.prototype.onAppHide = wx_callback
  }

  static offUnhandledRejection() {
    Vue.prototype.onUnhandledRejection = NaN
  }

  static offThemeChange() {
    Vue.prototype.onThemeChange = null
  }

  static offPageNotFound() {
    Vue.prototype.onPageNotFound = null
  }

  static offError() {
    Vue.prototype.onError = null
  }

  static offAudioInterruptionEnd() {
    Vue.prototype.onAudioInterruptionBegin = null
  }

  static offAudioInterruptionBegin() {
    Vue.prototype.offAudioInterruptionBegin = null
  }

  static offAppShow() {
    Vue.prototype.onAppShow = null
  }

  static offAppHide() {
    Vue.prototype.onAppHide = null
  }
  /**调试 */
  static setEnableDebug(wx_object) {
    const wx_enableDebug = wx_object.enableDebug
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    try {
      if (wx_enableDebug) {
        new vconsole()
        if (wx_success) {
          wx_success()
        }
        if (wx_complete) {
          wx_complete()
        }
      }
    } catch (e) {
      const wx_res = { errMsg: e.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static getRealtimeLogManager() {
    return new LogManager()
  }

  static getLogManager(wx_object) {
    const wx_level = wx_object.level ? wx_object.level : 0
    const reg = /[0-1]/;
    if (wx_level.natch(reg)) {
      return new LogManager()
    } else {
      return false;
    }

  }

  static LogManager() {
    return new LogManager()
  }

  static RealtimeLogManager() {
    return new LogManager()
  }

  /**路由 */
  static switchTab(wx_object) {
    let wx_url = wx_object.url;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_url = wx_url
      const current = OneKit.current();
      current.$emit("switchtab", { url: vue_url })
      wx_res = {
        navigateTo: 'ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static reLaunch(wx_object) {
    let wx_url = wx_object.url;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_path = wx_url
      const pageCount = Vue.prototype.ROOT.$route.length - 1
      Vue.prototype.ROOT.$router.go(-pageCount);
      Vue.prototype.ROOT.$router.replace(vue_path);
      wx_res = {
        navigateTo: 'ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {

      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static redirectTo(wx_object) {
    let wx_url = wx_object.url;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_path = wx_url
      Vue.prototype.ROOT.$router.replace(vue_path);
      wx_res = {
        navigateTo: 'ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {

      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static navigateTo(wx_object) {
    const wx_url = wx_object.url;
    const wx_events = wx_object.events;
    const wx_success = wx_object.success;
    const wx_fail = wx_object.fail;
    const wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_path = OneKit.fixurl(wx_url)

      const channel = new Vue();
      for (const event_key in wx_events) {
        const event_func = wx_events[event_key]
        channel.$on(event_key, event_func);
      }
      const eventChannel = new EventChannel(channel);
      const eventChannelID = new Date().getTime()
      Vue.prototype.$EventBus[eventChannelID] = eventChannel
      //////
      Vue.prototype.ROOT.$router.push({
        path: vue_path,
        query: { eventChannelID }
      }).then(function() {

        wx_res = {
          navigateTo: 'ok',
          eventChannel
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      })

    } catch (e) {

      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static navigateBack(wx_object) {
    let wx_delta = wx_object.delta || 1; // 返回的页面数
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_delta = wx_delta
      Vue.prototype.ROOT.$router.go(-vue_delta);
      wx_res = {
        navigateBack: 'ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {

      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  /**界面 */
  static showToast(wx_object) {
    let tipTxt = wx_object.title;
    let time;
    if (!wx_object.duration) {
      time = 1500;
    } else {
      time = wx_object.duration
    }
    let mask;
    if (!wx_object.mask) {
      mask = false
    } else {
      mask = wx_object.mask
    }
    let icon;
    if (!wx_object.icon) {
      icon = "none"
    } else {
      icon = wx_object.icon;
    }
    let image;
    if (wx_object.image) {
      image = wx_object.image;
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let viewportID = document.getElementById("viewport");
      if (!viewportID) {
        let oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
        oMeta.name = 'viewport';
        oMeta.id = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta)
      }
      $(".xsw_toast").remove();
      let popToastHtml = "";
      popToastHtml += `<div class="xsw_showToast"> `;
      if (mask == true) {
        popToastHtml += `<div class="xsw_bei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: #262626;opacity: 0.4;z-index: 999999999999999999999"></div>`
      }
      popToastHtml += `<div class="pop-toast" style="position: fixed;  width: 140px;  height: 140px;  text-align: center;background-color: #555;border-radius: 10px;box-shadow: 0 2px 8px #555 ;right: 50%;top: 50%;margin: -70px -70px 0 0;z-index: 9999999999999999999999">`;
      if (image) {
        popToastHtml += `<img src="${image}" style="width: 50px;margin-top: 12px;">`
        popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-bottom: 10px;">${tipTxt}</div>
                              </div></div>`;
      } else {
        if (icon == "none") {
          popToastHtml += ` <img  style="width: 50px;margin-top: 12px;display: none">`
          popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-top: 45px; ">${tipTxt}</div>
                              </div></div>`;
        } else {
          if (icon == "success") {
            popToastHtml += `<canvas id="x_canvas" width="140px" height="50px"></canvas>`;
          } else if (icon == "loading") {
            popToastHtml += `<div id="xsw_canvas" style="140px;height: 60px;"></div>`;
          }
          popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-bottom: 10px;margin-top: 10px;">${tipTxt}</div>
                              </div></div>`;
        }

      }
      $("body").append(popToastHtml);
      $("body").css({ "position": "relative" });
      if (icon == "success") {
        /////////////////////////////////////////////////画勾
        let cvs = document.getElementById('x_canvas'); //画布
        let ctx = cvs.getContext('2d'); // 画笔
        ctx.lineWidth = 4; //线宽
        ctx.strokeStyle = "#fff"; //线的颜色
        ctx.moveTo(55, 35);
        ctx.lineTo(65, 45);
        ctx.lineTo(90, 15);
        ctx.stroke();
      } else if (icon == "loading") {
        /////////////////////////////////////////////////
        interaction.loading();
      }
      /////////////////////////////////////////////////
      if (time != "" || time != 0) {
        setTimeout(function() {
          $("#viewport").remove();
          $(".xsw_showToast").remove();
        }, time);
      }
      wx_res = { showToast: "ok" };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }

    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }
  static showModal(wx_object) {
    let title = wx_object.title;
    let content = wx_object.content;
    let showCancel = wx_object.showCancel;
    let cancelColor = wx_object.cancelColor;
    let confirmColor = wx_object.confirmColor;

    let cancelText;
    if (!wx_object.cancelText) {
      cancelText = "取消";
    } else {
      cancelText = wx_object.cancelText;
    }
    let confirmText;
    if (!wx_object.confirmText) {
      confirmText = "确定";
    } else {
      confirmText = wx_object.confirmText;
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let viewportID = document.getElementById("viewport");
      if (!viewportID) {
        let oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
        oMeta.name = 'viewport';
        oMeta.id = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
      }
      $(".xsw_showModa").remove();
      let showModalHtml = "";
      showModalHtml += `<div class="xsw_showModa" >`
      showModalHtml += `<div class="xsw_showModaBei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0; background-color: #333;opacity: 0.4;z-index: 999999999999999999999"></div>`
      showModalHtml += `<div class="xsw_modal-data" style="width:220px;  border-radius: 10px;  top: 50%;  left: 50%;  box-shadow: 0 2px 8px #555 ;  background-color: #fff;  border:1px solid #000;  padding:15px 0;  text-align:center;  z-index: 9999999999999999999999;  position: fixed;">
                                    <div style="text-align: center;font-size: 18px;font-weight: 400">${title}</div><br>
                                    <div style="text-align: center;font-size: 14px;margin-bottom: 30px;">${content} </div><br>`;
      if (showCancel == false) {
        showModalHtml += `<div style="position: absolute;bottom: 5px;"><div class="yesDian" style="width: 110px;display: inline-block;margin-left: 55px;background-color: gold;cursor: pointer;border-radius: 10px;padding: 8px 0;font-size: 16px">${confirmText}</div></div>`
      } else {
        showModalHtml += ` <div style="position: absolute;bottom: 0px;"><div class="noDian" style="width: 110px;display: inline-block;margin-bottom: 0;background-color: brown;cursor: pointer;border-radius: 0 0 0 10px;padding: 8px 0;color: #000000;font-size: 16px">${cancelText}</div><div class="yesDian" style="width: 110px;display: inline-block;background-color: gold;cursor: pointer;border-radius: 0 0 10px 0;padding: 8px 0;font-size: 16px">${confirmText}</div></div>`
      }
      `></div></div>`;
      $("body").append(showModalHtml);
      if (cancelColor) {
        $('.noDian').css({ 'color': cancelColor })
      }
      if (confirmColor) {
        $('.yesDian').css({ 'color': confirmColor })
      }
      let outerWidth = -$('.xsw_modal-data').outerHeight() / 2;
      let modal = document.querySelector('.xsw_modal-data');
      modal.style.margin = outerWidth + 'px 0 0 -110px';
      /* $('.xsw_modal-data').css({'margin-left:','"+outerWidth+"'})*/
      $("body").css({ "position": "relative" });
      $('.noDian').click(function() {
        $("#viewport").remove();
        $(".xsw_showModa").remove();
        wx_res = {
          cancel: true,
          showModal: "ok"
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      });
      $('.yesDian').click(function() {
        $("#viewport").remove();
        $(".xsw_showModa").remove();
        wx_res = {
          confirm: true,
          showModal: "ok"
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      });
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }

  }
  static showLoading(wx_object) {
    let tipTxt = wx_object.title;
    let mask;
    if (!wx_object.mask) {
      mask = false
    } else {
      mask = wx_object.mask
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let viewportID = document.getElementById("viewport");
      if (!viewportID) {
        let oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
        oMeta.name = 'viewport';
        oMeta.id = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
      }
      $(".xsw_toast").remove();
      let popToastHtml = "";
      popToastHtml += `<div class="xsw_showLoading"> `;
      if (mask == true) {
        popToastHtml += `<div class="xsw_bei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: #262626;opacity: 0.4;z-index: 999999999999999999999"></div>`
      }
      popToastHtml += `<div class="pop-toast" style="position: fixed;  width: 140px;  height: 140px;  text-align: center;background-color: #555;border-radius: 10px;box-shadow: 0 2px 8px #555 ;right: 50%;top: 50%;margin: -70px -70px 0 0;z-index: 9999999999999999999999">`;
      popToastHtml += `<div id="xsw_canvas" style="height: 60px;color: red;border:4px dashed #fff;width: 60px;text-align: center;margin: 10px auto;border-radius: 100%;"></div>`;
      popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-bottom: 10px;margin-top: 10px;">${tipTxt}</div>
                              </div></div>`;
      $("body").append(popToastHtml);
      $("body").css({ "position": "relative" });
      interaction.loading();
      wx_res = { showLoading: "ok" };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }

    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_fail);
      }
      if (wx_complete) {
        wx_complete(wx_complete);
      }
    }
  }
  static showActionSheet(wx_object) {
    let itemList = wx_object.itemList;
    let itemColor = wx_object.itemColor;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let index;
    let wx_res;
    try {
      let viewportID = document.getElementById("viewport");
      if (!viewportID) {
        let oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
        oMeta.name = 'viewport';
        oMeta.id = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
      }
      $(".xsw_showActionSheet").remove();
      let showActionSheetHtml = "";
      showActionSheetHtml += `<div class="xsw_showActionSheet" >
                                    <div class="xsw_showActionSheetBei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0; background-color: #333;opacity: 0.4;z-index: 999999999999999999999"></div>
                                    <div class="xsw_showActionSheet-data" style="width:220px;  border-radius: 5px;  top: 50%;  left: 50%;  box-shadow: 0 2px 8px #555 ;  background-color: #fff;  border:1px solid #000; text-align:center;  z-index: 9999999999999999999999;  position: fixed;color: #000000">
                                        <div style="text-align: left">`;
      let xsw_length;
      if (itemList.length > 6) {
        xsw_length = 6;
      } else {
        xsw_length = itemList.length;
      }
      for (let xsw_i = 0; xsw_i < xsw_length; xsw_i++) {
        showActionSheetHtml += `<div class="xsw_list" style="border-bottom: 1px solid #cccccc;padding: 10px 0 10px 10px;">${itemList[xsw_i]}</div>`
      }
      showActionSheetHtml += `</div></div></div>`;
      $("body").append(showActionSheetHtml);
      let outerWidth = -$('.xsw_showActionSheet-data').outerHeight() / 2;
      let modal = document.querySelector('.xsw_showActionSheet-data');
      modal.style.margin = outerWidth + 'px 0 0 -110px';
      $('.xsw_list:last').css({ 'border': "none" })
      if (itemColor) {
        $('.xsw_showActionSheet-data').css({ 'color': itemColor })
      }
      $('.xsw_list').click(function() {
        let thisHtml = $(this).html();
        for (let x in itemList) {
          if (thisHtml == itemList[x]) {
            index = x;
          }
        }
        wx_res = {
          showActionSheet: "ok",
          tapIndex: index
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      });
      $(".xsw_showActionSheet").click(function() {
        $("#viewport").remove();
        $(".xsw_showActionSheet").remove();
      });
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }
  static hideToast() {
    $("#viewport").remove();
    $(".xsw_showToast").remove();
  }

  static hideLoading() {
    $("#viewport").remove();
    $(".xsw_showLoading").remove();
  }

  static enableAlertBeforeUnload() {

  }

  static disableAlertBeforeUnload() {

  }

  static setNavigationBarTitle(wx_object) {

    const wx_title = wx_object.title

    $("#onekitwx_navigationBar_title").html(wx_title);
    if (wx_object.success) wx_object.wx_success();
    if (wx_object.complete) wx_object.wx_complete();

  }

  static showNavigationBarLoading() {}

  static hideNavigationBarLoading() {}

  static setNavigationBarColor(wx_object) {

    const wx_frontColor = wx_object.frontColor
    const wx_backgroundColor = wx_object.backgroundColor
    // const wx_animation = wx_object.animation


    $("#onekitwx_navigationBar").css("color", wx_frontColor)
    $("#onekitwx_navigationBar").css("background", wx_backgroundColor)

  }
  static setBackgroundTextStyle() {

  }
  static setBackgroundColor() {

  }
  static setTabBarBadge() {}

  static removeTabBarBadge() {}

  static showTabBarRedDot() {}

  static hideTabBarRedDot() {}

  static setTabBarStyle() {}

  static setTabBarItem() {}

  static showTabBar() {}

  static hideTabBar() {}
  static loadFontFace() {

  }
  static startPullDownRefresh() {
    /*
    if (wx_object) {
      let wx_success = wx_object.success;
      let wx_fail = wx_object.fail;
      let wx_complete = wx_object.complete;
      let wx_res;
      try {
        if ($('.xsw_first').length < 1) {
          let xsw_first = document.createElement("div");
          xsw_first.innerHTML = "<div class='xsw_first' style='width: 100%;text-align: center'></div>";
          if ($('body')) {
            let first = document.body.firstChild; //得到页面的第一个元素
            first.before(xsw_first);
          } else {
            $("div").first().before(xsw_first);
          }
          if ($('.xsw_first')) {
            let scroll = document.querySelector('.xsw_first');
            scroll.style.height = '90px';
            wx.loading();
            wx.onPullDownRefresh();
          }
          wx_res = { startPullDownRefresh: 'ok' };
          if (wx_success) {
            wx_success(wx_res);
          }
          if (wx_complete) {
            wx_complete(wx_res);
          }
        } else {
          throw new Error('Missing parameter');
        }
      } catch (e) {
        wx_res = { errMsg: e.message };
        if (wx_fail) {
          wx_fail(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    } else {
      if ($('.xsw_first').length < 1) {
        let xsw_first = document.createElement("div");
        xsw_first.innerHTML = "<div class='xsw_first' style='width: 100%;text-align: center'></div>";
        if ($('body')) {
          let first = document.body.firstChild; //得到页面的第一个元素
          first.before(xsw_first);
        } else {
          $("div").first().before(xsw_first);
        }
        if ($('.xsw_first')) {
          let scroll = document.querySelector('.xsw_first');
          scroll.style.height = '90px';
          wx.loading();
          wx.onPullDownRefresh();
        }
      }
    }*/
  }
  static stopPullDownRefresh(wx_object) {
    let scroll
    if (wx_object) {
      let wx_success = wx_object.success;
      let wx_fail = wx_object.fail;
      let wx_complete = wx_object.complete;
      let wx_res;
      try {
        scroll = document.querySelector('.xsw_first');
        scroll.style.height = '0px';
        $('.xsw_first').remove();
        wx_res = { stopPullDownRefresh: 'ok' };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }

      } catch (e) {
        wx_res = { errMsg: e.message };
        if (wx_fail) {
          wx_fail(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    } else {
      scroll = document.querySelector('.xsw_first');
      scroll.style.height = '0px';
      $('.xsw_first').remove();
    }
  }

  static onPullDownRefresh(callback) {
    wx.onPullDownRefresh = callback;
  }

  static pageScrollTo(wx_object) {
    let scrollTop = wx_object.scrollTop;
    let duration;
    if (!wx_object.duration) {
      duration = 300;
    } else {
      duration = wx_object.duration;
    }
    $("body,html").animate({
      scrollTop: scrollTop
    }, duration);
  }

  static createAnimation(OBJECT) {
    let animation = new Animation();
    if (OBJECT) {
      if (OBJECT["duration"] != null) {
        animation.duration = OBJECT["duration"];
      }
      if (OBJECT["timingFunction"] != null) {
        animation.timingFunction = OBJECT["timingFunction"];
      }
      if (OBJECT["delay"] != null) {
        animation.delay = OBJECT["delay"];
      }
      if (OBJECT["transformOrigin"] != null) {
        animation.transformOrigin = OBJECT["transformOrigin"];
      }
    }
    return animation;
  }
  /** 网络 */
  static request(wx_object) {
    let url = wx_object.url;
    let data = wx_object.data;
    let header = wx_object.header;
    let method = wx_object.method || 'GET';
    let timeout = wx_object.timeout
    const wx_responseType = wx_object.responseType || 'text';
    const wx_dataType = wx_object.dataType || "json";
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    //
    //  let wx_enableHttp2 = wx_object.enableHttp2
    // let wx_enableQuic = wx_object.enableQuic
    //   let wx_enableCahe = wx_object.enableChache
    wx_object = null
    //////////////////////////
    let vue_responseType
    switch (wx_responseType) {
      case "text":
        switch (wx_dataType) {
          case "json":
            vue_responseType = 'json'
            break;
          default:
            vue_responseType = 'text'
            break
        }
        break;
      case "arraybuffer":
        vue_responseType = 'arraybuffer'
        break;
      default:
        throw wx_responseType;
    }

    const axios_instance = axios.create({
      data: data,
      headers: header,
      timeout: timeout,
      method: method,
      responseType: vue_responseType,
    })

    const requestTask = new RequestTask(axios_instance)

    setTimeout(() => {
      axios_instance({
        url: url,

      }).then(response => {
        const wx_res = {
          cookies: response.cookies || [],
          data: response.data || null,
          errMsg: `request: ${response.statusText}`,
          header: response.headers,
          statusCode: response.status
        }
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }).catch(error => {
        if (wx_fail) {
          wx_fail(error);
        }
        if (wx_complete) {
          wx_complete(error);
        }

      })
    }, 500);

    return requestTask
  }


  static downloadFile(wx_object) {
    let wx_url = wx_object.url;
    let wx_timeout = wx_object.timeout
    // let wx_filePath = wx_object.filePath || '';
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    //
    let wx_header = wx_object.header;
    let wx_mehotd = wx_object.method || 'GET'

    const axios_instance = axios.create({
      headers: wx_header,
      timeout: wx_timeout,
      responseType: "blob",
    })

    const downloadTask = new DownloadTask(axios_instance);
    setTimeout(() => {
      axios_instance({
        url: wx_url,
        method: wx_mehotd,
      }).then(res => {
        const tempFilePath = OneKit.createTempPath(wx_url.substr(wx_url.lastIndexOf("/")))

        Vue.prototype.TEMP[tempFilePath] = res.data
        if (wx_success) {
          wx_success({
            tempFilePath
          })
        }
        if (wx_complete) {
          wx_complete()
        }
      }).catch(err => {
        if (wx_fail) {
          wx_fail({ errMsg: err.message })
        }
        if (wx_complete) {
          wx_complete()
        }
      })
    }, 500);


    return downloadTask
  }


  static uploadFile(wx_object) {
    let url = wx_object.url;
    let filePath = wx_object.filePath;
    let name = wx_object.name;
    let header = wx_object.header;
    let formData = wx_object.formData;
    let timeout = wx_object.timeout
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////////////
    let blob
    if (filePath.startsWith("wxfile://store/onekit_")) {
      blob = null //sessionStorage.getItem(filePath)
    } else if (filePath.startsWith("wxfile://tmp_onekit_")) {
      blob = Vue.prototype.TEMP[filePath]
    } else {
      throw new Error(filePath)
    }
    if (!header) {
      header = {}
    }
    header['Content-Type'] = 'multipart/form-data'
    /////////////////
    let data = new FormData()
    data.append(name, new File([blob], filePath))

    for (const key of Object.keys(formData)) {
      data.append(key, formData[key])
    }


    const axios_instance = axios.create({
      headers: header,
      timeout,
    })

    const uploadTask = new UploadTask(axios_instance)

    setTimeout(() => {

      axios_instance({
        url,
        data,
        method: "post",
        // ...config
      }).then(() => {
        const wx_ers = {}
        if (wx_success) {
          wx_success(wx_ers)
        }
        if (wx_complete) {
          wx_complete(wx_ers)
        }
      }).catch(() => {
        const wx_ers = {}
        if (wx_fail) {
          wx_fail(wx_ers)
        }
        if (wx_complete) {
          wx_complete(wx_ers)
        }
      })
    }, 0);

    return uploadTask
  }

  static connectSocket(wx_object) {

    const wx_url = wx_object.url
    const wx_protocols = wx_object.protocols
    const wx_success = wx_object.success
    const wx_fail = wx_object.fail
    const wx_complete = wx_object.complete
    wx_object = null
    //
    return wx.RUN((SUCCESS) => {
      
    const vue_socket = new WebSocket(wx_url, wx_protocols)
    const wx_res = {
      socketTaskId: 1,
      errMsg:"connectSocket:ok"
    }
    
      SUCCESS(wx_res)
    return new SocketTask(vue_socket)

    }, wx_success, wx_fail, wx_complete)



    /* let url = wx_object.url;
     // let header = wx_object.header; 
     let protocols = wx_object.protocols;
     let wx_success = wx_object.success;
     let wx_fail = wx_object.fail;
     let socket_id = 0
     //  let wx_complete = wx_object.complete;
     ///////////////////////////////////

     /*
      */

    // let socketTask = new SocketTask(socket);

    /*  new WebSocket(url, protocols)
      // console.log(socket)
      try {
        
        let wx_res = {
          socketTaskId: socket_id,
          errMsg: "connectSocket:ok"
        }
       
        // Vue.prototype._socketTask = socketTask;
        if (wx_success) {
          wx_success(wx_res)
        }

      } catch (e) {
        if (wx_fail) {
          wx_fail()
        }
      } **/


    // console.log(socket)

    // return socketTask;
  }

  static onSocketOpen(callback) {
    if (Vue.prototype._socketTask) {
      Vue.prototype._socketTask._socket.addEventListener("open", function(event) {
        if (callback) {
          return callback(event);
        }
      });
    }
  }

  static sendSocketMessage(wx_object) {
    let data = wx_object.data; // 【必填】需要发送的内容
    //   let wx_success = wx_object.success;
    // let wx_fail = wx_object.fail;
    //  let wx_complete = wx_object.complete;
    ///////////////////////////////
    if (Vue.prototype._socketTask) {
      Vue.prototype._socketTask.send(data);
    }
  }

  static onSocketMessage(callback) {
    if (Vue.prototype._socketTask) {
      Vue.prototype._socketTask._socket.addEventListener("message", function(event) {
        if (callback) {
          callback(event);
        }
      });
    }
  }

  static onSocketError(callback) {
    if (Vue.prototype._socketTask) {
      Vue.prototype._socketTask._socket.addEventListener("error", callback);
    }
  }

  static onSocketClose(callback) {
    if (Vue.prototype._socketTask) {
      Vue.prototype._socketTask._socket.addEventListener("close", function(event) {
        if (callback) {
          callback(event);
        }
      });
    }
  }

  static closeSocket() {
    Vue.prototype._socketTask.close();
  }

  static offLocalServiceResolveFail() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceResolveFail() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceDiscoveryStop() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceDiscoveryStop() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceLost() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceLost() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceFound() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceFound() {
    console.error('HTML5 is not support mDNS!!');
  }
  static stopLocalServiceDiscovery() {
    console.error('HTML5 is not support mDNS!!');
  }
  static startLocalServiceDiscovery() {
    console.error('HTML5 is not support mDNS!!');
  }

  static createUDPSocket() {
    console.error('HTML5 is not support UDP!!');
  }

  // INFO: 已改
  static setStorageSync(key, value) {
    // eslint-disable-next-line no-useless-catch
    try {
      localStorage.setItem(key, value);
    } catch (vue_e) {
      const wx_e = {

      }
      throw wx_e
    }
  }
  // INFO: 已改
  static setStorage(wx_object) {
    if (!wx_object) {
      return
    }
    let wx_key = wx_object.key;
    let wx_data = wx_object.data;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ////////////
    wx.RUN((SUCCESS) => {
      const vue_key = wx_key
      const vue_data = wx_data
      localStorage.setItem(vue_key, vue_data);
      //
      const wx_errMsg = 'setStorage:ok';

      let vue_res = {
        errMsg: wx_errMsg
      }
      SUCCESS(vue_res)
      // FAIL(vue_res);
      // throw new Error("xxx")
    }, wx_success, wx_fail, wx_complete)
  }
  // INFO: 已改
  // INFO: 直接返回获取值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageSync.html）
  static getStorageSync(key) {
    return localStorage.getItem(key);
  }

  // INFO: 已改
  static getStorage(wx_object) {
    let key = wx_object.key;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;

    let res = {};
    try {
      let value = localStorage.getItem(key);
      if (value) {
        res.errMsg = 'getStorage:ok';
        res.data = value;
        if (wx_success) {
          wx_success(res);
        }
      } else {
        res.errMsg = 'getStorage:fail data not found';
        if (wx_fail) {
          wx_fail(res);
        }
      }
    } catch (error) {
      res.errMsg = error.message;
      if (wx_fail) {
        wx_fail(res);
      }
    }
    if (wx_complete) {
      wx_complete(res);
    }
  }

  // INFO: 已改
  // INFO: 直接删除值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeStorageSync.html）
  static removeStorageSync(key) {
    localStorage.removeItem(key);
  }

  // INFO: 已改
  static removeStorage(wx_object) {
    let key = wx_object.key;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;

    let res = {};
    try {
      localStorage.removeItem(key);
      res.errMsg = 'removeStorage:ok';
      if (wx_success) {
        wx_success(res);
      }
    } catch (error) {
      res.errMsg = error.message;
      if (wx_fail) {
        wx_fail(res);
      }
    }
    if (wx_complete) {
      wx_complete(res);
    }
  }

  // INFO: 已改
  // INFO: 直接删除全部值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.clearStorageSync.html）
  static clearStorageSync() {
    localStorage.clear();
  }

  // INFO: 已改
  static clearStorage(wx_object) {
    if (!wx_object) {
      localStorage.clear();
    } else {
      let wx_success = wx_object.success || '';
      let wx_fail = wx_object.fail || '';
      let wx_complete = wx_object.complete || '';

      let res = {};
      try {
        localStorage.clear();
        res.errMsg = 'clearStorage:ok';
        if (wx_success) {
          wx_success(res);
        }
      } catch (error) {
        res = { errMsg: error.message };
        if (wx_fail) {
          wx_fail(res);
        }
      }
      if (wx_complete) {
        wx_complete(res);
      }
    }
  }

  static getStorageInfo(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    let keysArray = new Array();
    for (let i = 0; i < localStorage.length; i++) {
      //所有键值
      let getKey = localStorage.key(i);
      keysArray.push(getKey);
    }
    let sizeStore = 0;
    if (localStorage) {
      //占用空间
      for (let item of Object.keys(localStorage)) {
        sizeStore += localStorage.getItem(item).length;

      }
    }
    try {
      wx_res = {
        keys: keysArray,
        // HACK: 是这样做吗？
        currentSize: Math.ceil((sizeStore / 1024).toFixed(2)),
        // TODO: 小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
        limitSize: ''
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static getStorageInfoSync() {
    let wx_res;
    try {
      let keysArray = new Array();
      for (let i = 0; i < localStorage.length; i++) {
        //所有键值
        let getKey = localStorage.key(i);
        keysArray.push(getKey);
      }
      let sizeStore = 0;
      if (localStorage) {
        //占用空间
        for (let item of Object.keys(localStorage)) {
          sizeStore += localStorage.getItem(item).length;

        }
      }
      wx_res = {
        keys: keysArray,
        // HACK: 是这样做吗？
        currentSize: Math.ceil((sizeStore / 1024).toFixed(2)), // 先转换成kb，再保留两位小数，最后向上取整
        // TODO: 小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
        limitSize: ''
      };
      return wx_res;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static createMapContext() {}

  // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
  static chooseImage() {}

  // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
  static previewImage() {}

  static getImageInfo(wx_object) {
    let src = wx_object.src;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res = {};
    let isGetImageInfo = false;
    //////////////////////////////////
    try {
      let pic = new Image();
      pic.onload = function() {
        isGetImageInfo = true;
        wx_res.errMsg = 'getImageInfo:ok';
        wx_res.width = this.width;
        wx_res.height = this.height;
        wx_res.path = src;
        wx_res.type = 'none';
        wx_res.orientation = 'none'; // HACK: 可以用 exif-js 库来实现？ (https://github.com/exif-js/exif-js)
        getImageInfoSuccess_callback();
      };
      pic.src = src;
      // 5秒后如果没有获取到数据就去回调执行 wx_fail() 和 wx_complete()
      setTimeout(function() {
        if (!isGetImageInfo) {
          getImageInfoFail_callback();
        }
      }, 5000);
    } catch (error) {
      getImageInfoFail_callback();
    }

    function getImageInfoFail_callback() {
      wx_res.errMsg = 'getImageInfo:fail invalid';
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }

    function getImageInfoSuccess_callback() {
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static saveImageToPhotosAlbum() {}

  static compressImage() {}

  static canvasDataURL(path, obj, callback) {
    let img = new Image();
    img.src = path;
    img.onload = function() {
      let that = this;
      // 默认按比例压缩
      let w = that.width,
        h = that.height,
        scale = w / h;
      w = obj.width || w;
      h = obj.height || w / scale;
      let quality = 0.7; // 默认图片质量为0.7
      //生成canvas
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      // 创建属性节点
      let anw = document.createAttribute('width');
      anw.nodeValue = w;
      let anh = document.createAttribute('height');
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);
      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      let base64 = canvas.toDataURL('image/jpeg', quality);
      let Blob = wx.convertBase64UrlToBlob(base64);
      let imgPath = window.URL.createObjectURL(Blob);
      callback({ imgPath: imgPath, Blob: Blob });
    };
  }
  static convertBase64UrlToBlob(urlData) {
    let arr = urlData.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  static chooseVideo(wx_object) {
    // let wx_res;
    if (wx_object) {
      let sourceType = wx_object.sourceType || ['album', 'camera']; //视频选择的来源
      // let compressed = wx_object.compressed || true; // 是否压缩所选择的视频文件
      //  let maxDuration = wx_object.maxDuration || 60; // 拍摄视频最长拍摄时间，单位秒
      //  let camera = wx_object.camera || 'back'; // 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
      let wx_success = wx_object.success;
      let wx_fail = wx_object.fail;
      let wx_complete = wx_object.complete;
      let wx_res;
      try {
        if (sourceType[0] == 'album') {
          // 视频选择的来源为 album ;
          let xsw_ThisVideo = document.createElement('input');
          xsw_ThisVideo.setAttribute('type', 'file');
          xsw_ThisVideo.setAttribute('id', 'xsw_Video');
          xsw_ThisVideo.setAttribute('accept', 'video/*');
          // 监听点击“选择文件”事件（需要手动点击“选择文件”按钮来打开dialog，貌似不能通过模拟来点击）
          xsw_ThisVideo.addEventListener(
            'change',
            function() {
              let file = xsw_ThisVideo.files[0];
              if (file) {
                wx_res = {
                  tempFilePath: undefined, // 选定视频的临时文件路径
                  duration: undefined, // 选定视频的时间长度
                  size: file.size, // 选定视频的数据量大小
                  height: undefined, // 返回选定视频的高度
                  width: undefined // 返回选定视频的宽度
                };
                if (wx_success) { wx_success(wx_res); }
                if (wx_complete) { wx_complete(wx_res); }
              }
            },
            false
          );
        } else {
          // 视频选择的来源为 camera ;
        }
      } catch (error) {
        wx_res = {
          errMsg: 'chooseVideo:fail'
        };
        if (wx_fail) { wx_fail(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    }
  }

  static saveVideoToPhotosAlbum(wx_object) {
    let filePath = wx_object.filePath;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let xsw_A = document.createElement('a');
      xsw_A.innerHTML = '<button>保存</button>';
      xsw_A.setAttribute('id', 'xswAH');
      xsw_A.setAttribute('download', '下载');
      xsw_A.setAttribute('style', 'font-size: 12px');
      let firstA = document.body.firstChild;
      document.body.insertBefore(xsw_A, firstA);
      let xswAH = document.getElementById('xswAH');
      xswAH.setAttribute('href', filePath);
      wx_res = { errMsg: 'saveVideoToPhotosAlbum:ok' };
      if (wx_success) { wx_success(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    } catch (e) {
      wx_res = { errMsg: 'saveVideoToPhotosAlbum:fail' };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }
  static createVideoContext() {
    /*  try {

        return new VC(id);
      } catch (error) {
        throw new Error(error);
      }*/
  }

  static setInnerAudioOption() {}
  static getAvailableAudioSources() {}
  // AudioContext
  static createAudioContext(id) {
    let ac = document.getElementById(id);

    ac.setSrc = function(src) {
      ac.src = src;
    };

    ac.seek = function(position) {
      ac.currentTime = position;
    };

    //console.warn(String.format(ONEKIT_GLOBAL_NOT_MAINTAIN, '<audio/>', 'createInnerAudioContext'));

    return ac;
  }

  // InnerAudioContext
  static createInnerAudioContext() {
    return {}; //new IAC();
  }

  static getBackgroundAudioPlayerState(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    let xsw_audio = document.getElementById('xsw_autoplayId');
    try {
      if (xsw_audio) {
        let audioStatus = '2';
        xsw_audio.addEventListener('playing', function() {
          audioStatus = '1';
        });
        xsw_audio.addEventListener('pause', function() {
          audioStatus = '0';
        });
        setTimeout(function() {
          let duration = xsw_audio.duration;
          let currentPosition = xsw_audio.currentTime;
          let status = audioStatus;
          let downloadPercent = parseInt((xsw_audio.buffered.end(0) / xsw_audio.duration) * 100);
          let dataUrl = xsw_audio.src;
          wx_res = {
            getBackgroundAudioPlayerState: 'ok',
            duration: duration,
            currentPosition: currentPosition,
            status: status,
            downloadPercent: downloadPercent,
            dataUrl: dataUrl
          };
          if (wx_success) {
            wx_fail(wx_res);
          }
          if (wx_complete) {
            wx_complete(wx_res);
          }
        }, 1000);
      } else {
        throw new Error('请先播放音乐！');
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static playBackgroundAudio(wx_object) {
    let dataUrl = wx_object.dataUrl;
    let title = wx_object.title;
    let coverImgUrl = wx_object.coverImgUrl;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let wrap;
      if (title || coverImgUrl) {
        wrap = document.createElement('div');
        wrap.innerHTML =
          '<div style="width: 80%;background-color: #444;margin-left: 10%;"><img src="' +
          coverImgUrl +
          '" style="width: 80px;height: 80px;display: inline-block;padding-left: 20px;margin-top: 10px;"><div style="display: inline-block;padding-left: 20px;color: #fff">' +
          title +
          '</div></div><audio src="" id="xsw_autoplayId"  style="width: 80%;margin-left: 10%"   controls="controls"  ></audio>';
        let firstT = document.body.firstChild;
        document.body.insertBefore(wrap, firstT);
      } else {
        wrap = document.createElement('audio');
        wrap.setAttribute('id', 'xsw_autoplayId');
        wrap.setAttribute('autoplay', 'autoplay');
        wrap.setAttribute('style', 'visibility: hidden;');
        let first = document.body.firstChild;
        document.body.insertBefore(wrap, first);
      }
      let xsw_audio = document.getElementById('xsw_autoplayId');
      xsw_audio.src = dataUrl;
      //xsw_audio.controls=true
      xsw_audio.autoplay = true;
      wx_res = { playBackgroundAudio: 'ok' };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static pauseBackgroundAudio(wx_object) {
    let xsw_audio = document.getElementById('xsw_autoplayId');
    if (!wx_object) {
      if (xsw_audio) {
        xsw_audio.pause();
      } else {
        throw new Error('请先播放音乐！');
      }
    } else {
      let wx_success = wx_object.success;
      let wx_fail = wx_object.fail;
      let wx_complete = wx_object.complete;
      let wx_res;
      try {
        if (xsw_audio) {
          xsw_audio.pause();
          wx_res = { pauseBackgroundAudio: 'ok' };
          if (wx_success) {
            wx_success(wx_res);
          }
          if (wx_complete) {
            wx_complete(wx_res);
          }
        } else {
          throw new Error('请先播放音乐！');
        }
      } catch (e) {
        wx_res = { errMsg: e.message };
        if (wx_fail) {
          wx_fail(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    }
  }

  static stopBackgroundAudio(wx_object) {
    let xsw_audio = document.getElementById('xsw_autoplayId');
    if (!wx_object) {
      if (xsw_audio) {
        xsw_audio.pause();
        xsw_audio.currentTime = 0;
      } else {
        throw new Error('请先播放音乐！');
      }
    } else {
      let wx_success = wx_object.success;
      let wx_fail = wx_object.fail;
      let wx_complete = wx_object.complete;
      let wx_res;
      try {
        if (xsw_audio) {
          xsw_audio.pause();
          wx_res = { pauseBackgroundAudio: 'ok' };
          if (wx_success) {
            wx_success(wx_res);
          }
          if (wx_complete) {
            wx_complete(wx_res);
          }
        } else {
          throw new Error('请先播放音乐！');
        }
      } catch (e) {
        wx_res = { errMsg: e.message };
        if (wx_fail) {
          wx_fail(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    }
  }

  static seekBackgroundAudio(wx_object) {
    let position = wx_object.position;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    let xsw_audio = document.getElementById('xsw_autoplayId');
    try {
      if (xsw_audio) {
        xsw_audio.currentTime = position;
        wx_res = { seekBackgroundAudio: 'ok' };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      } else {
        throw new Error('请先播放音乐！');
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static onBackgroundAudioPlay(callback) {
    setTimeout(function() {
      let xsw_audio = document.getElementById('xsw_autoplayId');
      if (xsw_audio) {
        xsw_audio.addEventListener('playing', function() {
          let audioStatus = '1';
          callback(audioStatus);
        });
      }
    });
  }

  static onBackgroundAudioPause(callback) {
    let audioStatus;
    let zzz = setInterval(function() {
      let xsw_audio = document.getElementById('xsw_autoplayId');
      if (xsw_audio) {
        xsw_audio.addEventListener('pause', function() {
          if (xsw_audio.currentTime == 0) {
            audioStatus = '2';
          } else {
            audioStatus = '0';
          }
        });
        let panStatus = '0';
        //console.log(audioStatus);
        if (panStatus == audioStatus) {
          callback(audioStatus);
          clearInterval(zzz);
        }
      }
    }, 1000);
  }

  static onBackgroundAudioStop(callback) {
    let audioStatus;
    let zzz = setInterval(function() {
      let xsw_audio = document.getElementById('xsw_autoplayId');
      if (xsw_audio) {
        xsw_audio.addEventListener('pause', function() {
          if (xsw_audio.currentTime == 0) {
            audioStatus = '2';
          } else {
            audioStatus = '0';
          }
        });
        let panStatus = '2';
        if (panStatus == audioStatus) {
          callback(audioStatus);
          clearInterval(zzz);
        }
      }
    }, 1000);
  }

  // 获取全局唯一的背景音频管理器

  //   static getBackgroundAudioManager() {
  //     let wrap = document.createElement('audio');
  //     wrap.setAttribute('id', 'xsw_autoplayId');
  //     wrap.setAttribute('autoplay', 'autoplay');
  //     wrap.setAttribute('style', 'visibility: hidden;');
  //     let first = document.body.firstChild;
  //     document.body.insertBefore(wrap, first);
  //     let xsw_audio = document.getElementById('xsw_autoplayId');
  //     let wz_0 = setInterval(function() {
  //       if (xsw_audio.title || xsw_audio.coverImgUrl || xsw_audio.singer) {
  //         xsw_audio.setAttribute('controls', 'controls');
  //         xsw_audio.style = 'width: 80%;margin-left: 10%';
  //         let div = document.createElement('div');
  //         div.innerHTML =
  //           '<div style="width: 80%;background-color: #444;padding-top: 5px;margin-left: 10%"><img src="' +
  //           xsw_audio.coverImgUrl +
  //           '" style="width: 80px;height: 80px;display: inline-block;padding-left: 20px;"><div style="display: inline-block;padding-left: 20px;color: #fff"><div>' +
  //           xsw_audio.title +
  //           '</div><div style="font-size: 14px;">' +
  //           xsw_audio.singer +
  //           '</div><br></div></div>';
  //         let first_0 = document.body.firstChild;
  //         document.body.insertBefore(div, first_0);
  //         clearInterval(wz_0);
  //       } else {
  //         /*xsw_audio.startTime=xsw_audio.currentTime;
  // 				clearInterval(wz_0);*/
  //       }
  //     });
  //     let wz_1 = setInterval(function() {
  //       if (xsw_audio.startTime) {
  //         xsw_audio.currentTime = xsw_audio.startTime;
  //         clearInterval(wz_1);
  //       } else {
  //         xsw_audio.startTime = xsw_audio.currentTime;
  //         clearInterval(wz_1);
  //       }
  //     });
  //     xsw_audio.seek = function(position) {
  //       xsw_audio.currentTime = position;
  //     };
  //     xsw_audio.stop = function() {
  //       xsw_audio.currentTime = 0;
  //       xsw_audio.pause();
  //     };
  //     xsw_audio.onCanplay = function(callback) {
  //       let wx_res;
  //       wx_res = {};
  //       setTimeout(function() {
  //         xsw_audio.addEventListener('playing', function() {
  //           callback(wx_res);
  //         });
  //       });
  //     };
  //     xsw_audio.onPlay = function(callback) {
  //       let wx_res;
  //       wx_res = {};
  //       setTimeout(function() {
  //         xsw_audio.addEventListener('playing', function() {
  //           callback(wx_res);
  //         });
  //       });
  //     };
  //     xsw_audio.onPause = function(callback) {
  //       let wx_res;
  //       wx_res = {};
  //       setTimeout(function() {
  //         xsw_audio.addEventListener('pause', function() {
  //           if (xsw_audio.currentTime == 0) {
  //           } else {
  //             callback(wx_res);
  //           }
  //         });
  //       });
  //     };
  //     xsw_audio.onStop = function(callback) {
  //       let wx_res;
  //       wx_res = {};
  //       setTimeout(function() {
  //         xsw_audio.addEventListener('pause', function() {
  //           if (xsw_audio.currentTime == 0) {
  //             callback(wx_res);
  //           } else {
  //           }
  //         });
  //       });
  //     };
  //     xsw_audio.onEnded = function(callback) {
  //       let wx_res;
  //       wx_res = {};
  //       setTimeout(function() {
  //         let wz_2 = setInterval(function() {
  //           if (xsw_audio.ended == true) {
  //             callback(wx_res);
  //             clearInterval(wz_2);
  //           }
  //         }, 1000);
  //       });
  //     };
  //     xsw_audio.onTimeUpdate = function(callback) {
  //       let wx_res;
  //       let currentTimeArray = [];
  //       wx_res = {};
  //       setTimeout(function() {
  //         let wz_3 = setInterval(function() {
  //           currentTimeArray.push(xsw_audio.currentTime);
  //           if (
  //             parseInt(currentTimeArray[currentTimeArray.length - 1]) -
  //               parseInt(currentTimeArray[currentTimeArray.length - 2]) >
  //             1
  //           ) {
  //             callback(wx_res);
  //             clearInterval(wz_3);
  //           }
  //         }, 500);
  //       });
  //     };
  //     xsw_audio.onWaiting = function(callback) {
  //       let wx_res;
  //       let currentTimeArray = [];
  //       wx_res = {};
  //       setTimeout(function() {
  //         let wz_4 = setInterval(function() {
  //           xsw_audio.addEventListener('playing', function() {
  //             if (
  //               parseInt(currentTimeArray[currentTimeArray.length - 1]) ==
  //               parseInt(currentTimeArray[currentTimeArray.length - 2])
  //             ) {
  //               callback('wx_res');
  //               clearInterval(wz_4);
  //             }
  //           });
  //         }, 1000);
  //       });
  //     };
  //     return xsw_audio;
  //   }

  static getBackgroundAudioManager() {

    let audio = document.createElement('audio');
    audio.setAttribute('id', 'backgroundAudio');
    let firstChild = document.body.firstChild;
    document.body.insertBefore(audio, firstChild);
    let bgm = document.getElementById('backgroundAudio');
    bgm.autoplay = true;
    bgm.controls = true;

    // bgm.play = function() {
    //   bgm.play();
    // };

    // bgm.pause = function() {
    //   bgm.pause();
    // };

    // bgm.seek = function() {
    //   bgm.currentTime = seek;
    // };

    bgm.stop = function() {
      bgm.pause();
      bgm.currentTime = 0;
    };

    bgm.onCanPlay = function(callback) {
      bgm.oncanplay = function() {
        console.log(bgm.duration);
        if (callback) {
          callback();
        }
        // （必填）音频标题，用于原生音频播放器音频标题。
        if (!bgm.title) {
          throw new Error('setBackgroundAudioState:fail');
        }
      };
    };

    bgm.onWaiting = function(callback) {
      bgm.onwaiting = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onPlay = function(callback) {
      bgm.onplay = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onPause = function(callback) {
      bgm.onpause = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onSeeking = function(callback) {
      bgm.onseeking = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onSeeked = function(callback) {
      bgm.onseeked = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onEnded = function(callback) {
      bgm.onended = function() {
        if (callback) {
          callback();
        }
      };
    };

    // INFO: 停止播放时调用，在小程序中播放背景音乐时通知栏有控制器，但是HTML5无法实现，所以这里也调用onended事件
    bgm.onStop = function(callback) {
      bgm.onended = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onTimeUpdate = function(callback) {
      bgm.ontimeupdate = function() {
        if (callback) {
          callback();
        }
      };
    };

    bgm.onNext = function() {};
    bgm.onPrev = function() {};

    return bgm;
  }

  //BackgroundAudioManager

  //LivePusher

  static startRecord() {
    //  let wx_success = wx_object.success;
    // let wx_fail = wx_object.success;
    //  let wx_complete = wx_object.success;
    //////////////////////////////
    try {
      wx.startRecord();
    } catch (error) {
      const wx_res = {}
      wx_res.errMsg = error.message;
      console.log(wx_res);
    }
  }

  static stopRecord(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.success;
    let wx_complete = wx_object.success;
    //////////////////////////////
    let wx_res = {};
    //let localId;
    wx.stopRecord({
      success: function(res) {
        if (wx_success) {
          wx_res.errMsg = 'startRecord:ok';
          wx_res.tempFilePath = res.localId; // 小程序中会返回录音文件的临时存放路径 tempFilePath ，JS-SDK中会返回录音文件的 localId ，所以这里直接将 localId 赋值给 tempFilePath，让用户获取 tempFilePath 来播放录音。
          wx_success(wx_res);
        }
      },
      fail: function(wx_res) {
        wx_fail(wx_res);
      },
      complete: function(wx_res) {
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    });
  }

  //CameraFrameListener

  //EditorContext

  static getLocation() { //wx_object) {
    // let type = wx_object.type || 'wgs84'; // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入 'gcj02'
    // let altitude = wx_object.altitude || 'false'; //【小程序传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度】
    //let wx_success = wx_object.success;
    //let wx_fail = wx_object.fail;
    // let wx_complete = wx_object.complete;

    // TODO: getLocation:模拟器无法返回speed、accuracy（手机上好像可以返回，还没试）
    // HACK: getLocation:JS-SDK无法返回{ altitude高度，verticalAccuracy垂直精度（Android 无法获取，返回 0）, horizontalAccuracy水平精度 }
    if (navigator.geolocation) {
      let n = navigator.geolocation.getCurrentPosition(function(res) {
        console.log(res); // 需要的坐标地址就在res中
        console.log(n.verticalAccuracy);
      });
    } else {
      alert('该浏览器不支持定位');
    }
    /*wx.getLocation({
      type: type,
      success: function(res) {
        if (res && success) {
          res.altitude = 0;
          res.verticalAccuracy = 0;
          res.horizontalAccuracy = 0;
          wx_success(res);
        }
      },
      fail: function(res) {
        if (wx_fail) {
          wx_fail(res);
        }
      },
      complete: function(res) {
        if (wx_complete) {
          wx_complete(res);
        }
      }
    });*/
  }

  static openLocation(wx_object) {
    let latitude = wx_object.latitude; //（必填） 纬度，浮点数，范围为90 ~ -90
    let longitude = wx_object.longitude; //（必填）经度，浮点数，范围为180 ~ -180
    // TODO: 5~18 转换为 1~28
    let scale = wx_object.latitude || 28; // 地图缩放级别,整形值,范围从1~28。默认为最大【小程序：缩放比例，范围5~18】
    let name = wx_object.name; // 位置名
    let address = wx_object.address; // 地址详情说明
    let infoUrl = wx_object.infoUrl; // * 在查看位置界面底部显示的超链接,可点击跳转
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;

    try {
      let errorInfo = '';
      let hasError = false;
      const onekit_global = {}
      if (typeof latitude !== 'number') {
        errorInfo =
          String.format(onekit_global.error_head, 'openLocation') +
          String.format(onekit_global.error_body, 'latitude', 'Number', typeof longitude);
        hasError = true;
      } else if (!longitude) {
        // TODO: 无法进入这里判断
        errorInfo += String.format(onekit_global.error_body, 'longitude', 'Number');
        hasError = true;
      }
      if (hasError) {
        throw new Error(errorInfo);
      }
    } catch (error) {
      console.error(error.message);
    }

    // INFO: success 会返回 res , fail 和 complete 不会返回
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address,
      scale: scale,
      infoUrl: infoUrl,
      success: function(res) {
        if (wx_success) {
          wx_success(res);
        }
      },
      fail: function() {
        wx_fail();
      },
      complete: function() {
        if (wx_complete) {
          wx_complete();
        }
      }
    });
  }

  static chooseLocation() {}

  //share

  static drawCanvas(wx_object) {
    let canvasId = wx_object.canvasId;
    let actions = wx_object.actions;
    let reserve = wx_object.reserve;
    ///////////////////
    let eCanvas = $("[canvasid='" + canvasId + "']")[0];
    wx._draw(eCanvas, actions, reserve);
  }
  static _draw() { //eCanvas, actions, reserve) {
    /*
        window.requestAnimationFrame(function() {

          let canvas = eCanvas.getContext("2d");
          canvas.clearRect(0, 0, eCanvas.width, eCanvas.height);
          for (let a = 0; a < actions.length; a++) {
            let action = actions[a];
            let data = action.data;
            let method = action.method;
            switch (method) {
              case "canvasToTempFilePath":
                break;
              case "save":
                canvas.save();
                break;
              case "restore":
                canvas.restore();
                break;
              case "setStrokeStyle":
                canvas.strokeStyle = COLOR.fromRGBAs(data[1]);
                break;
              case "setFillStyle":
                let fillStyle = data[0];
                if (fillStyle == "normal") {
                  let setFillStyle = COLOR.fromRGBAs(data[1]); // 设置填充画笔颜色
                  canvas.fillStyle = setFillStyle;
                } else if (fillStyle == "radial") {
                  let colorStops = data[2];
                  let colors = [colorStops.length];
                  let stops = [colorStops.length];
                  for (let s = 0; s < colorStops.length; s++) {
                    stops[s] = (colorStops[s])[0];
                    let rgba = (colorStops[s])[1];
                    colors[s] = COLOR.fromRGBAs(rgba);
                  }
                  let info = data[1];
                  let cgx = dp2px(info[0]);
                  let cgy = dp2px(info[1]);
                  let cgr = dp2px(info[2]);
                  let gradient = new RadialGradient(cgx, cgy, cgr, colors, stops, Shader.TileMode.CLAMP);
                  canvas.fillStyle = gradient;

                } else if (fillStyle == "linear") {
                  let colorStops = data[2];
                  let colors = [colorStops.length];
                  let stops = [colorStops.length];
                  for (let s = 0; s < colorStops.length; s++) {
                    stops[s] = (colorStops[s])[0];
                    let rgba = (colorStops[s])[1];
                    colors[s] = COLOR.fromRGBAs(rgba);
                  }
                  let info = data[1];
                  let lgx0 = dp2px(info[0]);
                  let lgy0 = dp2px(info[1]);
                  let lgx1 = dp2px(info[2]);
                  let lgy1 = dp2px(info[3]);
                  let gradient = new android.graphics.LinearGradient(lgx0, lgy0, lgx1, lgy1, colors, stops, Shader.TileMode.CLAMP);
                  canvas.fillStyle = gradient;
                } else {
                  console.error("[setFillStyle]", fillStyle + "");
                }
                break;
              case "clearRect":
                canvas.drawRect(new Rect(dp2px(data[0]),
                  dp2px(data[1]),
                  dp2px(data[0] + data[2]),
                  dp2px(data[1] + data[3])), clearPaint);

                break;
              case "fillPath":
                canvas.beginPath();
                // canvas.globalAlpha = data[0];
                for (let d = 0; d < data.length; d++) {
                  let item = data[d];
                  let method2 = item.method;
                  let data2 = item.data;
                  switch (method2) {
                    case "rect":
                      canvas.drawRect(new Rect(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[0] + data2[2]),
                        dp2px(data2[1] + data2[3])), fillPaint);
                      break;
                    case "moveTo":
                      canvas.moveTo(data2[0], data2[1]);
                      break;
                    case "lineTo":
                      canvas.lineTo(data2[0], data2[1]);
                      break;
                    case "closePath":
                      canvas.closePath();
                      break;
                    case "bezierCurveTo":
                      canvas.bezierCurveTo(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[2]),
                        dp2px(data2[3]),
                        dp2px(data2[4]),
                        dp2px(data2[5]));
                      break;
                    case "quadraticCurveTo":
                      canvas.quadraticCurveTo(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[2]),
                        dp2px(data2[3]));
                      break;

                    case "arc": {
                      let x = data2[0];
                      let y = data2[1];
                      let r = data2[2];
                      let a1 = data2[3];
                      let a2 = data2[4];
                      let counterclockwise = data2[5];
                      canvas.arc(x, y, r, a1, a2, counterclockwise);
                    }
                    break;
                  default:
                    console.error("===========", method2);
                    break;
                  }
                }
                canvas.fill();
                break;
              case "strokePath":
                canvas.beginPath();
                // canvas.globalAlpha = data[0];
                for (let d = 0; d < data.length; d++) {
                  let item = data[d];
                  let method2 = item.method;
                  let data2 = item.data;
                  switch (method2) {
                    case "rect":
                      canvas.drawRect(new Rect(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[0] + data2[2]),
                        dp2px(data2[1] + data2[3])), strokePaint);
                      break;
                    case "moveTo":
                      canvas.moveTo(data2[0], data2[1]);
                      break;
                    case "lineTo":
                      canvas.lineTo(data2[0], data2[1]);
                      break;
                    case "closePath":
                      canvas.closePath();
                      break;
                    case "bezierCurveTo":
                      canvas.bezierCurveTo(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[2]),
                        dp2px(data2[3]),
                        dp2px(data2[4]),
                        dp2px(data2[5]));
                      break;
                    case "quadraticCurveTo":
                      canvas.quadraticCurveTo(dp2px(data2[0]),
                        dp2px(data2[1]),
                        dp2px(data2[2]),
                        dp2px(data2[3]));
                      break;
                    case "arc": {
                      let x = data2[0];
                      let y = data2[1];
                      let r = data2[2];
                      let a1 = data2[3];
                      let a2 = data2[4];
                      let counterclockwise = data2[5];
                      canvas.arc(x, y, r, a1, a2, counterclockwise);
                    }
                    break;
                  default:
                    console.error("===========2", method2);
                    break;
                  }
                }
                canvas.stroke();
                break;
              case "setShadow":
                this.setLayerType(LAYER_TYPE_SOFTWARE, null);
                fillPaint.setShadowLayer(data[2] / 2, data[0], data[1], COLOR.fromRGBAs(data[3])); // 实心矩形 & 其阴影
                break;
              case "setLineCap":
                let lineCap = data[0];
                switch (lineCap) {
                  case "butt":
                    strokePaint.setStrokeCap(Paint.Cap.BUTT);
                    break;
                  case "round":
                    strokePaint.setStrokeCap(Paint.Cap.ROUND);
                    break;
                  case "square":
                    strokePaint.setStrokeCap(Paint.Cap.SQUARE);
                    break;
                  default:
                    break;
                }
                break;
              case "setLineWidth":
                strokePaint.setStrokeWidth(data[0]);
                break;
              case "setLineJoin":
                let lineJoin = data[0];
                switch (lineJoin) {
                  case "bevel":
                    strokePaint.setStrokeJoin(Paint.Join.BEVEL);
                    break;
                  case "round":
                    strokePaint.setStrokeJoin(Paint.Join.ROUND);
                    break;
                  case "miter":
                    strokePaint.setStrokeJoin(Paint.Join.MITER);
                    break;
                  default:
                    break;
                }
                break;
              case "setLineDash":
                let data2 = data[0];
                let items = [data2.length];
                for (let i = 0; i < data2.length; i++) {
                  items[i] = data2.get(i);
                }
                let pathEffect = new DashPathEffect(items, data[1]);
                strokePaint.setPathEffect(pathEffect);
                break;
              case "setMiterLimit":
                break;
              case "scale":
                canvas.scale(data[0], data[1]);
                break;
              case "rotate":
                canvas.rotate((data[0] * 180 / Math.PI));
                break;
              case "translate":
                canvas.translate(dp2px(data[0]),
                  dp2px(data[1]));
                break;
              case "drawImage": {
                let x = data.length > 1 ? dp2px(data[1]) : 0;
                let y = data.length > 2 ? dp2px(data[2]) : 0;
                let type_url = OneKit.getUrl(data[0]);
                let url = type_url[1];
                let bitmap;
                if (type_url[0].equalsIgnoreCase("asset")) {
                  bitmap = ASSET.loadImage(url, false);
                } else {
                  bitmap = FSO.loadImage(url, false);
                }
                let width = data.length > 3 ? dp2px(data[3]) : bitmap.getWidth();
                let height = data.length > 4 ? dp2px(data[4]) : bitmap.getHeight();
                let matrix = new Matrix();
                matrix.postScale(dp2px(width) / bitmap.getWidth(), dp2px(height) / bitmap.getHeight());
                let dstbmp = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(),
                  bitmap.getHeight(), matrix, true);
                canvas.drawBitmap(dstbmp, x, y, fillPaint);
              }
              break;
            case "setFontSize":
              fillPaint.setTextSize(dp2px(data[0]));
              break;
            case "fillText":
              let text = data[0];
              canvas.drawText(text, dp2px(data[1]), dp2px(data[2]) - textBaseLineY, fillPaint);
              break;
            case "setTextAlign":
              let textAlign = data[0];
              switch (textAlign) {
                case "left":
                  fillPaint.setTextAlign(Paint.Align.LEFT);
                  break;
                case "center":
                  fillPaint.setTextAlign(Paint.Align.CENTER);
                  break;
                case "right":
                  fillPaint.setTextAlign(Paint.Align.RIGHT);
                  break;
                default:
                  break;
              }
              break;
            case "setTextBaseLine":
              let textBaseLine = data[0];
              let fontMetrics = fillPaint.getFontMetrics();
              switch (textBaseLine) {
                case "top":
                  textBaseLineY = fontMetrics.top;
                  break;
                case "bottom":
                  textBaseLineY = fontMetrics.bottom;
                  break;
                case "middle":
                  textBaseLineY = (fontMetrics.bottom + fontMetrics.top) / 2;
                  break;
                case "normal":
                  textBaseLineY = 0;
                  break;
                default:
                  break;
              }
              break;
            case "setGlobalAlpha":
              globalAlpha = data[0];
              break;
            default:
              console.error("----------", method);
              break;
            }
          }


          //   if (_canvasToTempFilePath != null) {
          //  // console.error(JSON.stringify(_canvasToTempFilePath));
          //  let OBJECT = _canvasToTempFilePath;
          //  let x = (OBJECT.containsKey("x") ? OBJECT.get("x") : 0);
          //  let y = (OBJECT.containsKey("y") ? OBJECT.get("y") : 0);
          //  let width = (OBJECT.containsKey("width") ? OBJECT.get("width") : px2dp(this.getWidth()) - x);
          //  let height = (OBJECT.containsKey("height") ? OBJECT.get("height") : px2dp(this.getHeight()) - y);
          //  let destWidth = (OBJECT.containsKey("destWidth") ? OBJECT.get("destWidth") : width);
          //  let destHeight = (OBJECT.containsKey("destHeight") ? OBJECT.get("destHeight") : height);
          //  let fileType = (OBJECT.containsKey("fileType") ? OBJECT.get("fileType") : "png");
          //  let quality = (OBJECT.containsKey("quality") ? OBJECT.get("quality") : 1);
          //  _canvasToTempFilePath = null;
          //  //////////////////
          //  try {
          //  this.buildDrawingCache();
          //  let saveImage = this.getDrawingCache();
          //  saveImage = cn.onekit.IMAGE.crop(saveImage, new Rect(dp2px(x), dp2px(y), dp2px(x + width), dp2px(y + height)));
          //  saveImage = cn.onekit.IMAGE.scale(saveImage, width / destWidth, height / destHeight);
          //  //
          //  let androidTempDir = context.getExternalCacheDir().getPath();
          //  let androidUUIDname = OneKit.createUUID() + "." + fileType;
          //  let file = new java.io.File(androidTempDir, androidUUIDname);
          //  file.createNewFile();
          //  let fos = new FileOutputStream(file);
          //  saveImage.compress(fileType.equalsIgnoreCase("png") ? Bitmap.CompressFormat.PNG : Bitmap.CompressFormat.JPEG, (100 * quality), fos);
          //  fos.flush();
          //  } catch (e) {
          //  e.printStackTrace();
          //  }
          //  }
        });*/
  }

  static saveFile() {}

  static getFileInfo() {}

  static getSavedFileList() {}

  static getSavedFileInfo() {}

  static removeSavedFile() {}

  static openDocument() {}

  static createCameraContext() {}

  static login() {
    let weiXdeng = document.createElement('button');
    weiXdeng.setAttribute('id', 'weiXingDeng');
    weiXdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    weiXdeng.setAttribute('onclick', 'OpenInterface.weixinDian()');
    weiXdeng.innerText = '微信登录';
    let firstDian = document.body.firstChild;
    document.body.insertBefore(weiXdeng, firstDian);
    let zhiFdeng = document.createElement('button');
    zhiFdeng.setAttribute('id', 'zhiFBDeng');
    zhiFdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    zhiFdeng.setAttribute('onclick', 'OpenInterface.zhiFBDian()');
    zhiFdeng.innerText = '支付宝登录';
    document.body.appendChild(zhiFdeng);
    let weiBdeng = document.createElement('button');
    weiBdeng.setAttribute('id', 'weiBoDeng');
    weiBdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    weiBdeng.setAttribute('onclick', 'OpenInterface.weiBoDian()');
    weiBdeng.innerText = '微博登录';
    document.body.appendChild(weiBdeng);
    let QQdeng = document.createElement('button');
    QQdeng.setAttribute('id', 'QQDeng');
    QQdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
    QQdeng.setAttribute('onclick', 'OpenInterface.QQDian()');
    QQdeng.innerText = 'QQ登录';
    document.body.appendChild(QQdeng);
  }
  static weixinDian() {
    location.href =
      'https://open.weixin.qq.com/connect/qrconnect?appid=wx240ff52c65528fbb&scope=snsapi_login&redirect_uri=https%3A%2F%2Fwww.onekit.com%2Fpassport0%2Flogin%2FPlogin.php&state=' +
      Math.ceil(Math.random() * 1000) +
      '&login_type=jssdk&self_redirect=default';
  }
  static zhiFBDian() {
    location.href =
      'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018030502321064&scope=auth_user&redirect_uri=https://www.onekit.com/passport/login/ZFlogin.php&state=' +
      Math.ceil(Math.random() * 1000);
  }
  static weiBoDian() {
    location.href =
      'https://api.weibo.com/oauth2/authorize?client_id=1741134067&redirect_uri=https%3A%2F%2Fwww.onekit.cn%2Fpassport0%2Flogin%2FWBlogin%2FWlogin.php&response_type=code';
  }
  static QQDian() {
    location.href =
      'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101475870&redirect_uri=https://www.onekit.cn/passport0/login/QQlogin.php&state=' +
      Math.ceil(Math.random() * 1000);
  }

  static checkSession() {}

  static reportMonitor() {}

  static reportAnalytics() {

  }

  static requestPayment(wx_object) {
    // 小程序参数
    let timestamp = wx_object.timestamp; // 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
    let nonceStr = wx_object.nonceStr; // 随机字符串，长度为32个字符以下
    let package_s = wx_object.package; // 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***（ package 为js关键词，所以取名为 package_s ）
    let signType = wx_object.signType; // 签名算法
    let paySign = wx_object.paySign; // 签名
    let wx_success = wx_object.success || '';
    let wx_fail = wx_object.fail || '';
    let wx_complete = wx_object.complete || '';
    //
    const res = {}
    wx.chooseWXPay({
      // JS-SDK参数
      timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
      package: package_s, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: paySign, // 支付签名
      success: wx_success(res),
      fail: wx_fail(res),
      complete: wx_complete(res)
    });
  }


  static openSetting() {}

  static getSetting() {}

  //Address

  static addCard(wx_object) {
    let cardList = wx_object.cardList;
    let wx_success = wx_object.success || '';
    let wx_fail = wx_object.fail || '';
    let wx_complete = wx_object.complete || '';
    /////////////////////////////////
    wx.openCard({
      cardList: cardList, // 需要添加的卡券列表
      success: wx_success,
      fail: wx_fail,
      complete: wx_complete
    });
  }

  static openCard(wx_object) {
    let cardList = wx_object.cardList;
    let wx_success = wx_object.success || '';
    let wx_fail = wx_object.fail || '';
    let wx_complete = wx_object.complete || '';
    /////////////////////////////////
    wx.openCard({
      cardList: cardList, // 需要打开的卡券列表
      success: wx_success,
      fail: wx_fail,
      complete: wx_complete
    });
  }

  static checkIsSupportSoterAuthentication() {}

  static startSoterAuthentication() {}

  static checkIsSoterEnrolledInDevice() {}

  static getWeRunData() {}

  // 小程序和 JS-SDK 都有 iBeacon 的实现，但是貌似不一样
  static startBeaconDiscovery() {
    // let uuids = wx_object.uuids;
    // let ignoreBluetoothAvailable = wx_object.ignoreBluetoothAvailable;
    // let wx_success = wx_object.success;
    // let wx_fail = wx_object.success;
    // let wx_complete = wx_object.success;
    // //////////////////////////////
    // wx.startSearchBeacons({
    //   ticket: '', //摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
    //   complete: function(argv) {
    //     //开启查找完成后的回调函数
    //   }
    // });
  }

  static stopBeaconDiscovery() {}

  static getBeacons() {}

  static onBeaconUpdate() {}

  static onBeaconServiceChange() {}

  static getHCEState() {}

  static startHCE() {}

  static stopHCE() {}

  static onHCEMessage() {}

  static sendHCEMessage() {}

  static startWiFi() {}

  static stopWiFi() {}

  static connectWiFi() {}

  static getWiFiList() {}

  static onGetWiFiList() {}

  static setWiFiList() {}

  static onWiFiConnected() {}

  static getConnectedWiFi() {}

  static openBluetoothAdapter() {}

  static closeBluetoothAdapter() {}

  static getBluetoothAdapterState() {}

  static onBluetoothAdapterStateChange() {}

  static startBluetoothDevicesDiscovery() {}

  static stopBluetoothDevicesDiscovery() {}

  static getBluetoothDevices() {}

  static getConnectedBluetoothDevices() {}

  static onBluetoothDeviceFound() {}

  static createBLEConnection() {}

  static closeBLEConnection() {}

  static getBLEDeviceServices() {}

  static getBLEDeviceCharacteristics() {}

  static readBLECharacteristicValue() {}

  static writeBLECharacteristicValue() {}

  static notifyBLECharacteristicValueChange() {}

  static onBLEConnectionStateChange() {}

  static onBLECharacteristicValueChange() {}

  static makePhoneCall(wx_object) {
    let phoneNumber = wx_object.phoneNumber;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      location.href = 'tel:' + phoneNumber;
      wx_res = {};
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  // TODO: 未改未测试
  // HACK: 应该不能通过web方式实现
  static addPhoneContact(wx_object) {
    let phoneNumber = wx_object.phoneNumber;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      let oDiv = document.createElement('div');
      oDiv.innerHTML = "<a  id='biaoDown' href='#' style='display: none'></a>";
      console.log(oDiv);
      document.body.appendChild(oDiv);
      let Url2 = document.getElementById('biaoDown');
      Url2.setAttribute('href', 'wtai://wp/ap;' + phoneNumber + ';');
      wx_res = {};
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static getBatteryInfo(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.success;
    let wx_complete = wx_object.success;
    //////////////////////////////
    try {
      let wx_res = {};
      navigator.getBattery().then(function(battery) {
        wx_res.errMsg = 'getBatteryInfo:ok';
        wx_res.level = battery.level * 100;
        wx_res.isCharging = battery.charging;
      });
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (error) {
      const wx_res = {
        errMsg: error.message
      }
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static getBatteryInfoSync(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.success;
    let wx_complete = wx_object.success;
    //////////////////////////////
    try {
      let wx_res = {};
      navigator.getBattery().then(function(battery) {
        wx_res.errMsg = 'getBatteryInfoSync:ok';
        wx_res.level = battery.level * 100;
        wx_res.isCharging = battery.charging;
      });
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (error) {
      const wx_res = {
        errMsg: error.message
      }
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static setClipboardData(wx_object) {
    //  let data = wx_object.data; // 【必填】剪贴板的内容
    //  let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    /////////////////////////////
    let wx_res = {};
    try {
      // let oDiv = document.createElement('div');
      // oDiv.innerHTML = "<textarea  id='onekit_clipboard' style='opacity: 0'>" + data + '</textarea>';
      // document.body.appendChild(oDiv);
      // let Url2 = document.getElementById('onekit_clipboard');
      // Url2.select(); // 选择对象
      // document.execCommand('copy'); // 执行浏览器复制命令
      // wx_res.errMsg = 'setClipboardData:ok';
      // if (wx_success) {
      //   wx_success(wx_res);
      // }
      // if (wx_complete) {
      //   wx_complete(wx_res);
      // }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static getClipboardData(wx_object) {
    //let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res = {};
    try {
      // let clipboardData = clipboardData.getData('Text'); // 只能在 IE 浏览器中获取剪贴板内容
      // wx_res.errMsg = 'getClipboardData:ok';
      // wx_res.data = clipboardData;
      // if (wx_success) {
      //   wx_success(wx_res);
      // }
      // if (wx_complete) {
      //   wx_complete(wx_res);
      // }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }
  static setScreenBrightness() {
    // 设置屏幕亮度
    //plus.screen.setBrightness(0.5);
  }

  static getScreenBrightness() {
    // plus.screen.getBrightness();
  }

  static setKeepScreenOn() {}

  static captureScreen() {
    html2canvas(document.body).then(function(canvas) {
      //let ctx = cas.getContext('2d');
      //canvas.width = 100, canvas.height = 100;
      let dataURL = canvas.toDataURL('image/png', 1);
      if (Vue.prototype.Screen_callback) {
        let wx_res = { image: dataURL };
        Vue.prototype.Screen_callback(wx_res);
      }
    });
  }

  static onUserCaptureScreen(callback) {
    Vue.prototype.Screen_callback = callback;
  }

  static onAccelerometerChange(callback) {
    Vue.prototype.Accelerometer_callback = callback;
  }
  static _callback(event) {
    if (Vue.prototype.Accelerometer_callback) {
      let acceleration = event.accelerationIncludingGravity;
      let wx_res = {
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
      };
      Vue.prototype.Accelerometer_callback(wx_res);
    }
  }
  static startAccelerometer(wx_object) {
    // let interval = wx_object.interval;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////
    let wx_res;
    try {
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', Vue.prototype.Accelerometer__callback, false);
        wx_res = {
          errMsg: 'startAccelerometer:ok'
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      } else {
        wx_res = {
          errMsg: 'startAccelerometer:fail'
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static stopAccelerometer(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    let wx_res;
    try {
      if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', Vue.prototype.Accelerometer__callback, false);
        wx_res = {
          errMsg: 'stopAccelerometer:ok'
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      } else {
        wx_res = {
          errMsg: 'stopAccelerometer:fail'
        };
        if (wx_success) {
          wx_success(wx_res);
        }
        if (wx_complete) {
          wx_complete(wx_res);
        }
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static _deviceorientation(event) {
    if (Vue.prototype.Compass_callback) {
      let wx_res = {
        direction: event.alpha,
        accuracy: 'unknown'
      };
      Vue.prototype.Compass_callback(wx_res);
    }
  }
  static onCompassChange(callback) {
    Vue.prototype.Compass_callback = callback;
  }
  static offCompassChange() {
    Vue.prototype.Compass_callback = null;
  }
  static startCompass(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////
    let wx_res;
    try {
      if (window.DeviceMotionEvent) {
        if (Vue.prototype.Compass_callback) {
          window.addEventListener('deviceorientation', Vue.prototype.Compass_deviceorientation, false);
        }
        //
        wx_res = {
          errMsg: 'startCompass:ok'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      } else {
        wx_res = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static stopCompass(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////
    let wx_res;
    try {
      if (window.DeviceMotionEvent) {
        window.removeEventListener('deviceorientation', Vue.prototype.Compass_deviceorientation, false);
        //
        wx_res = {
          errMsg: 'stopCompass:ok'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      } else {
        wx_res = {
          errMsg: 'stopDeviceMotionListening:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static startDeviceMotionListening(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    //  let interval = wx_object.interval || 'normal'; // 监听陀螺仪数据回调函数的执行频率
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////////
    let wx_res;
    try {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', Vue.prototype.DeviceMotion_callback, false);
        wx_res = {
          errMsg: 'startDeviceMotionListening:ok'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      } else {
        wx_res = {
          errMsg: 'startDeviceMotionListening:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (error) {
      wx_res = { errMsg: error.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static stopDeviceMotionListening(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    /////////////////////////////////
    let wx_res;
    try {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', Vue.prototype.DeviceMotion_callback, false);
        wx_res = {
          errMsg: 'stopDeviceMotionListening:ok'
        };
      } else {
        wx_res = {
          errMsg: 'stopDeviceMotionListening:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (error) {
      wx_res = { errMsg: error.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static onDeviceMotionChange(callback) {
    Vue.prototype.DeviceMotioncallback = callback;
  }

  static startGyroscope(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    //let interval = wx_object.interval || 'normal'; // 监听陀螺仪数据回调函数的执行频率
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////////
    let wx_res;
    try {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('devicemotion', Vue.prototype.Gyroscope_callback, false);
        wx_res = {
          errMsg: 'startGyroscope:ok'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      } else {
        wx_res = {
          errMsg: 'startGyroscope:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (error) {
      wx_res = { errMsg: error.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static stopGyroscope(wx_object) {
    if (!wx_object) {
      wx_object = {};
    }
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    /////////////////////////////////
    let wx_res;
    try {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('devicemotion', Vue.prototype.Gyroscope_callback, false);
        wx_res = {
          errMsg: 'stopGyroscope:ok'
        };
      } else {
        wx_res = {
          errMsg: 'stopGyroscope:fail'
        };
        if (wx_success) { wx_success(wx_res); }
        if (wx_complete) { wx_complete(wx_res); }
      }
    } catch (error) {
      wx_res = { errMsg: error.message };
      if (wx_fail) { wx_fail(wx_res); }
      if (wx_complete) { wx_complete(wx_res); }
    }
  }

  static onGyroscopeChange(callback) {
    Vue.prototype.Gyroscopecallback = callback;
  }

  static onMemoryWarning(callback) {
    let _callback = callback;
    //////////////////////////////
    let wx_res = {};
    wx_res.level = 1;
    try {
      const memoryInfo = window.performance.memory;
      const totalJSHeapSize = memoryInfo.totalJSHeapSize;
      const usedJSHeapSize = memoryInfo.usedJSHeapSize;
      const remainJsHeapSize = totalJSHeapSize - usedJSHeapSize;
      const MEMORY_MODERATE = totalJSHeapSize * 0.15;
      const MEMORY_LOW = totalJSHeapSize * 0.1;
      const MEMORY_CRITICAL = totalJSHeapSize * 0.05;
      if (MEMORY_LOW < remainJsHeapSize <= MEMORY_MODERATE) {
        wx_res.level = 5;
      } else if (MEMORY_CRITICAL < remainJsHeapSize <= MEMORY_LOW) {
        wx_res.level = 10;
      } else if (remainJsHeapSize <= MEMORY_CRITICAL) {
        wx_res.level = 15;
      } else {
        wx_res.level = '';
      }
      if (_callback) {
        _callback(wx_res);
      }
    } catch (error) {
      wx_res.errMsg = error.message;
      if (_callback) {
        _callback(wx_res);
      }
    }
  }

  static scanItem() {}
  static scanCode() {
    // let onlyFromCamera = wx_object.onlyFromCamera || false; // 是否只能从相机扫码，不允许从相册选择图片（JS-SDK不支持）
    //  let scanType = wx_object.scanType || ['barCode', 'qrCode']; // 扫码类型
    // let wx_success = wx_object.success;
    // let wx_fail = wx_object.success;
    //let wx_complete = wx_object.success;
    ////////////////////////////////

  }

  static vibrateLong(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////
    let wx_res = {};
    try {
      //let supportsVibrate = "vibrate" in navigator;
      if (navigator['vibrate']) {
        navigator['vibrate'](400);
      } else if (navigator['webkitVibrate']) {
        navigator['webkitVibrate'](400);
      } else if (navigator['oVibrate']) {
        navigator['oVibrate'](400);
      }
      wx_res.errMsg = 'vibrateShort:ok';
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static vibrateShort(wx_object) {
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    ///////////////////////////
    let wx_res = {};
    try {
      //let supportsVibrate = "vibrate" in navigator;
      if (navigator['vibrate']) {
        navigator['vibrate'](15);
      } else if (navigator['webkitVibrate']) {
        navigator['webkitVibrate'](15);
      } else if (navigator['oVibrate']) {
        navigator['oVibrate'](15);
      }
      wx_res.errMsg = 'vibrateLong:ok';
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    } catch (e) {
      alert(JSON.stringify(e));
      wx_res = { errMsg: e.message };
      if (wx_fail) {
        wx_fail(wx_res);
      }
      if (wx_complete) {
        wx_complete(wx_res);
      }
    }
  }

  static createWorker() {}

  static getExtConfig() {}

  static getExtConfigSync() {}

  static createSelectorQuery() {
    let xsw_document = document;
    xsw_document.select = function(wx_object) {
      let ThatBox = xsw_document.querySelector(wx_object);
      ThatBox.boundingClientRect = function(callback) {
        let Html = ThatBox.innerHTML;
        let boundingClientRectArray = [];
        boundingClientRectArray['id'] = ThatBox.getAttribute('id');
        boundingClientRectArray['left'] = ThatBox.getBoundingClientRect().left;
        if (Html) {
          boundingClientRectArray['dataset'] = { Html };
        } else {
          boundingClientRectArray['dataset'] = {};
        }
        boundingClientRectArray['right'] = ThatBox.getBoundingClientRect().right;
        boundingClientRectArray['top'] = ThatBox.getBoundingClientRect().top;
        boundingClientRectArray['bottom'] = ThatBox.getBoundingClientRect().bottom;
        boundingClientRectArray['width'] = ThatBox.getBoundingClientRect().width;
        boundingClientRectArray['height'] = ThatBox.getBoundingClientRect().height;
        if (callback) {
          let objT = {};
          for (let x in boundingClientRectArray) {
            objT[x] = boundingClientRectArray[x]
          }
          callback.exec = function() {
            callback(objT);
          };
        }
        xsw_document.execPush(boundingClientRectArray);
        return callback;
      };
      let Tarray = [];
      ThatBox.scrollOffset = function(callback) {
        let Html = ThatBox.innerHTML;
        Tarray['id'] = ThatBox.getAttribute('id');
        if (Html) {
          Tarray['dataset'] = { Html };
        } else {
          Tarray['dataset'] = {};
        }
        Tarray['scrollTop'] = ThatBox.scrollTop;
        Tarray['scrollLeft'] = ThatBox.scrollLeft;
        if (callback) {
          let objT = new Object();
          for (let x in Tarray) {
            objT[x] = Tarray[x]
          }
          callback.exec = function() {
            callback(objT);
          };
        }
        xsw_document.execPush(Tarray);
        return callback;
      };
      ThatBox.fields = function(wx_object, callback) {
        let id = wx_object.id;
        let dataset = wx_object.dataset;
        let rect = wx_object.rect;
        let size = wx_object.size;
        let scrollOffset = wx_object.scrollOffset;
        let properties = wx_object.properties;
        let fieldsArray = [];
        if (id && id == true) {
          fieldsArray['id'] = ThatBox.getAttribute('id');
        }
        if (dataset && dataset == true) {
          let Html = ThatBox.innerHTML;
          if (Html) {
            fieldsArray['dataset'] = { Html };
          } else {
            fieldsArray['dataset'] = {};
          }
        }
        if (rect && rect == true) {
          fieldsArray['left'] = ThatBox.getBoundingClientRect().left;
          fieldsArray['right'] = ThatBox.getBoundingClientRect().right;
          fieldsArray['top'] = ThatBox.getBoundingClientRect().top;
          fieldsArray['bottom'] = ThatBox.getBoundingClientRect().bottom;
        }
        if (size && size == true) {
          fieldsArray['width'] = ThatBox.getBoundingClientRect().width;
          fieldsArray['height'] = ThatBox.getBoundingClientRect().height;
        }
        if (scrollOffset && scrollOffset == true) {
          fieldsArray['scrollTop'] = ThatBox.scrollTop;
          fieldsArray['scrollLeft'] = ThatBox.scrollLeft;
        }
        if (properties && properties instanceof Array == true) {
          for (let xx = 0; xx < properties.length; xx++) {
            fieldsArray[properties[xx]] = ThatBox.getAttribute(properties[xx]);
          }
        }
        let objF = new Object();
        for (let x in fieldsArray) {
          objF[x] = fieldsArray[x]
        }
        callback.exec = function() {
          callback(objF);
        };
        return callback;
      };
      return ThatBox;
    };

    xsw_document.selectAll = function(wx_object) {
      let ThatBox = xsw_document.querySelectorAll(wx_object);
      ThatBox.boundingClientRect = function(callback) {
        let objArray = new Array();
        let boundingClientRectArray = [];
        for (let xd = 0; xd < ThatBox.length; xd++) {
          let Html = ThatBox[xd].innerHTML;
          boundingClientRectArray['id'] = ThatBox[xd].getAttribute('id');
          boundingClientRectArray['left'] = ThatBox[xd].getBoundingClientRect().left;
          if (Html) {
            boundingClientRectArray['dataset'] = { Html };
          } else {
            boundingClientRectArray['dataset'] = {};
          }
          boundingClientRectArray['right'] = ThatBox[xd].getBoundingClientRect().right;
          boundingClientRectArray['top'] = ThatBox[xd].getBoundingClientRect().top;
          boundingClientRectArray['bottom'] = ThatBox[xd].getBoundingClientRect().bottom;
          boundingClientRectArray['width'] = ThatBox[xd].getBoundingClientRect().width;
          boundingClientRectArray['height'] = ThatBox[xd].getBoundingClientRect().height;
          let objT = new Object();
          for (let x in boundingClientRectArray) {
            objT[x] = boundingClientRectArray[x]
          }
          objArray.push(objT);
        }
        if (callback) {
          callback.exec = function() {
            callback(objArray);
          };
        }
        xsw_document.execPush(objArray);
        return callback;
      };
      ThatBox.scrollOffset = function(callback) {
        let objTArray = new Array();
        let Tarray = [];
        for (let xd = 0; xd < ThatBox.length; xd++) {
          let Html = ThatBox[xd].innerHTML;
          Tarray['id'] = ThatBox[xd].getAttribute('id');
          if (Html) {
            Tarray['dataset'] = { Html };
          } else {
            Tarray['dataset'] = {};
          }
          Tarray['scrollTop'] = ThatBox[xd].scrollTop;
          Tarray['scrollLeft'] = ThatBox[xd].scrollLeft;
          let objT = new Object();
          for (let x in Tarray) {
            objT[x] = Tarray[x]
          }
          objTArray.push(objT);
        }
        if (callback) {
          callback.exec = function() {
            callback(objTArray);
          };
        }
        xsw_document.execPush(objTArray);
        return callback;
      };
      ThatBox.fields = function(wx_object, callback) {
        let objTTArray = new Array();
        let fieldsArray = [];
        for (let xd = 0; xd < ThatBox.length; xd++) {
          let id = wx_object.id;
          let dataset = wx_object.dataset;
          let rect = wx_object.rect;
          let size = wx_object.size;
          let scrollOffset = wx_object.scrollOffset;
          let properties = wx_object.properties;
          if (id && id == true) {
            fieldsArray['id'] = ThatBox[xd].getAttribute('id');
          }
          if (dataset && dataset == true) {
            let Html = ThatBox[xd].innerHTML;
            if (Html) {
              fieldsArray['dataset'] = { Html };
            } else {
              fieldsArray['dataset'] = {};
            }
          }
          if (rect && rect == true) {
            fieldsArray['left'] = ThatBox[xd].getBoundingClientRect().left;
            fieldsArray['right'] = ThatBox[xd].getBoundingClientRect().right;
            fieldsArray['top'] = ThatBox[xd].getBoundingClientRect().top;
            fieldsArray['bottom'] = ThatBox[xd].getBoundingClientRect().bottom;
          }
          if (size && size == true) {
            fieldsArray['width'] = ThatBox[xd].getBoundingClientRect().width;
            fieldsArray['height'] = ThatBox[xd].getBoundingClientRect().height;
          }
          if (scrollOffset && scrollOffset == true) {
            fieldsArray['scrollTop'] = ThatBox[xd].scrollTop;
            fieldsArray['scrollLeft'] = ThatBox[xd].scrollLeft;
          }
          if (properties && properties instanceof Array == true) {
            for (let xx = 0; xx < properties.length; xx++) {
              fieldsArray[properties[xx]] = ThatBox[xd].getAttribute(properties[xx]);
            }
          }
          let objF = new Object();
          for (let x in fieldsArray) {
            objF[x] = fieldsArray[x]
          }
          objTTArray.push(objF);
        }
        if (callback) {
          callback.exec = function() {
            callback(objTTArray);
          };
        }
        xsw_document.execPush(objTTArray);
        return callback;
      };
      return ThatBox;
    };

    xsw_document.selectViewport = function() {
      let selectBody = document.body;
      selectBody.boundingClientRect = function(callback) {
        let boundingClientRectArrayA = [];
        let Html = selectBody.innerHTML;
        boundingClientRectArrayA['left'] = selectBody.getBoundingClientRect().left;
        if (Html) {
          boundingClientRectArrayA['dataset'] = { Html };
        } else {
          boundingClientRectArrayA['dataset'] = {};
        }
        boundingClientRectArrayA['right'] = selectBody.getBoundingClientRect().right;
        boundingClientRectArrayA['top'] = selectBody.getBoundingClientRect().top;
        boundingClientRectArrayA['bottom'] = selectBody.getBoundingClientRect().bottom;
        boundingClientRectArrayA['width'] = selectBody.getBoundingClientRect().width;
        boundingClientRectArrayA['height'] = selectBody.getBoundingClientRect().height;
        if (callback) {
          let objT = new Object();
          for (let x in boundingClientRectArrayA) {
            objT[x] = boundingClientRectArrayA[x]
          }
          callback.exec = function() {
            callback(objT);
          };
        }
        xsw_document.execPush(boundingClientRectArrayA);
        return callback;
      };
      let Sarray = [];
      selectBody.scrollOffset = function(callback) {
        let Html = selectBody.innerHTML;
        Sarray['id'] = selectBody.getAttribute('id');
        if (Html) {
          Sarray['dataset'] = { Html };
        } else {
          Sarray['dataset'] = {};
        }
        Sarray['scrollTop'] = selectBody.scrollTop;
        Sarray['scrollLeft'] = selectBody.scrollLeft;
        if (callback) {
          let objT = new Object();
          for (let x in Sarray) {
            objT[x] = Sarray[x]
          }
          callback.exec = function() {
            callback(objT);
          };
        }
        xsw_document.execPush(Sarray);
        return callback;
      };
      selectBody.fields = function(wx_object, callback) {
        let id = wx_object.id;
        let dataset = wx_object.dataset;
        let rect = wx_object.rect;
        let size = wx_object.size;
        let scrollOffset = wx_object.scrollOffset;
        let properties = wx_object.properties;
        let fieldsArrayA = [];
        if (id && id == true) {
          fieldsArrayA['id'] = selectBody.getAttribute('id');
        }
        if (dataset && dataset == true) {
          let Html = selectBody.innerHTML;
          if (Html) {
            fieldsArrayA['dataset'] = { Html };
          } else {
            fieldsArrayA['dataset'] = {};
          }
        }
        if (rect && rect == true) {
          fieldsArrayA['left'] = selectBody.getBoundingClientRect().left;
          fieldsArrayA['right'] = selectBody.getBoundingClientRect().right;
          fieldsArrayA['top'] = selectBody.getBoundingClientRect().top;
          fieldsArrayA['bottom'] = selectBody.getBoundingClientRect().bottom;
        }
        if (size && size == true) {
          fieldsArrayA['width'] = selectBody.getBoundingClientRect().width;
          fieldsArrayA['height'] = selectBody.getBoundingClientRect().height;
        }
        if (scrollOffset && scrollOffset == true) {
          fieldsArrayA['scrollTop'] = selectBody.scrollTop;
          fieldsArrayA['scrollLeft'] = selectBody.scrollLeft;
        }
        if (properties && properties instanceof Array == true) {
          for (let xx = 0; xx < properties.length; xx++) {
            fieldsArrayA[properties[xx]] = selectBody.getAttribute(properties[xx]);
          }
        }
        let objF = new Object();
        for (let x in fieldsArrayA) {
          objF[x] = fieldsArrayA[x]
        }
        callback.exec = function() {
          callback(objF);
        };
        return callback;
      };
      return selectBody
    };

    let execArray = [];
    xsw_document.execPush = function(callback) {
      let objT = new Object();
      for (let x in callback) {
        objT[x] = callback[x]
      }
      execArray.push(objT);
    };
    xsw_document.exec = function(callback) {
      callback(execArray);
    };
    return xsw_document;
  }

  static getNetworkType() {
    //  let wx_success = wx_object.success;
    //  let wx_fail = wx_object.fail;
    //  let wx_complete = wx_object.complete;
    let connectionInfo = navigator.connection;
    alert(connectionInfo.effectiveType);

  }

  // TODO: 未测试
  // INFO: Network Information API 兼容性很差 (https://caniuse.com/#feat=netinfo) (https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API)
  static onNetworkStatusChange(callback) {
    let connection = navigator.connection;
    let connectionInfo = {};
    connectionInfo.isOnline = true;
    connectionInfo.networkType = connection.type || 'unknown';
    connection.addEventListener('change', function() {
      if (connection.type === 'cellular') {
        if (connection.rtt < 270) {
          connectionInfo.networkType = '4g';
        } else if (270 <= connection.rtt < 1400) {
          connectionInfo.networkType = '3g';
        } else if (1400 <= connection.rtt) {
          connectionInfo.networkType = '2g';
        } else {
          connectionInfo.networkType = 'unknown';
        }
      }
      // INFO: navigator.onLine 兼容性很好
      if (!navigator.onLine) {
        connectionInfo.networkType = 'none';
        connectionInfo.isOnline = false;
      }
      callback(connectionInfo);
    });
  }

  static createIntersectionObserver() {}

  static createRewardedVideoAd() {}
  static createInterstitialAd() {}

  static color() {} //canvas
  static ble() {}
  static fileSystem() {}
  static livePlayer() {}
  static livePusher() {}
  static mediaContainer() {}
  static accountInfo() {}
  static chooseAddress() {}
  static authorize() {}
  static chooseInvoiceTitle() {}
  static chooseInvoice() {}
  static navigateToMiniProgram() {}
  static navigateBackMiniProgram() {}
  static UserInfo() {}
  static getUserInfo() {}

  static updateShareMenu() {}
  static showShareMenu() {}
  static hideShareMenu() {}
  static getShareInfo() {}
  static authPrivateMessage() {}


  static playVoice() {}
  static pauseVoice() {}
  static stopVoice() {}

  static setBackgroundFetchToken() {}
  static onBackgroundFetchData() {}
  static getBackgroundFetchToken() {}
  static getBackgroundFetchData() {}

  static onKeyboardHeightChange() {}
  static offKeyboardHeightChange() {}
  static hideKeyboard() {}
  static getSelectedTextRange() {}

  static getMenuButtonBoundingClientRect() {}

  static setTopBarText() {}

  static setWindowSize() {}
  static onWindowResize() {}
  static offWindowResize() {}
  static appHide_callback() {
    let wx_res;
    if (document.hidden) {
      wx_res = {
        errMsg: 'onAppHide:ok',
        path: location.href, // 小程序切前台的路径
        query: {}, // 小程序切前台的 query 参数
        referrerInfo: {}, // 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。
        scene: 0, // 小程序切前台的场景值
        shareTicket: undefined // shareTicket
      };
      if (Event.callback) {
        Event.callback(wx_res);
      }
    }
  }

  static error_callback(e) {
    if (e) {
      if (Event.callback) {
        Event.callback(e.error);
      }
    }
  }


  static setRealtimeManager() {

  }
  static setLogManager() {

  }
}