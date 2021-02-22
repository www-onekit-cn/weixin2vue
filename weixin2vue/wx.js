import $ from 'jquery'
import Vue from 'vue'
import WX from 'weixin2html/wx'
import OneKit from './js/OneKit'
import EventChannel from "./api/EventChannel"
import CanvasContext from './api/CanvasContext'
import OffscreenCanvas from './api/OffscreenCanvas'
import './js/PrevewImage'
import AMapManager from 'vue-amap'
import MapContext from "./api/MapContext"
class VueWX extends WX {

  setNavigationBarTitle(wx_object) {

    const wx_title = wx_object.title

    $("#onekitwx_navigationBar_title").html(wx_title);
    if (wx_object.success) wx_object.wx_success();
    if (wx_object.complete) wx_object.wx_complete();

  }

  showNavigationBarLoading() {
    console.warn('Is not currently supprted')
  }

  hideNavigationBarLoading() {
    console.warn('is not currently supported')
  }

  hideHomeButton() {
    console.warn('is not currently supported')
  }

  setNavigationBarColor(wx_object) {

    const wx_frontColor = wx_object.frontColor
    const wx_backgroundColor = wx_object.backgroundColor
    // const wx_animation = wx_object.animation


    $("#onekitwx_navigationBar").css("color", wx_frontColor)
    $("#onekitwx_navigationBar").css("background", wx_backgroundColor)

  }

  setBackgroundTextStyle() {
    console.warn('is not currently supported')
  }

  setBackgroundColor() {
    console.warn('is not currently supported')
  }

  setTabBarBadge() {
    console.warn('is not currently supprted')
  }

  removeTabBarBadge() {
    console.warn('is not currently supprted')
  }

  showTabBarRedDot() {
    console.warn('is not currently supprted')
  }

  hideTabBarRedDot() {
    console.warn('is not currently supprted')
  }

  setTabBarStyle() {
    console.warn('is not currently supprted')
  }

  setTabBarItem() {
    console.warn('is not currently supprted')
  }

  showTabBar() {
    console.warn('is not currently supprted')
  }

  hideTabBar() {
    console.warn('is not currently supprted')
  }

  loadFontFace() {
    console.warn('is not currently supprted')
  }

  startPullDownRefresh() {
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
            this.loading();
            this.onPullDownRefresh();
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
          this.loading();
          this.onPullDownRefresh();
        }
      }
    }*/
  }

  stopPullDownRefresh(wx_object) {
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

  onPullDownRefresh(callback) {
    this.onPullDownRefresh = callback;
  }

  pageScrollTo(wx_object) {
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

  /**路由 */

  switchTab(wx_object) {
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

  reLaunch(wx_object) {
    let wx_url = wx_object.url;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_path = wx_url
      const pageCount = this.fn_global().ROOT.$route.length - 1
      this.fn_global().ROOT.$router.go(-pageCount);
      this.fn_global().ROOT.$router.replace(vue_path);
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

  redirectTo(wx_object) {
    let wx_url = wx_object.url;
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_path = wx_url
      this.fn_global().ROOT.$router.replace(vue_path);
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

  navigateTo(wx_object) {
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
      this.fn_global().$EventBus[eventChannelID] = eventChannel
      //////
      this.fn_global().ROOT.$router.push({
        path: `/${vue_path}`,
        query: { eventChannelID }
      }).then(function () {

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

  navigateBack(wx_object) {
    let wx_delta = wx_object.delta || 1; // 返回的页面数
    let wx_success = wx_object.success;
    let wx_fail = wx_object.fail;
    let wx_complete = wx_object.complete;
    wx_object = null
    ///////////
    let wx_res;
    try {
      const vue_delta = wx_delta
      this.fn_global().ROOT.$router.go(-vue_delta);
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
  showToast(wx_object) {
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
        this.interaction.loading();
      }
      /////////////////////////////////////////////////
      if (time != "" || time != 0) {
        setTimeout(function () {
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

  showModal(wx_object) {
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
      $('.noDian').click(function () {
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
      $('.yesDian').click(function () {
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

  showLoading(wx_object) {
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
      this.interaction.loading();
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

  showActionSheet(wx_object) {
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
      $('.xsw_list').click(function () {
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
      $(".xsw_showActionSheet").click(function () {
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

  hideToast() {
    $("#viewport").remove();
    $(".xsw_showToast").remove();
  }

  hideLoading() {
    $("#viewport").remove();
    $(".xsw_showLoading").remove();
  }

  enableAlertBeforeUnload() {
    console.warn('Is not currently supported')
  }

  disableAlertBeforeUnload() {
    console.warn('Is not currently supported')
  }

  //////////// 地图 ////////////
  createMapContext(mapId) {
    return new MapContext(AMapManager.getChildInstance(mapId), mapId)
  }
  //////////// 画布 ////////////
  createCanvasContext(id) {
    const canvas = document.getElementById(id)
    console.log(id,canvas)
    const canvasContext = canvas.getContext("2d")
    return new CanvasContext(canvasContext)
  }

  createOffscreenCanvas() {
    return new OffscreenCanvas()
  }

  canvasToTempFilePath() {}

  canvasPutImageData() {}

  canvasGetImageData() {}
  
}
export default new VueWX(()=>Vue.prototype)
