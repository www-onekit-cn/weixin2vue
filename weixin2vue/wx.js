import Vue from 'vue'
import $ from 'jquery'
import html2canvas from "html2canvas"
import Animation from "./api/Animation"
import AudioContext from "./api/AudioContext"
import CameraContext from "./api/CameraContext"
import CanvasContext from "./api/CanvasContext"
import CanvasGradient from "./api/CanvasGradient"
import DownloadTask from "./api/DownloadTask"
import EventChannel from "./api/EventChannel"
import FileSystemManager from "./api/FileSystemManager"
import Gradient from "./api/Gradient"
import InnerAudioContext from "./api/InnerAudioContext"
import InterstitialAd from "./api/InterstitialAd"
import LivePlayerContext from "./api/LivePlayerContext"
import LivePusherContext from "./api/LivePusherContext"
import LogManager from "./api/LogManager"
import MapContext from "./api/MapContext"
import RecorderManager from "./api/RecorderManager"
import RequestTask from "./api/RequestTask"
import RewardedVideoAd from "./api/RewardedVideoAd"
import SocketTask from "./api/SocketTask"
import UDPSocket from "./api/UDPSocket"
import UpdateManager from "./api/UpdateManager"
import UploadTask from "./api/UploadTask"
import VideoContext from "./api/VideoContext"
import OneKit from './js/OneKit'
//const MobileDetect = require("./lib/mobile-detect.min")
export default class wx {
    static canIUse(apiId) {
        return true;
    }
    //64转array
    static base64ToArrayBuffer(base64) {
        base64 = base64.replace(/\s/g, '+');
        let commonContent = Buffer.from(base64, 'base64');
        return commonContent;
    }
    //arrayz转64
    static arrayBufferToBase64(arrayBuffer) {
        var binary = '';
        var len = arrayBuffer.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(arrayBuffer[i]);
        }
        console.log(len);
        return window.btoa(binary);
    }
    static getSystemInfo(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        /////////////////////////////
        var result;
        try {
            result = OnekitWX_System.getSystemInfoSync();
            if (success) { success(result); }
            if (complete) { complete(result); }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) { fail(result); }
            if (complete) { complete(result); }
        }
    }

    static getSystemInfoSync() {
        try {
            var device_type = navigator.userAgent; //获取userAgent信息
            var md = {};//new MobileDetect(device_type); //初始化mobile-detect
            var os = md.os(); //获取系统
            var model;
            var system;
            var platform;
            if (os == 'iOS') {
                //ios系统的处理
                system = 'iOS ' + md.version('iPhone');
                model = md.mobile();
                platform = 'ios';
            } else if (os == 'AndroidOS') {
                //Android系统的处理
                system = 'Android ' + md.version('Android');
                model = md.mobile();
                platform = 'android';
            }
            return {
                errMsg: 'getSystemInfoSync:ok',
                brand: 'Onekit', // 手机品牌
                model: model, // 手机型号
                pixelRatio: window.devicePixelRatio, // 设备像素比
                screenWidth: window.screen.width, // 屏幕宽度
                screenHeight: window.screen.height, // 屏幕高度
                windowWidth: window.innerWidth, // 可使用窗口宽度
                windowHeight: window.innerHeight, // 可使用窗口高度
                statusBarHeight: 20, // 状态栏的高度
                language: window.navigator.language, // 微信设置的语言
                version: '7.0', // 微信版本号
                system: system, // 操作系统版本
                platform: platform, // 客户端平台
                fontSizeSetting: 20, // 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
                SDKVersion: "2.12.1",// 客户端基础库版本
                benchmarkLevel: 1 // (仅Android小游戏) 性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备最高不到50)
            };
        } catch (e) {
            console.log(e);
            throw new Error('getSystemInfoSync:fail');
        }
    }
    static getUpdateManager() {
        return new UpdateManagerClass();
    }
    static offPageNotFound() { }
    static onPageNotFound() { }

    static getLaunchOptionsSync() {
        try {
            let result = {
                path: location.href, // 启动小程序的路径
                query: {}, // 启动小程序的 query 参数
                referrerInfo: {}, // 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。
                scene: 0, // 启动小程序的场景值
                shareTicket: undefined // shareTicket
            };
            return result;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static offError(callback) {
        Event.callback = callback;
        try {
            let result;
            window.removeEventListener('error', Event.error_callback, false);
            result = {
                errMsg: 'offError:ok'
            };
            if (callback) {
                return callback(result);
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static onError(callback) {
        Event.callback = callback;
        try {
            let result;
            window.addEventListener('error', Event.error_callback, false);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static offAppShow(callback) {
        Event.callback = callback;
        try {
            let result;
            document.removeEventListener('visibilitychange', Event.appShow_callback, false);
            result = {
                errMsg: 'offAppShow:ok'
            };
            if (callback) {
                return callback(result);
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static onAppShow(callback) {
        Event.callback = callback;
        try {
            document.addEventListener('visibilitychange', Event.appShow_callback, false);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static offAppHide(callback) {
        Event.callback = callback;
        try {
            let result;
            document.removeEventListener('visibilitychange', Event.appHide_callback, false);
            result = {
                errMsg: 'offAppShow:ok'
            };
            if (callback) {
                return callback(result);
            }
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static onAppHide(callback) {
        Event.callback = callback;
        try {
            document.addEventListener('visibilitychange', Event.appHide_callback, false);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static appShow_callback(event) {
        let result;
        if (!document.hidden) {
            result = {
                errMsg: 'onAppShow:ok',
                path: location.href, // 小程序切前台的路径
                query: {}, // 小程序切前台的 query 参数
                referrerInfo: {}, // 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。
                scene: 0, // 小程序切前台的场景值
                shareTicket: undefined // shareTicket
            };
            if (Event.callback) {
                Event.callback(result);
            }
        }
    }

    static appHide_callback(event) {
        let result;
        if (document.hidden) {
            result = {
                errMsg: 'onAppHide:ok',
                path: location.href, // 小程序切前台的路径
                query: {}, // 小程序切前台的 query 参数
                referrerInfo: {}, // 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。
                scene: 0, // 小程序切前台的场景值
                shareTicket: undefined // shareTicket
            };
            if (Event.callback) {
                Event.callback(result);
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

    static setEnableDebug() {

    }
    static setRealtimeManager() {

    }
    static setLogManager() {

    }
    static getLogManager(object) { }
    static switchTab() { }
    static reLaunch() {
    }

    static redirectTo(object) {
        let url = object.url;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            if (window.parent) {
                window.parent.location.replace(OneKit.url(url));
            } else {
                window.location.replace(OneKit.url(url));
            }
            result = {
                redirectTo: 'ok'
            };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }
    static navigateTo(object) {
        let url = object.url;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            const path = url
            Vue.prototype.VUE.$router.push(path);
            result = {
                navigateTo: 'ok'
            };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            console.log(e)
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }


    static navigateBack(object) {
        let delta;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            if (object.delta) {
                delta = object.delta;
            }
            else {
                delta = 1;
            }
            history.go(-delta);

            result = {
                navigateBack: 'ok'
            };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }
    static showToast(object) {
        let tipTxt = object.title;
        let time;
        if (!object.duration) {
            time = 1500;
        }
        else {
            time = object.duration
        }
        let mask;
        if (!object.mask) {
            mask = false
        }
        else {
            mask = object.mask
        }
        let icon;
        if (!object.icon) {
            icon = "none"
        }
        else {
            icon = object.icon;
        }
        let image;
        if (object.image) {
            image = object.image;
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            var viewportID = document.getElementById("viewport");
            if (!viewportID) {
                var oMeta = document.createElement('meta');
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
                oMeta.name = 'viewport';
                oMeta.id = 'viewport';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
            $(".xsw_toast").remove();
            var popToastHtml = "";
            popToastHtml += `<div class="xsw_showToast"> `;
            if (mask == true) {
                popToastHtml += `<div class="xsw_bei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: #262626;opacity: 0.4;z-index: 999999999999999999999"></div>`
            }
            popToastHtml += `<div class="pop-toast" style="position: fixed;  width: 140px;  height: 140px;  text-align: center;background-color: #555;border-radius: 10px;box-shadow: 0 2px 8px #555 ;right: 50%;top: 50%;margin: -70px -70px 0 0;z-index: 9999999999999999999999">`;
            if (image) {
                popToastHtml += `<img src="${image}" style="width: 50px;margin-top: 12px;">`
                popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-bottom: 10px;">${tipTxt}</div>
                              </div></div>`;
            }
            else {
                if (icon == "none") {
                    popToastHtml += ` <img  style="width: 50px;margin-top: 12px;display: none">`
                    popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-top: 45px; ">${tipTxt}</div>
                              </div></div>`;
                }
                else {
                    if (icon == "success") {
                        popToastHtml += `<canvas id="x_canvas" width="140px" height="50px"></canvas>`;
                    }
                    else if (icon == "loading") {
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
                var cvs = document.getElementById('x_canvas'); //画布
                var ctx = cvs.getContext('2d'); // 画笔
                ctx.lineWidth = 4;//线宽
                ctx.strokeStyle = "#fff";//线的颜色
                ctx.moveTo(55, 35);
                ctx.lineTo(65, 45);
                ctx.lineTo(90, 15);
                ctx.stroke();
            }
            else if (icon == "loading") {
                /////////////////////////////////////////////////
                interaction.loading();
            }
            /////////////////////////////////////////////////
            if (time != "" || time != 0) {
                setTimeout(function () {
                    $("#viewport").remove();
                    $(".xsw_showToast").remove();
                }, time);
            }
            result = { showToast: "ok" };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }

        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static showLoading(object) {
        let tipTxt = object.title;
        let mask;
        if (!object.mask) {
            mask = false
        }
        else {
            mask = object.mask
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            var viewportID = document.getElementById("viewport");
            if (!viewportID) {
                var oMeta = document.createElement('meta');
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
                oMeta.name = 'viewport';
                oMeta.id = 'viewport';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
            $(".xsw_toast").remove();
            var popToastHtml = "";
            popToastHtml += `<div class="xsw_showLoading"> `;
            if (mask == true) {
                popToastHtml += `<div class="xsw_bei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0;background-color: #262626;opacity: 0.4;z-index: 999999999999999999999"></div>`
            }
            popToastHtml += `<div class="pop-toast" style="position: fixed;  width: 140px;  height: 140px;  text-align: center;background-color: #555;border-radius: 10px;box-shadow: 0 2px 8px #555 ;right: 50%;top: 50%;margin: -70px -70px 0 0;z-index: 9999999999999999999999">`;
            popToastHtml += `<div id="xsw_canvas" style="140px;height: 60px;"></div>`;
            popToastHtml += ` <div class="toast-tip" style=" font-size: 16px;  color: #fff;  height: 45px;overflow: hidden;width:130px; word-wrap: break-word; text-align: center;padding: 0 5px ;margin-bottom: 10px;margin-top: 10px;">${tipTxt}</div>
                              </div></div>`;
            $("body").append(popToastHtml);
            $("body").css({ "position": "relative" });
            interaction.loading();
            result = { showLoading: "ok" };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }

        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
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

    static showModal(object) {
        let title = object.title;
        let content = object.content;
        let showCancel = object.showCancel;
        let cancelColor = object.cancelColor;
        let confirmColor = object.confirmColor;
        let cancelText;
        if (!object.cancelText) {
            cancelText = "取消";
        }
        else {
            cancelText = object.cancelText;
        }
        let confirmText;
        if (!object.confirmText) {
            confirmText = "确定";
        }
        else {
            confirmText = object.confirmText;
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            var viewportID = document.getElementById("viewport");
            if (!viewportID) {
                var oMeta = document.createElement('meta');
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
                oMeta.name = 'viewport';
                oMeta.id = 'viewport';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
            $(".xsw_showModa").remove();
            var showModalHtml = "";
            showModalHtml += `<div class="xsw_showModa" >`
            showModalHtml += `<div class="xsw_showModaBei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0; background-color: #333;opacity: 0.4;z-index: 999999999999999999999"></div>`
            showModalHtml += `<div class="xsw_modal-data" style="width:220px;  border-radius: 10px;  top: 50%;  left: 50%;  box-shadow: 0 2px 8px #555 ;  background-color: #fff;  border:1px solid #000;  padding:15px 0;  text-align:center;  z-index: 9999999999999999999999;  position: fixed;">
                                    <div style="text-align: center;font-size: 18px;font-weight: 400">${title}</div><br>
                                    <div style="text-align: center;font-size: 14px;margin-bottom: 30px;">${content} </div><br>`;
            if (showCancel == false) {
                showModalHtml += `<div style="position: absolute;bottom: 5px;"><div class="yesDian" style="width: 110px;display: inline-block;margin-left: 55px;background-color: gold;cursor: pointer;border-radius: 10px;padding: 8px 0;font-size: 16px">${confirmText}</div></div>`
            }
            else {
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
            var outerWidth = -$('.xsw_modal-data').outerHeight() / 2;
            var modal = document.querySelector('.xsw_modal-data');
            modal.style.margin = outerWidth + 'px 0 0 -110px';
            /* $('.xsw_modal-data').css({'margin-left:','"+outerWidth+"'})*/
            $("body").css({ "position": "relative" });
            $('.noDian').click(function () {
                $("#viewport").remove();
                $(".xsw_showModa").remove();
                result = {
                    cancel: true,
                    showModal: "ok"
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            });
            $('.yesDian').click(function () {
                $("#viewport").remove();
                $(".xsw_showModa").remove();
                result = {
                    confirm: true,
                    showModal: "ok"
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            });
        }
        catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }

    }

    static showActionSheet(object) {
        let itemList = object.itemList;
        let itemColor = object.itemColor;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var index;
        var result;
        try {
            var viewportID = document.getElementById("viewport");
            if (!viewportID) {
                var oMeta = document.createElement('meta');
                oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;';
                oMeta.name = 'viewport';
                oMeta.id = 'viewport';
                document.getElementsByTagName('head')[0].appendChild(oMeta);
            }
            $(".xsw_showActionSheet").remove();
            var showActionSheetHtml = "";
            showActionSheetHtml += `<div class="xsw_showActionSheet" >
                                    <div class="xsw_showActionSheetBei" style="position: fixed;width: 100%;height: 100%;top: 0;left: 0; background-color: #333;opacity: 0.4;z-index: 999999999999999999999"></div>
                                    <div class="xsw_showActionSheet-data" style="width:220px;  border-radius: 5px;  top: 50%;  left: 50%;  box-shadow: 0 2px 8px #555 ;  background-color: #fff;  border:1px solid #000; text-align:center;  z-index: 9999999999999999999999;  position: fixed;color: #000000">
                                        <div style="text-align: left">`;
            var xsw_length;
            if (itemList.length > 6) {
                xsw_length = 6;
            }
            else {
                xsw_length = itemList.length;
            }
            for (var xsw_i = 0; xsw_i < xsw_length; xsw_i++) {
                showActionSheetHtml += `<div class="xsw_list" style="border-bottom: 1px solid #cccccc;padding: 10px 0 10px 10px;">${itemList[xsw_i]}</div>`
            }
            showActionSheetHtml += `</div></div></div>`;
            $("body").append(showActionSheetHtml);
            var outerWidth = -$('.xsw_showActionSheet-data').outerHeight() / 2;
            var modal = document.querySelector('.xsw_showActionSheet-data');
            modal.style.margin = outerWidth + 'px 0 0 -110px';
            $('.xsw_list:last').css({ 'border': "none" })
            if (itemColor) {
                $('.xsw_showActionSheet-data').css({ 'color': itemColor })
            }
            $('.xsw_list').click(function () {
                var thisHtml = $(this).html();
                for (var x in itemList) {
                    if (thisHtml == itemList[x]) {
                        index = x;
                    }
                }
                result = {
                    showActionSheet: "ok",
                    tapIndex: index
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            });
            $(".xsw_showActionSheet").click(function () {
                $("#viewport").remove();
                $(".xsw_showActionSheet").remove();
            });
        }
        catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static loading() {
        clearInterval(interaction.zhuan);
        $('#xsw_canvas').html('');
        $('#xsw_canvas').append("<canvas id='xsw_myCanvas' style='margin-left: -80px;margin-top: -35px;'></canvas>");
        var c = document.getElementById("xsw_myCanvas");
        var ctx = c.getContext("2d");
        var lg = ctx.createRadialGradient(40, 40, 25, 60, 80, 120); //可以尝试改变这里的参数，你可以获取更多
        lg.addColorStop(0, '#fff');
        lg.addColorStop(.5, '#ccc');
        lg.addColorStop(1, '#555');
        ctx.lineWidth = 6;
        ctx.strokeStyle = lg;
        ctx.beginPath();
        ctx.arc(150, 75, 25, 0, 1.5 * Math.PI);
        ctx.stroke();
        var zzz = 0;
        interaction.zhuan = setInterval(function () {
            zzz = zzz + 5;
            $('#xsw_myCanvas').css({ 'transform': 'rotate(' + zzz + 'deg)' });
        }, 20);
    }
    static setNavigationBarTitle(object) {
        $("#onekitwx_navigationBar_title").html("xxx");
        if (object.success) object.success();
        if (object.complete) object.complete();

    }

    static showNavigationBarLoading() { }

    static hideNavigationBarLoading() { }

    static setNavigationBarColor(object) {
        if (object.frontColor) { $("#onekitwx_navigationBar").css("color", object.frontColor); }
        if (object.backgroundColor) { $("#onekitwx_navigationBar").css("background", object.backgroundColor); }
    }
    static setBackgroundTextStyle() {

    }
    static setBackgroundColor(object) {

    }
    static setTabBarBadge() { }

    static removeTabBarBadge() { }

    static showTabBarRedDot() { }

    static hideTabBarRedDot() { }

    static setTabBarStyle() { }

    static setTabBarItem() { }

    static showTabBar() { }

    static hideTabBar() { }
    static loadFontFace(object) {

    }
    static startPullDownRefresh(object) {
        if (object) {
            let success = object.success;
            let fail = object.fail;
            let complete = object.complete;
            var result;
            try {
                if ($('.xsw_first').length < 1) {
                    var xsw_first = document.createElement("div");
                    xsw_first.innerHTML = "<div class='xsw_first' style='width: 100%;text-align: center'></div>";
                    if ($('body')) {
                        var first = document.body.firstChild;//得到页面的第一个元素
                        first.before(xsw_first);
                    }
                    else {
                        $("div").first().before(xsw_first);
                    }
                    if ($('.xsw_first')) {
                        var scroll = document.querySelector('.xsw_first');
                        scroll.style.height = '90px';
                        PullDownRefresh.loading();
                        PullDownRefresh.onPullDownRefresh();
                    }
                    result = { startPullDownRefresh: 'ok' };
                    if (success) {
                        success(result);
                    }
                    if (complete) {
                        complete(result);
                    }
                }
                else {
                    throw new Error('Missing parameter');
                }
            } catch (e) {
                result = { errMsg: e.message };
                if (fail) {
                    fail(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        }
        else {
            if ($('.xsw_first').length < 1) {
                var xsw_first = document.createElement("div");
                xsw_first.innerHTML = "<div class='xsw_first' style='width: 100%;text-align: center'></div>";
                if ($('body')) {
                    var first = document.body.firstChild;//得到页面的第一个元素
                    first.before(xsw_first);
                }
                else {
                    $("div").first().before(xsw_first);
                }
                if ($('.xsw_first')) {
                    var scroll = document.querySelector('.xsw_first');
                    scroll.style.height = '90px';
                    PullDownRefresh.loading();
                    PullDownRefresh.onPullDownRefresh();
                }
            }
        }
    }
    static stopPullDownRefresh(object) {
        if (object) {
            let success = object.success;
            let fail = object.fail;
            let complete = object.complete;
            var result;
            try {
                var scroll = document.querySelector('.xsw_first');
                scroll.style.height = '0px';
                $('.xsw_first').remove();
                result = { stopPullDownRefresh: 'ok' };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }

            } catch (e) {
                result = { errMsg: e.message };
                if (fail) {
                    fail(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        }
        else {
            var scroll = document.querySelector('.xsw_first');
            scroll.style.height = '0px';
            $('.xsw_first').remove();
        }
    }
    static loading() {
        /*var circle = new Sonic({
            width: 50,
            height: 50,
            padding: 15,

            strokeColor: '#ccc',

            pointDistance: .01,
            stepsPerFrame: 3,
            trailLength: .7,

            step: 'fader',

            setup: function() {
                this._.lineWidth = 5;
            },

            path: [
                ['arc', 25, 25, 25, 0, 360]
            ]

        });
        circle.play();
        var xsw_canvas=document.querySelector('.xsw_first');
        xsw_canvas.appendChild(circle.canvas);*/
    }
    static onPullDownRefresh(callback) {
        PullDownRefresh.onPullDownRefresh = callback;
    }

    static pageScrollTo(object) {
        let scrollTop = object.scrollTop;
        let duration;
        if (!object.duration) {
            duration = 300;
        }
        else {
            duration = object.duration;
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

    //window
    //keyboard
    static request(object) {
        let url = object.url; // 【必填】开发者服务器接口地址
        let data = object.data; // 请求的参数
        let header = object.header; // 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
        let method = object.method || 'GET'; // HTTP 请求方法
        let responseType = object.responseType || 'json'; // 返回的数据格式
        let dataType = object.method || 'text'; // 响应的数据类型
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        //////////////////////////
        let request = new RequestTask();
        let result;
        let jqXHR = $.ajax({
            url: url,
            data: data,
            headers: header,
            method: method,
            dataType: responseType,
            type: dataType,
            success: function (result, status, xhr) {
                result = {
                    data: result,
                    header: thekit.header2json(xhr.getAllResponseHeaders()),
                    statusCode: xhr.status
                };
                console.log(result);
                if (success) {
                    success(result);
                }
            },
            error: function (res) {
                result = res;
                if (fail) {
                    fail(result);
                }
            },
            complete: function (res) {
                result = res;
                if (complete) {
                    complete(result);
                }
            }
        });
        request.jqXHR = {};
        return request;
    }

    // TODO: 未改未测试
    static downloadFile(object) {
        let url = object.url; // 【必填】下载资源的 url
        let header = object.header; // HTTP 请求的 Header，Header 中不能设置 Referer
        let filePath = object.filePath;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        /////////////////////////////
        let result;

        $.ajax({
            url: url,
            headers: header,
            dataType: 'arraybuffer',
            success: function (arraybuffer) {
                let shortName = url.substr(url.lastIndexOf('/') + 1);
                let tempFilePath = OneKit.createTempPath(shortName);
                OneKit.tempFiles[tempFilePath] = arraybuffer;
                result = {
                    tempFilePath: tempFilePath,
                    statusCode: 200
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            },
            error: function (a, b) {
                //alert(url+"\n"+JSON.stringify(a)+"\n"+b);
                throw new Error(a + '\b' + b);
            }
        });
    } catch(e) {
        result = {
            errMsg: e.toString()
        };
        if (fail) {
            fail(result);
        }
        if (complete) {
            complete(result);
        }
    }

    // TODO: 未改未测试
    static uploadFile(object) {
        let url = object.url;
        let filePath = object.filePath;
        let name = object.name;
        let header = object.header;
        let formData = object.formData;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result;
        /*
          let params = new FormData();
          formData.append('fileDian', filePath);
          $.ajax({
            url: url,
            type: 'POST',
            headers: header,
            async: false,
            cache: false,
            processData: false, // 告诉jQuery不要去处理发送的数据
            contentType: false, // 告诉jQuery不要去设置Content-Type请求头
            data: params,
            success: function(res) {
              result = {
                uploadFile: 'ok',
                res: eval('(' + res + ')')
              };
              if (res) {
                if (success) {
                  success(result);
                }
                if (complete) {
                  complete(result);
                }
              }
            },
            error: function(res) {
              throw new Error(res);
            }
          });
        } catch (e) {
          result = { errMsg: e.message };
          if (fail) {
            fail(result);
          }
          if (complete) {
            complete(result);
          }
        }*/
    }

    static connectSocket(object) {
        let url = object.url; // 【必填】开发者服务器 wss 接口地址
        // let header = object.header; // HTTP Header，Header 中不能设置 Referer
        let protocols = object.protocols; // 子协议数组	1.4.0
        // let success = object.success;
        //  let fail = object.fail;
        //  let complete = object.complete;
        ///////////////////////////////////
        let socket = new WebSocket(url, protocols);
        /*
        */
        let socketTask = new SocketTask(socket);
        if (!OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask = socketTask;
        }
        return socketTask;
    }

    static onSocketOpen(callback) {
        if (OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask._socket.addEventListener("open", function (event) {
                if (callback) {
                    return callback(event);
                }
            });
        }
    }

    static sendSocketMessage(object) {
        let data = object.data; // 【必填】需要发送的内容
        //   let success = object.success;
        // let fail = object.fail;
        //  let complete = object.complete;
        ///////////////////////////////
        if (OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask.send(data);
        }
    }

    static onSocketMessage(callback) {
        if (OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask._socket.addEventListener("message", function (event) {
                if (callback) {
                    callback(event);
                }
            });
        }
    }

    static onSocketError(callback) {
        if (OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask._socket.addEventListener("error", callback);
        }
    }

    static onSocketClose(callback) {
        if (OnekitWX_WebSocket._socketTask) {
            OnekitWX_WebSocket._socketTask._socket.addEventListener("close", function (event) {
                if (callback) {
                    callback(event);
                }
            });
        }
    }

    static closeSocket() {
        OnekitWX_WebSocket._socketTask.close();
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
        try {
            localStorage.setItem(key, value);
        } catch (e) { }
    }

    // INFO: 已改
    static setStorage(object) {
        var key = object.key;
        var data = object.data;
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        var res = {};
        try {
            localStorage.setItem(key, data);
            if (localStorage.getItem(key) === data) {
                res.errMsg = 'setStorage:ok';
                if (success) {
                    success(res);
                }
            }
        } catch (error) {
            res.errMsg = error.message;
            if (fail) {
                fail(res);
            }
        }
        if (complete) {
            complete(res);
        }
    }
    // INFO: 已改
    // INFO: 直接返回获取值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.getStorageSync.html）
    static getStorageSync(key) {
        return localStorage.getItem(key);
    }

    // INFO: 已改
    static getStorage(object) {
        var key = object.key;
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        var res = {};
        try {
            var value = localStorage.getItem(key);
            if (value) {
                res.errMsg = 'getStorage:ok';
                res.data = value;
                if (success) {
                    success(res);
                }
            } else {
                res.errMsg = 'getStorage:fail data not found';
                if (fail) {
                    fail(res);
                }
            }
        } catch (error) {
            res.errMsg = error.message;
            if (fail) {
                fail(res);
            }
        }
        if (complete) {
            complete(res);
        }
    }

    // INFO: 已改
    // INFO: 直接删除值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.removeStorageSync.html）
    static removeStorageSync(key) {
        localStorage.removeItem(key);
    }

    // INFO: 已改
    static removeStorage(object) {
        var key = object.key;
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        var res = {};
        try {
            localStorage.removeItem(key);
            res.errMsg = 'removeStorage:ok';
            if (success) {
                success(res);
            }
        } catch (error) {
            res.errMsg = error.message;
            if (fail) {
                fail(res);
            }
        }
        if (complete) {
            complete(res);
        }
    }

    // INFO: 已改
    // INFO: 直接删除全部值，不需要加try catch，在调用时由客户代码加try catch, 例子参见（https://developers.weixin.qq.com/miniprogram/dev/api/wx.clearStorageSync.html）
    static clearStorageSync() {
        localStorage.clear();
    }

    // INFO: 已改
    static clearStorage(object) {
        if (!object) {
            localStorage.clear();
        } else {
            let success = object.success || '';
            let fail = object.fail || '';
            let complete = object.complete || '';

            var res = {};
            try {
                localStorage.clear();
                res.errMsg = 'clearStorage:ok';
                if (success) {
                    success(res);
                }
            } catch (error) {
                res = { errMsg: error.message };
                if (fail) {
                    fail(res);
                }
            }
            if (complete) {
                complete(res);
            }
        }
    }

    static getStorageInfo(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        var keysArray = new Array();
        for (var i = 0; i < localStorage.length; i++) {
            //所有键值
            var getKey = localStorage.key(i);
            keysArray.push(getKey);
        }
        var sizeStore = 0;
        if (localStorage) {
            //占用空间
            for (let item in localStorage) {
                if (localStorage.hasOwnProperty(item)) {
                    sizeStore += localStorage.getItem(item).length;
                }
            }
        }
        try {
            result = {
                keys: keysArray,
                // HACK: 是这样做吗？
                currentSize: Math.ceil((sizeStore / 1024).toFixed(2)),
                // TODO: 小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
                limitSize: ''
            };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static getStorageInfoSync() {
        var result;
        try {
            var keysArray = new Array();
            for (var i = 0; i < localStorage.length; i++) {
                //所有键值
                var getKey = localStorage.key(i);
                keysArray.push(getKey);
            }
            var sizeStore = 0;
            if (localStorage) {
                //占用空间
                for (let item in localStorage) {
                    if (localStorage.hasOwnProperty(item)) {
                        sizeStore += localStorage.getItem(item).length;
                    }
                }
            }
            result = {
                keys: keysArray,
                // HACK: 是这样做吗？
                currentSize: Math.ceil((sizeStore / 1024).toFixed(2)), // 先转换成kb，再保留两位小数，最后向上取整
                // TODO: 小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
                limitSize: ''
            };
            return result;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    static createMapContext() { }

    // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
    static chooseImage(object) { }

    // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
    static previewImage(object) { }

    static getImageInfo(object) {
        let src = object.src;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result = {};
        let isGetImageInfo = false;
        //////////////////////////////////
        try {
            let pic = new Image();
            pic.onload = function () {
                isGetImageInfo = true;
                result.errMsg = 'getImageInfo:ok';
                result.width = this.width;
                result.height = this.height;
                result.path = src;
                result.type = 'none';
                result.orientation = 'none'; // HACK: 可以用 exif-js 库来实现？ (https://github.com/exif-js/exif-js)
                getImageInfoSuccess_callback();
            };
            pic.src = src;
            // 5秒后如果没有获取到数据就去回调执行 fail() 和 complete()
            setTimeout(function () {
                if (!isGetImageInfo) {
                    getImageInfoFail_callback();
                }
            }, 5000);
        } catch (error) {
            getImageInfoFail_callback();
        }

        function getImageInfoFail_callback() {
            result.errMsg = 'getImageInfo:fail invalid';
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
        function getImageInfoSuccess_callback() {
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static saveImageToPhotosAlbum() { }

    static compressImage(object) { }

    static canvasDataURL(path, obj, callback) {
        var img = new Image();
        img.src = path;
        img.onload = function () {
            var that = this;
            // 默认按比例压缩
            var w = that.width,
                h = that.height,
                scale = w / h;
            w = obj.width || w;
            h = obj.height || w / scale;
            var quality = 0.7; // 默认图片质量为0.7
            //生成canvas
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            // 创建属性节点
            var anw = document.createAttribute('width');
            anw.nodeValue = w;
            var anh = document.createAttribute('height');
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(that, 0, 0, w, h);
            // 图像质量
            if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
                quality = obj.quality;
            }
            // quality值越小，所绘制出的图像越模糊
            var base64 = canvas.toDataURL('image/jpeg', quality);
            var Blob = Photo.convertBase64UrlToBlob(base64);
            var imgPath = window.URL.createObjectURL(Blob);
            callback({ imgPath: imgPath, Blob: Blob });
        };
    }
    static convertBase64UrlToBlob(urlData) {
        var arr = urlData.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    static chooseVideo(object) {
        let result;
        if (object) {
            let sourceType = object.sourceType || ['album', 'camera']; //视频选择的来源
            let compressed = object.compressed || true; // 是否压缩所选择的视频文件
            let maxDuration = object.maxDuration || 60; // 拍摄视频最长拍摄时间，单位秒
            let camera = object.camera || 'back'; // 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
            let success = object.success;
            let fail = object.fail;
            let complete = object.complete;
            let result;
            try {
                if (sourceType[0] == 'album') {
                    // 视频选择的来源为 album ;
                    var xsw_ThisVideo = document.createElement('input');
                    xsw_ThisVideo.setAttribute('type', 'file');
                    xsw_ThisVideo.setAttribute('id', 'xsw_Video');
                    xsw_ThisVideo.setAttribute('accept', 'video/*');
                    // 监听点击“选择文件”事件（需要手动点击“选择文件”按钮来打开dialog，貌似不能通过模拟来点击）
                    xsw_ThisVideo.addEventListener(
                        'change',
                        function () {
                            let file = xsw_ThisVideo.files[0];
                            if (file) {
                                result = {
                                    tempFilePath: undefined, // 选定视频的临时文件路径
                                    duration: undefined, // 选定视频的时间长度
                                    size: file.size, // 选定视频的数据量大小
                                    height: undefined, // 返回选定视频的高度
                                    width: undefined // 返回选定视频的宽度
                                };
                                if (success) { success(result); }; if (complete) { complete(result); };
                            }
                        },
                        false
                    );
                } else {
                    // 视频选择的来源为 camera ;
                }
            } catch (error) {
                result = {
                    errMsg: 'chooseVideo:fail'
                };
                if (fail) { fail(result); } if (complete) { complete(result); }
            }
        }
    }

    static saveVideoToPhotosAlbum(object) {
        let filePath = object.filePath;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result;
        try {
            var xsw_A = document.createElement('a');
            xsw_A.innerHTML = '<button>保存</button>';
            xsw_A.setAttribute('id', 'xswAH');
            xsw_A.setAttribute('download', '下载');
            xsw_A.setAttribute('style', 'font-size: 12px');
            var firstA = document.body.firstChild;
            document.body.insertBefore(xsw_A, firstA);
            var xswAH = document.getElementById('xswAH');
            xswAH.setAttribute('href', filePath);
            result = { errMsg: 'saveVideoToPhotosAlbum:ok' };
            if (success) { success(result); }; if (complete) { complete(result); };
        } catch (e) {
            result = { errMsg: 'saveVideoToPhotosAlbum:fail' };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }
    static createVideoContext(id, object) {
        try {
            // 【id 为必填项】这里判断 id 是否为 string
            checkParams(id, 'string');

            return new VC(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    static setInnerAudioOption() { }
    static getAvailableAudioSources() { }
    static setInnerAudioOption() { }
    // AudioContext
    static createAudioContext(id, object) {
        checkParams(id, 'string');
        let ac = document.getElementById(id);

        ac.setSrc = function (src) {
            ac.src = src;
        };

        ac.seek = function (position) {
            ac.currentTime = position;
        };

        //console.warn(String_format(ONEKIT_GLOBAL_NOT_MAINTAIN, '<audio/>', 'createInnerAudioContext'));

        return ac;
    }

    // InnerAudioContext
    static createInnerAudioContext() {
        return new IAC();
    }

    static getBackgroundAudioPlayerState(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result;
        var xsw_audio = document.getElementById('xsw_autoplayId');
        try {
            if (xsw_audio) {
                var audioStatus = '2';
                xsw_audio.addEventListener('playing', function () {
                    audioStatus = '1';
                });
                xsw_audio.addEventListener('pause', function () {
                    audioStatus = '0';
                });
                setTimeout(function () {
                    let duration = xsw_audio.duration;
                    let currentPosition = xsw_audio.currentTime;
                    let status = audioStatus;
                    let downloadPercent = parseInt((xsw_audio.buffered.end(0) / xsw_audio.duration) * 100);
                    let dataUrl = xsw_audio.src;
                    result = {
                        getBackgroundAudioPlayerState: 'ok',
                        duration: duration,
                        currentPosition: currentPosition,
                        status: status,
                        downloadPercent: downloadPercent,
                        dataUrl: dataUrl
                    };
                    if (success) {
                        fail(result);
                    }
                    if (complete) {
                        complete(result);
                    }
                }, 1000);
            } else {
                throw new Error('请先播放音乐！');
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static playBackgroundAudio(object) {
        let dataUrl = object.dataUrl;
        let title = object.title;
        let coverImgUrl = object.coverImgUrl;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result;
        try {
            var wrap;
            if (title || coverImgUrl) {
                wrap = document.createElement('div');
                wrap.innerHTML =
                    '<div style="width: 80%;background-color: #444;margin-left: 10%;"><img src="' +
                    coverImgUrl +
                    '" style="width: 80px;height: 80px;display: inline-block;padding-left: 20px;margin-top: 10px;"><div style="display: inline-block;padding-left: 20px;color: #fff">' +
                    title +
                    '</div></div><audio src="" id="xsw_autoplayId"  style="width: 80%;margin-left: 10%"   controls="controls"  ></audio>';
                var firstT = document.body.firstChild;
                document.body.insertBefore(wrap, firstT);
            } else {
                wrap = document.createElement('audio');
                wrap.setAttribute('id', 'xsw_autoplayId');
                wrap.setAttribute('autoplay', 'autoplay');
                wrap.setAttribute('style', 'visibility: hidden;');
                var first = document.body.firstChild;
                document.body.insertBefore(wrap, first);
            }
            var xsw_audio = document.getElementById('xsw_autoplayId');
            xsw_audio.src = dataUrl;
            //xsw_audio.controls=true
            xsw_audio.autoplay = true;
            result = { playBackgroundAudio: 'ok' };
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static pauseBackgroundAudio(object) {
        var xsw_audio = document.getElementById('xsw_autoplayId');
        if (!object) {
            if (xsw_audio) {
                xsw_audio.pause();
            } else {
                throw new Error('请先播放音乐！');
            }
        } else {
            let success = object.success;
            let fail = object.fail;
            let complete = object.complete;
            let result;
            try {
                if (xsw_audio) {
                    xsw_audio.pause();
                    result = { pauseBackgroundAudio: 'ok' };
                    if (success) {
                        success(result);
                    }
                    if (complete) {
                        complete(result);
                    }
                } else {
                    throw new Error('请先播放音乐！');
                }
            } catch (e) {
                result = { errMsg: e.message };
                if (fail) {
                    fail(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        }
    }

    static stopBackgroundAudio(object) {
        var xsw_audio = document.getElementById('xsw_autoplayId');
        if (!object) {
            if (xsw_audio) {
                xsw_audio.pause();
                xsw_audio.currentTime = 0;
            } else {
                throw new Error('请先播放音乐！');
            }
        } else {
            let success = object.success;
            let fail = object.fail;
            let complete = object.complete;
            let result;
            try {
                if (xsw_audio) {
                    xsw_audio.pause();
                    result = { pauseBackgroundAudio: 'ok' };
                    if (success) {
                        success(result);
                    }
                    if (complete) {
                        complete(result);
                    }
                } else {
                    throw new Error('请先播放音乐！');
                }
            } catch (e) {
                result = { errMsg: e.message };
                if (fail) {
                    fail(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        }
    }

    static seekBackgroundAudio(object) {
        let position = object.position;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        let result;
        var xsw_audio = document.getElementById('xsw_autoplayId');
        try {
            if (xsw_audio) {
                xsw_audio.currentTime = position;
                result = { seekBackgroundAudio: 'ok' };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            } else {
                throw new Error('请先播放音乐！');
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static onBackgroundAudioPlay(callback) {
        setTimeout(function () {
            var xsw_audio = document.getElementById('xsw_autoplayId');
            if (xsw_audio) {
                xsw_audio.addEventListener('playing', function () {
                    var audioStatus = '1';
                    callback(audioStatus);
                });
            }
        });
    }

    static onBackgroundAudioPause(callback) {
        var audioStatus;
        var zzz = setInterval(function () {
            var xsw_audio = document.getElementById('xsw_autoplayId');
            if (xsw_audio) {
                xsw_audio.addEventListener('pause', function () {
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
        var audioStatus;
        var zzz = setInterval(function () {
            var xsw_audio = document.getElementById('xsw_autoplayId');
            if (xsw_audio) {
                xsw_audio.addEventListener('pause', function () {
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
    //     var wrap = document.createElement('audio');
    //     wrap.setAttribute('id', 'xsw_autoplayId');
    //     wrap.setAttribute('autoplay', 'autoplay');
    //     wrap.setAttribute('style', 'visibility: hidden;');
    //     var first = document.body.firstChild;
    //     document.body.insertBefore(wrap, first);
    //     var xsw_audio = document.getElementById('xsw_autoplayId');
    //     var wz_0 = setInterval(function() {
    //       if (xsw_audio.title || xsw_audio.coverImgUrl || xsw_audio.singer) {
    //         xsw_audio.setAttribute('controls', 'controls');
    //         xsw_audio.style = 'width: 80%;margin-left: 10%';
    //         var div = document.createElement('div');
    //         div.innerHTML =
    //           '<div style="width: 80%;background-color: #444;padding-top: 5px;margin-left: 10%"><img src="' +
    //           xsw_audio.coverImgUrl +
    //           '" style="width: 80px;height: 80px;display: inline-block;padding-left: 20px;"><div style="display: inline-block;padding-left: 20px;color: #fff"><div>' +
    //           xsw_audio.title +
    //           '</div><div style="font-size: 14px;">' +
    //           xsw_audio.singer +
    //           '</div><br></div></div>';
    //         var first_0 = document.body.firstChild;
    //         document.body.insertBefore(div, first_0);
    //         clearInterval(wz_0);
    //       } else {
    //         /*xsw_audio.startTime=xsw_audio.currentTime;
    // 				clearInterval(wz_0);*/
    //       }
    //     });
    //     var wz_1 = setInterval(function() {
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
    //       let result;
    //       result = {};
    //       setTimeout(function() {
    //         xsw_audio.addEventListener('playing', function() {
    //           callback(result);
    //         });
    //       });
    //     };
    //     xsw_audio.onPlay = function(callback) {
    //       let result;
    //       result = {};
    //       setTimeout(function() {
    //         xsw_audio.addEventListener('playing', function() {
    //           callback(result);
    //         });
    //       });
    //     };
    //     xsw_audio.onPause = function(callback) {
    //       let result;
    //       result = {};
    //       setTimeout(function() {
    //         xsw_audio.addEventListener('pause', function() {
    //           if (xsw_audio.currentTime == 0) {
    //           } else {
    //             callback(result);
    //           }
    //         });
    //       });
    //     };
    //     xsw_audio.onStop = function(callback) {
    //       let result;
    //       result = {};
    //       setTimeout(function() {
    //         xsw_audio.addEventListener('pause', function() {
    //           if (xsw_audio.currentTime == 0) {
    //             callback(result);
    //           } else {
    //           }
    //         });
    //       });
    //     };
    //     xsw_audio.onEnded = function(callback) {
    //       let result;
    //       result = {};
    //       setTimeout(function() {
    //         var wz_2 = setInterval(function() {
    //           if (xsw_audio.ended == true) {
    //             callback(result);
    //             clearInterval(wz_2);
    //           }
    //         }, 1000);
    //       });
    //     };
    //     xsw_audio.onTimeUpdate = function(callback) {
    //       let result;
    //       var currentTimeArray = [];
    //       result = {};
    //       setTimeout(function() {
    //         var wz_3 = setInterval(function() {
    //           currentTimeArray.push(xsw_audio.currentTime);
    //           if (
    //             parseInt(currentTimeArray[currentTimeArray.length - 1]) -
    //               parseInt(currentTimeArray[currentTimeArray.length - 2]) >
    //             1
    //           ) {
    //             callback(result);
    //             clearInterval(wz_3);
    //           }
    //         }, 500);
    //       });
    //     };
    //     xsw_audio.onWaiting = function(callback) {
    //       let result;
    //       var currentTimeArray = [];
    //       result = {};
    //       setTimeout(function() {
    //         var wz_4 = setInterval(function() {
    //           xsw_audio.addEventListener('playing', function() {
    //             if (
    //               parseInt(currentTimeArray[currentTimeArray.length - 1]) ==
    //               parseInt(currentTimeArray[currentTimeArray.length - 2])
    //             ) {
    //               callback('result');
    //               clearInterval(wz_4);
    //             }
    //           });
    //         }, 1000);
    //       });
    //     };
    //     return xsw_audio;
    //   }

    static getBackgroundAudioManager() {

        var audio = document.createElement('audio');
        audio.setAttribute('id', 'backgroundAudio');
        var firstChild = document.body.firstChild;
        document.body.insertBefore(audio, firstChild);
        var bgm = document.getElementById('backgroundAudio');
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

        bgm.stop = function () {
            bgm.pause();
            bgm.currentTime = 0;
        };

        bgm.onCanPlay = function (callback) {
            bgm.oncanplay = function () {
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

        bgm.onWaiting = function (callback) {
            bgm.onwaiting = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onPlay = function (callback) {
            bgm.onplay = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onPause = function (callback) {
            bgm.onpause = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onSeeking = function (callback) {
            bgm.onseeking = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onSeeked = function (callback) {
            bgm.onseeked = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onEnded = function (callback) {
            bgm.onended = function () {
                if (callback) {
                    callback();
                }
            };
        };

        // INFO: 停止播放时调用，在小程序中播放背景音乐时通知栏有控制器，但是HTML5无法实现，所以这里也调用onended事件
        bgm.onStop = function (callback) {
            bgm.onended = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onTimeUpdate = function (callback) {
            bgm.ontimeupdate = function () {
                if (callback) {
                    callback();
                }
            };
        };

        bgm.onNext = function (callback) { };
        bgm.onPrev = function (callback) { };

        return bgm;
    }

    //BackgroundAudioManager

    //LivePusher

    static startRecord(object) {
        let success = object.success;
        let fail = object.success;
        let complete = object.success;
        //////////////////////////////
        try {
            wx.startRecord();
        } catch (error) {
            result.errMsg = error.message;
            console.log(result);
        }
    }

    static stopRecord(object) {
        let success = object.success;
        let fail = object.success;
        let complete = object.success;
        //////////////////////////////
        let result = {};
        let localId;
        wx.stopRecord({
            success: function (res) {
                if (success) {
                    result.errMsg = 'startRecord:ok';
                    result.tempFilePath = res.localId; // 小程序中会返回录音文件的临时存放路径 tempFilePath ，JS-SDK中会返回录音文件的 localId ，所以这里直接将 localId 赋值给 tempFilePath，让用户获取 tempFilePath 来播放录音。
                    success(result);
                }
            },
            fail: function (result) {
                fail(result);
            },
            complete: function (result) {
                if (complete) {
                    complete(result);
                }
            }
        });
    }

    //CameraFrameListener

    //EditorContext

    static getLocation(object) {
        var type = object.type || 'wgs84'; // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入 'gcj02'
        var altitude = object.altitude || 'false'; //【小程序传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度】
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        // TODO: getLocation:模拟器无法返回speed、accuracy（手机上好像可以返回，还没试）
        // HACK: getLocation:JS-SDK无法返回{ altitude高度，verticalAccuracy垂直精度（Android 无法获取，返回 0）, horizontalAccuracy水平精度 }
        if (navigator.geolocation) {
            var n = navigator.geolocation.getCurrentPosition(function (res) {
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
              success(res);
            }
          },
          fail: function(res) {
            if (fail) {
              fail(res);
            }
          },
          complete: function(res) {
            if (complete) {
              complete(res);
            }
          }
        });*/
    }

    static openLocation(object) {
        var latitude = object.latitude; //（必填） 纬度，浮点数，范围为90 ~ -90
        var longitude = object.longitude; //（必填）经度，浮点数，范围为180 ~ -180
        // TODO: 5~18 转换为 1~28
        var scale = object.latitude || 28; // 地图缩放级别,整形值,范围从1~28。默认为最大【小程序：缩放比例，范围5~18】
        var name = object.name; // 位置名
        var address = object.address; // 地址详情说明
        var infoUrl = object.infoUrl; // * 在查看位置界面底部显示的超链接,可点击跳转
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        try {
            var errorInfo = '';
            var hasError = false;
            if (typeof latitude !== 'number') {
                errorInfo =
                    String_format(onekit_global.error_head, 'openLocation') +
                    String_format(onekit_global.error_body, 'latitude', 'Number', typeof longitude);
                hasError = true;
            } else if (!longitude) {
                // TODO: 无法进入这里判断
                errorInfo += String_format(onekit_global.error_body, 'longitude', 'Number');
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
            success: function (res) {
                if (success) {
                    success(res);
                }
            },
            fail: function () {
                fail();
            },
            complete: function () {
                if (complete) {
                    complete();
                }
            }
        });
    }

    static chooseLocation() { }

    //share

    static drawCanvas(object) {
        let canvasId = object.canvasId;
        let actions = object.actions;
        let reserve = object.reserve;
        ///////////////////
        let eCanvas = $("[canvasid='" + canvasId + "']")[0];
        Canvas._draw(eCanvas, actions, reserve);
    }
    static _draw(eCanvas, actions, reserve) {

        window.requestAnimationFrame(function () {

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
                            let setFillStyle = COLOR.fromRGBAs(data[1]);// 设置填充画笔颜色
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
                        canvas.drawText(text, dp2px(data[1])
                            , dp2px(data[2]) - textBaseLineY, fillPaint);
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


            /*  if (_canvasToTempFilePath != null) {
             // console.error(JSON.stringify(_canvasToTempFilePath));
             let OBJECT = _canvasToTempFilePath;
             let x = (OBJECT.containsKey("x") ? OBJECT.get("x") : 0);
             let y = (OBJECT.containsKey("y") ? OBJECT.get("y") : 0);
             let width = (OBJECT.containsKey("width") ? OBJECT.get("width") : px2dp(this.getWidth()) - x);
             let height = (OBJECT.containsKey("height") ? OBJECT.get("height") : px2dp(this.getHeight()) - y);
             let destWidth = (OBJECT.containsKey("destWidth") ? OBJECT.get("destWidth") : width);
             let destHeight = (OBJECT.containsKey("destHeight") ? OBJECT.get("destHeight") : height);
             let fileType = (OBJECT.containsKey("fileType") ? OBJECT.get("fileType") : "png");
             let quality = (OBJECT.containsKey("quality") ? OBJECT.get("quality") : 1);
             _canvasToTempFilePath = null;
             //////////////////
             try {
             this.buildDrawingCache();
             let saveImage = this.getDrawingCache();
             saveImage = cn.onekit.IMAGE.crop(saveImage, new Rect(dp2px(x), dp2px(y), dp2px(x + width), dp2px(y + height)));
             saveImage = cn.onekit.IMAGE.scale(saveImage, width / destWidth, height / destHeight);
             //
             let androidTempDir = context.getExternalCacheDir().getPath();
             let androidUUIDname = OneKit.createUUID() + "." + fileType;
             let file = new java.io.File(androidTempDir, androidUUIDname);
             file.createNewFile();
             let fos = new FileOutputStream(file);
             saveImage.compress(fileType.equalsIgnoreCase("png") ? Bitmap.CompressFormat.PNG : Bitmap.CompressFormat.JPEG, (100 * quality), fos);
             fos.flush();
             } catch (e) {
             e.printStackTrace();
             }
             }*/
        });
    }

    static saveFile() { }

    static getFileInfo() { }

    static getSavedFileList() { }

    static getSavedFileInfo() { }

    static removeSavedFile() { }

    static openDocument() { }

    static createCameraContext() { }

    static login() {
        var weiXdeng = document.createElement('button');
        weiXdeng.setAttribute('id', 'weiXingDeng');
        weiXdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
        weiXdeng.setAttribute('onclick', 'OpenInterface.weixinDian()');
        weiXdeng.innerText = '微信登录';
        var firstDian = document.body.firstChild;
        document.body.insertBefore(weiXdeng, firstDian);
        var zhiFdeng = document.createElement('button');
        zhiFdeng.setAttribute('id', 'zhiFBDeng');
        zhiFdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
        zhiFdeng.setAttribute('onclick', 'OpenInterface.zhiFBDian()');
        zhiFdeng.innerText = '支付宝登录';
        document.body.appendChild(zhiFdeng);
        var weiBdeng = document.createElement('button');
        weiBdeng.setAttribute('id', 'weiBoDeng');
        weiBdeng.setAttribute('style', 'width:80%;margin:20px 0 0 10%');
        weiBdeng.setAttribute('onclick', 'OpenInterface.weiBoDian()');
        weiBdeng.innerText = '微博登录';
        document.body.appendChild(weiBdeng);
        var QQdeng = document.createElement('button');
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

    static checkSession() { }

    static reportMonitor() {
    }

    static reportAnalytics(eventName, data) {

    }

    static requestPayment(object) {
        // 小程序参数
        let timestamp = object.timestamp; // 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间
        let nonceStr = object.nonceStr; // 随机字符串，长度为32个字符以下
        let package_s = object.package; // 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***（ package 为js关键词，所以取名为 package_s ）
        let signType = object.signType; // 签名算法
        let paySign = object.paySign; // 签名
        let success = object.success || '';
        let fail = object.fail || '';
        let complete = object.complete || '';
        wx.chooseWXPay({
            // JS-SDK参数
            timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
            package: package_s, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: paySign, // 支付签名
            success: success(res),
            fail: fail(res),
            complete: complete(res)
        });
    }


    static openSetting() { }

    static getSetting() { }

    //Address

    static addCard(object) {
        let cardList = object.cardList;
        let success = object.success || '';
        let fail = object.fail || '';
        let complete = object.complete || '';
        /////////////////////////////////
        wx.openCard({
            cardList: cardList, // 需要添加的卡券列表
            success: success,
            fail: fail,
            complete: complete
        });
    }

    static openCard(object) {
        let cardList = object.cardList;
        let success = object.success || '';
        let fail = object.fail || '';
        let complete = object.complete || '';
        /////////////////////////////////
        wx.openCard({
            cardList: cardList, // 需要打开的卡券列表
            success: success,
            fail: fail,
            complete: complete
        });
    }

    static checkIsSupportSoterAuthentication() { }

    static startSoterAuthentication() { }

    static checkIsSoterEnrolledInDevice() { }

    static getWeRunData() { }

    // 小程序和 JS-SDK 都有 iBeacon 的实现，但是貌似不一样
    static startBeaconDiscovery(object) {
        // let uuids = object.uuids;
        // let ignoreBluetoothAvailable = object.ignoreBluetoothAvailable;
        // let success = object.success;
        // let fail = object.success;
        // let complete = object.success;
        // //////////////////////////////
        // wx.startSearchBeacons({
        //   ticket: '', //摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
        //   complete: function(argv) {
        //     //开启查找完成后的回调函数
        //   }
        // });
    }

    static stopBeaconDiscovery() { }

    static getBeacons() { }

    static onBeaconUpdate() { }

    static onBeaconServiceChange() { }

    static getHCEState() { }

    static startHCE() { }

    static stopHCE() { }

    static onHCEMessage() { }

    static sendHCEMessage() { }

    static startWiFi() { }

    static stopWiFi() { }

    static connectWiFi() { }

    static getWiFiList() { }

    static onGetWiFiList() { }

    static setWiFiList() { }

    static onWiFiConnected() { }

    static getConnectedWiFi() { }

    static openBluetoothAdapter() { }

    static closeBluetoothAdapter() { }

    static getBluetoothAdapterState() { }

    static onBluetoothAdapterStateChange() { }

    static startBluetoothDevicesDiscovery() { }

    static stopBluetoothDevicesDiscovery() { }

    static getBluetoothDevices() { }

    static getConnectedBluetoothDevices() { }

    static onBluetoothDeviceFound() { }

    static createBLEConnection() { }

    static closeBLEConnection() { }

    static getBLEDeviceServices() { }

    static getBLEDeviceCharacteristics() { }

    static readBLECharacteristicValue() { }

    static writeBLECharacteristicValue() { }

    static notifyBLECharacteristicValueChange() { }

    static onBLEConnectionStateChange() { }

    static onBLECharacteristicValueChange() { }

    static makePhoneCall(object) {
        let phoneNumber = object.phoneNumber;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            location.href = 'tel:' + phoneNumber;
            result = {};
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    // TODO: 未改未测试
    // HACK: 应该不能通过web方式实现
    static addPhoneContact(object) {
        let phoneNumber = object.phoneNumber;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            var oDiv = document.createElement('div');
            oDiv.innerHTML = "<a  id='biaoDown' href='#' style='display: none'></a>";
            console.log(oDiv);
            document.body.appendChild(oDiv);
            var Url2 = document.getElementById('biaoDown');
            Url2.setAttribute('href', 'wtai://wp/ap;' + phoneNumber + ';');
            result = {};
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static getBatteryInfo(object) {
        let success = object.success;
        let fail = object.success;
        let complete = object.success;
        //////////////////////////////
        try {
            let result = {};
            navigator.getBattery().then(function (battery) {
                result.errMsg = 'getBatteryInfo:ok';
                result.level = battery.level * 100;
                result.isCharging = battery.charging;
            });
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (error) {
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static getBatteryInfoSync(object) {
        let success = object.success;
        let fail = object.success;
        let complete = object.success;
        //////////////////////////////
        try {
            let result = {};
            navigator.getBattery().then(function (battery) {
                result.errMsg = 'getBatteryInfoSync:ok';
                result.level = battery.level * 100;
                result.isCharging = battery.charging;
            });
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (error) {
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static setClipboardData(object) {
        let data = object.data; // 【必填】剪贴板的内容
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        /////////////////////////////
        let result = {};
        try {
            // let oDiv = document.createElement('div');
            // oDiv.innerHTML = "<textarea  id='onekit_clipboard' style='opacity: 0'>" + data + '</textarea>';
            // document.body.appendChild(oDiv);
            // let Url2 = document.getElementById('onekit_clipboard');
            // Url2.select(); // 选择对象
            // document.execCommand('copy'); // 执行浏览器复制命令
            // result.errMsg = 'setClipboardData:ok';
            // if (success) {
            //   success(result);
            // }
            // if (complete) {
            //   complete(result);
            // }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static getClipboardData(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result = {};
        try {
            // var clipboardData = clipboardData.getData('Text'); // 只能在 IE 浏览器中获取剪贴板内容
            // result.errMsg = 'getClipboardData:ok';
            // result.data = clipboardData;
            // if (success) {
            //   success(result);
            // }
            // if (complete) {
            //   complete(result);
            // }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }
    static setScreenBrightness() {
        // 设置屏幕亮度
        plus.screen.setBrightness(0.5);
    }

    static getScreenBrightness() {
        plus.screen.getBrightness();
    }

    static setKeepScreenOn() {
    }

    static captureScreen() {
        html2canvas(document.body).then(function (canvas) {
            //let ctx = cas.getContext('2d');
            //canvas.width = 100, canvas.height = 100;
            let dataURL = canvas.toDataURL('image/png', 1);
            if (OnekitWX_Screen._callback) {
                let result = { image: dataURL };
                OnekitWX_Screen._callback(result);
            }
        });
    }

    static onUserCaptureScreen(callback) {
        OnekitWX_Screen._callback = callback;
    }

    static makePhoneCall() { }

    static onAccelerometerChange(callback) {
        Accelerometer.callback = callback;
    }
    static _callback(event) {
        if (Accelerometer.callback) {
            var acceleration = event.accelerationIncludingGravity;
            var result = {
                x: acceleration.x,
                y: acceleration.y,
                z: acceleration.z
            };
            Accelerometer.callback(result);
        }
    }
    static startAccelerometer(object) {
        let interval = object.interval;
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////
        var result;
        try {
            if (window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', Accelerometer._callback, false);
                result = {
                    errMsg: 'startAccelerometer:ok'
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            } else {
                result = {
                    errMsg: 'startAccelerometer:fail'
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static stopAccelerometer(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        var result;
        try {
            if (window.DeviceMotionEvent) {
                window.removeEventListener('devicemotion', Accelerometer._callback, false);
                result = {
                    errMsg: 'stopAccelerometer:ok'
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            } else {
                result = {
                    errMsg: 'stopAccelerometer:fail'
                };
                if (success) {
                    success(result);
                }
                if (complete) {
                    complete(result);
                }
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static _deviceorientation(event) {
        if (OnekitWX_Compass._callback) {
            let result = {
                direction: event.alpha,
                accuracy: 'unknown'
            };
            OnekitWX_Compass._callback(result);
        }
    };
    static onCompassChange(callback) {
        OnekitWX_Compass._callback = callback;
    }
    static offCompassChange() {
        OnekitWX_Compass._callback = null;
    }
    static startCompass(object) {
        if (!object) {
            object = {};
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////
        let result;
        try {
            if (window.DeviceMotionEvent) {
                if (OnekitWX_Compass._callback) {
                    window.addEventListener('deviceorientation', OnekitWX_Compass._deviceorientation, false);
                }
                //
                result = {
                    errMsg: 'startCompass:ok'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            } else {
                result = {
                    errMsg: 'startDeviceMotionListening:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static stopCompass(object) {
        if (!object) {
            object = {};
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////
        let result;
        try {
            if (window.DeviceMotionEvent) {
                window.removeEventListener('deviceorientation', OnekitWX_Compass._deviceorientation, false);
                //
                result = {
                    errMsg: 'stopCompass:ok'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            } else {
                result = {
                    errMsg: 'stopDeviceMotionListening:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static _callback(event) {
        if (DeviceMotion.callback) {
            let deviceMotion = event;
            let result = {
                errMsg: 'onDeviceMotionChange:ok',
                alpha: deviceMotion.alpha,
                beta: deviceMotion.beta,
                gamma: deviceMotion.gamma
            };
            DeviceMotion.callback(result);
        }
    }

    static startDeviceMotionListening(object) {
        if (!object) {
            object = {};
        }
        let interval = object.interval || 'normal'; // 监听陀螺仪数据回调函数的执行频率
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////////
        let result;
        try {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', DeviceMotion._callback, false);
                result = {
                    errMsg: 'startDeviceMotionListening:ok'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            } else {
                result = {
                    errMsg: 'startDeviceMotionListening:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (error) {
            result = { errMsg: error.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static stopDeviceMotionListening(object) {
        if (!object) {
            object = {};
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        /////////////////////////////////
        let result;
        try {
            if (window.DeviceOrientationEvent) {
                window.removeEventListener('deviceorientation', DeviceMotion._callback, false);
                result = {
                    errMsg: 'stopDeviceMotionListening:ok'
                };
            } else {
                result = {
                    errMsg: 'stopDeviceMotionListening:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (error) {
            result = { errMsg: error.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static onDeviceMotionChange(callback) {
        DeviceMotion.callback = callback;
    }

    static _callback(event) {
        if (Gyroscope.callback) {
            let deviceOrientation = event.acceleration;
            let result = {
                errMsg: 'onGyroscopeChange:ok',
                x: deviceOrientation.x,
                y: deviceOrientation.y,
                z: deviceOrientation.z
            };
            Gyroscope.callback(result);
        }
    }
    static startGyroscope(object) {
        if (!object) {
            object = {};
        }
        let interval = object.interval || 'normal'; // 监听陀螺仪数据回调函数的执行频率
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////////
        let result;
        try {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('devicemotion', Gyroscope._callback, false);
                result = {
                    errMsg: 'startGyroscope:ok'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            } else {
                result = {
                    errMsg: 'startGyroscope:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (error) {
            result = { errMsg: error.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static stopGyroscope(object) {
        if (!object) {
            object = {};
        }
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        /////////////////////////////////
        let result;
        try {
            if (window.DeviceOrientationEvent) {
                window.removeEventListener('devicemotion', Gyroscope._callback, false);
                result = {
                    errMsg: 'stopGyroscope:ok'
                };
            } else {
                result = {
                    errMsg: 'stopGyroscope:fail'
                };
                if (success) { success(result); }; if (complete) { complete(result); };
            }
        } catch (error) {
            result = { errMsg: error.message };
            if (fail) { fail(result); } if (complete) { complete(result); }
        }
    }

    static onGyroscopeChange(callback) {
        Gyroscope.callback = callback;
    }

    static onMemoryWarning(callback) {
        var _callback = callback;
        //////////////////////////////
        let result = {};
        result.level = 1;
        try {
            const memoryInfo = window.performance.memory;
            const totalJSHeapSize = memoryInfo.totalJSHeapSize;
            const usedJSHeapSize = memoryInfo.usedJSHeapSize;
            const remainJsHeapSize = totalJSHeapSize - usedJSHeapSize;
            const MEMORY_MODERATE = totalJSHeapSize * 0.15;
            const MEMORY_LOW = totalJSHeapSize * 0.1;
            const MEMORY_CRITICAL = totalJSHeapSize * 0.05;
            if (MEMORY_LOW < remainJsHeapSize <= MEMORY_MODERATE) {
                result.level = 5;
            } else if (MEMORY_CRITICAL < remainJsHeapSize <= MEMORY_LOW) {
                result.level = 10;
            } else if (remainJsHeapSize <= MEMORY_CRITICAL) {
                result.level = 15;
            } else {
                result.level = '';
            }
            if (_callback) {
                _callback(result);
            }
        } catch (error) {
            result.errMsg = error.message;
            if (_callback) {
                _callback(result);
            }
        }
    }

    static scanItem() { }
    static scanCode(object) {
        let onlyFromCamera = object.onlyFromCamera || false; // 是否只能从相机扫码，不允许从相册选择图片（JS-SDK不支持）
        let scanType = object.scanType || ['barCode', 'qrCode']; // 扫码类型
        let success = object.success;
        let fail = object.success;
        let complete = object.success;
        ////////////////////////////////

    }

    static vibrateLong(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////
        var result = {};
        try {
            //let supportsVibrate = "vibrate" in navigator;
            if (navigator['vibrate']) {
                navigator['vibrate'](400);
            } else if (navigator['webkitVibrate']) {
                navigator['webkitVibrate'](400);
            } else if (navigator['oVibrate']) {
                navigator['oVibrate'](400);
            }
            result.errMsg = 'vibrateShort:ok';
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static vibrateShort(object) {
        let success = object.success;
        let fail = object.fail;
        let complete = object.complete;
        ///////////////////////////
        var result = {};
        try {
            //let supportsVibrate = "vibrate" in navigator;
            if (navigator['vibrate']) {
                navigator['vibrate'](15);
            } else if (navigator['webkitVibrate']) {
                navigator['webkitVibrate'](15);
            } else if (navigator['oVibrate']) {
                navigator['oVibrate'](15);
            }
            result.errMsg = 'vibrateLong:ok';
            if (success) {
                success(result);
            }
            if (complete) {
                complete(result);
            }
        } catch (e) {
            alert(JSON.stringify(e));
            result = { errMsg: e.message };
            if (fail) {
                fail(result);
            }
            if (complete) {
                complete(result);
            }
        }
    }

    static createWorker() { }

    static getExtConfig() { }

    static getExtConfigSync() { }

    static createSelectorQuery() {
        var xsw_document = document;
        xsw_document.select = function (object) {
            var ThatBox = xsw_document.querySelector(object);
            ThatBox.boundingClientRect = function (callback) {
                var Html = ThatBox.innerHTML;
                var boundingClientRectArray = [];
                boundingClientRectArray['id'] = ThatBox.getAttribute('id');
                boundingClientRectArray['left'] = ThatBox.getBoundingClientRect().left;
                if (Html) {
                    boundingClientRectArray['dataset'] = { Html };
                }
                else {
                    boundingClientRectArray['dataset'] = {};
                }
                boundingClientRectArray['right'] = ThatBox.getBoundingClientRect().right;
                boundingClientRectArray['top'] = ThatBox.getBoundingClientRect().top;
                boundingClientRectArray['bottom'] = ThatBox.getBoundingClientRect().bottom;
                boundingClientRectArray['width'] = ThatBox.getBoundingClientRect().width;
                boundingClientRectArray['height'] = ThatBox.getBoundingClientRect().height;
                if (callback) {
                    let objT = {};
                    for (var x in boundingClientRectArray) {
                        objT[x] = boundingClientRectArray[x]
                    }
                    callback.exec = function () {
                        callback(objT);
                    };
                }
                xsw_document.execPush(boundingClientRectArray);
                return callback;
            };
            var Tarray = [];
            ThatBox.scrollOffset = function (callback) {
                var Html = ThatBox.innerHTML;
                Tarray['id'] = ThatBox.getAttribute('id');
                if (Html) {
                    Tarray['dataset'] = { Html };
                }
                else {
                    Tarray['dataset'] = {};
                }
                Tarray['scrollTop'] = ThatBox.scrollTop;
                Tarray['scrollLeft'] = ThatBox.scrollLeft;
                if (callback) {
                    let objT = new Object();
                    for (var x in Tarray) {
                        objT[x] = Tarray[x]
                    }
                    callback.exec = function () {
                        callback(objT);
                    };
                }
                xsw_document.execPush(Tarray);
                return callback;
            };
            ThatBox.fields = function (object, callback) {
                let id = object.id;
                let dataset = object.dataset;
                let rect = object.rect;
                let size = object.size;
                let scrollOffset = object.scrollOffset;
                let properties = object.properties;
                var fieldsArray = [];
                if (id && id == true) {
                    fieldsArray['id'] = ThatBox.getAttribute('id');
                }
                if (dataset && dataset == true) {
                    var Html = ThatBox.innerHTML;
                    if (Html) {
                        fieldsArray['dataset'] = { Html };
                    }
                    else {
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
                var objF = new Object();
                for (var x in fieldsArray) {
                    objF[x] = fieldsArray[x]
                }
                callback.exec = function () {
                    callback(objF);
                };
                return callback;
            };
            return ThatBox;
        };

        xsw_document.selectAll = function (object) {
            var ThatBox = xsw_document.querySelectorAll(object);
            ThatBox.boundingClientRect = function (callback) {
                var objArray = new Array();
                var boundingClientRectArray = [];
                for (let xd = 0; xd < ThatBox.length; xd++) {
                    var Html = ThatBox[xd].innerHTML;
                    boundingClientRectArray['id'] = ThatBox[xd].getAttribute('id');
                    boundingClientRectArray['left'] = ThatBox[xd].getBoundingClientRect().left;
                    if (Html) {
                        boundingClientRectArray['dataset'] = { Html };
                    }
                    else {
                        boundingClientRectArray['dataset'] = {};
                    }
                    boundingClientRectArray['right'] = ThatBox[xd].getBoundingClientRect().right;
                    boundingClientRectArray['top'] = ThatBox[xd].getBoundingClientRect().top;
                    boundingClientRectArray['bottom'] = ThatBox[xd].getBoundingClientRect().bottom;
                    boundingClientRectArray['width'] = ThatBox[xd].getBoundingClientRect().width;
                    boundingClientRectArray['height'] = ThatBox[xd].getBoundingClientRect().height;
                    let objT = new Object();
                    for (var x in boundingClientRectArray) {
                        objT[x] = boundingClientRectArray[x]
                    }
                    objArray.push(objT);
                }
                if (callback) {
                    callback.exec = function () {
                        callback(objArray);
                    };
                }
                xsw_document.execPush(objArray);
                return callback;
            };
            ThatBox.scrollOffset = function (callback) {
                var objTArray = new Array();
                var Tarray = [];
                for (let xd = 0; xd < ThatBox.length; xd++) {
                    var Html = ThatBox[xd].innerHTML;
                    Tarray['id'] = ThatBox[xd].getAttribute('id');
                    if (Html) {
                        Tarray['dataset'] = { Html };
                    }
                    else {
                        Tarray['dataset'] = {};
                    }
                    Tarray['scrollTop'] = ThatBox[xd].scrollTop;
                    Tarray['scrollLeft'] = ThatBox[xd].scrollLeft;
                    let objT = new Object();
                    for (var x in Tarray) {
                        objT[x] = Tarray[x]
                    }
                    objTArray.push(objT);
                }
                if (callback) {
                    callback.exec = function () {
                        callback(objTArray);
                    };
                }
                xsw_document.execPush(objTArray);
                return callback;
            };
            ThatBox.fields = function (object, callback) {
                var objTTArray = new Array();
                var fieldsArray = [];
                for (let xd = 0; xd < ThatBox.length; xd++) {
                    let id = object.id;
                    let dataset = object.dataset;
                    let rect = object.rect;
                    let size = object.size;
                    let scrollOffset = object.scrollOffset;
                    let properties = object.properties;
                    if (id && id == true) {
                        fieldsArray['id'] = ThatBox[xd].getAttribute('id');
                    }
                    if (dataset && dataset == true) {
                        var Html = ThatBox[xd].innerHTML;
                        if (Html) {
                            fieldsArray['dataset'] = { Html };
                        }
                        else {
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
                    var objF = new Object();
                    for (var x in fieldsArray) {
                        objF[x] = fieldsArray[x]
                    }
                    objTTArray.push(objF);
                }
                if (callback) {
                    callback.exec = function () {
                        callback(objTTArray);
                    };
                }
                xsw_document.execPush(objTTArray);
                return callback;
            };
            return ThatBox;
        };

        xsw_document.selectViewport = function (callback) {
            var selectBody = document.body;
            selectBody.boundingClientRect = function (callback) {
                var boundingClientRectArrayA = [];
                var Html = selectBody.innerHTML;
                boundingClientRectArrayA['left'] = selectBody.getBoundingClientRect().left;
                if (Html) {
                    boundingClientRectArrayA['dataset'] = { Html };
                }
                else {
                    boundingClientRectArrayA['dataset'] = {};
                }
                boundingClientRectArrayA['right'] = selectBody.getBoundingClientRect().right;
                boundingClientRectArrayA['top'] = selectBody.getBoundingClientRect().top;
                boundingClientRectArrayA['bottom'] = selectBody.getBoundingClientRect().bottom;
                boundingClientRectArrayA['width'] = selectBody.getBoundingClientRect().width;
                boundingClientRectArrayA['height'] = selectBody.getBoundingClientRect().height;
                if (callback) {
                    let objT = new Object();
                    for (var x in boundingClientRectArrayA) {
                        objT[x] = boundingClientRectArrayA[x]
                    }
                    callback.exec = function () {
                        callback(objT);
                    };
                }
                xsw_document.execPush(boundingClientRectArrayA);
                return callback;
            };
            var Sarray = [];
            selectBody.scrollOffset = function (callback) {
                var Html = selectBody.innerHTML;
                Sarray['id'] = selectBody.getAttribute('id');
                if (Html) {
                    Sarray['dataset'] = { Html };
                }
                else {
                    Sarray['dataset'] = {};
                }
                Sarray['scrollTop'] = selectBody.scrollTop;
                Sarray['scrollLeft'] = selectBody.scrollLeft;
                if (callback) {
                    let objT = new Object();
                    for (var x in Sarray) {
                        objT[x] = Sarray[x]
                    }
                    callback.exec = function () {
                        callback(objT);
                    };
                }
                xsw_document.execPush(Sarray);
                return callback;
            };
            selectBody.fields = function (object, callback) {
                let id = object.id;
                let dataset = object.dataset;
                let rect = object.rect;
                let size = object.size;
                let scrollOffset = object.scrollOffset;
                let properties = object.properties;
                var fieldsArrayA = [];
                if (id && id == true) {
                    fieldsArrayA['id'] = selectBody.getAttribute('id');
                }
                if (dataset && dataset == true) {
                    var Html = selectBody.innerHTML;
                    if (Html) {
                        fieldsArrayA['dataset'] = { Html };
                    }
                    else {
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
                var objF = new Object();
                for (var x in fieldsArrayA) {
                    objF[x] = fieldsArrayA[x]
                }
                callback.exec = function () {
                    callback(objF);
                };
                return callback;
            };
            return selectBody
        };

        var execArray = [];
        xsw_document.execPush = function (callback) {
            let objT = new Object();
            for (var x in callback) {
                objT[x] = callback[x]
            }
            execArray.push(objT);
        };
        xsw_document.exec = function (callback) {
            callback(execArray);
        };
        return xsw_document;
    }

    static getNetworkType(object) {
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;
        var connectionInfo = navigator.connection;
        alert(connectionInfo.effectiveType);

    }

    // TODO: 未测试
    // INFO: Network Information API 兼容性很差 (https://caniuse.com/#feat=netinfo) (https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API)
    static onNetworkStatusChange(callback) {
        var connection = navigator.connection;
        var connectionInfo = {};
        connectionInfo.isOnline = true;
        connectionInfo.networkType = connection.type || 'unknown';
        connection.addEventListener('change', function () {
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

    static createIntersectionObserver() { }

    static createRewardedVideoAd(object) { }
    static createInterstitialAd(object) { }

    static color() { }//canvas
    static ble() { }
    static fileSystem() { }
    static livePlayer() { }
    static livePusher() { }
    static mediaContainer() { }
    static accountInfo() { }
    static chooseAddress() { }
    static authorize() { }
    static chooseInvoiceTitle() { }
    static chooseInvoice() { }
    static navigateToMiniProgram() { }
    static navigateBackMiniProgram() { }
    static UserInfo() { }
    static getUserInfo() { }

    static updateShareMenu() { }
    static showShareMenu() { }
    static hideShareMenu() { }
    static getShareInfo() { }
    static authPrivateMessage() { }


    static playVoice(object) { }
    static pauseVoice(object) { }
    static stopVoice(object) { }

    static setBackgroundFetchToken() { }
    static onBackgroundFetchData() { }
    static getBackgroundFetchToken() { }
    static getBackgroundFetchData() { }

    static onKeyboardHeightChange() { }
    static offKeyboardHeightChange() { }
    static hideKeyboard() { }
    static getSelectedTextRange() { }

    static getMenuButtonBoundingClientRect() { }

    static setTopBarText() { }

    static setWindowSize() { }
    static onWindowResize() { }
    static offWindowResize() { }
}