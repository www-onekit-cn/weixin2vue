import Vue from 'vue'
import { URL, PATH, STRING } from 'oneutil'
import $ from 'jquery'
const storeFiles = {};
const tempFiles = {};

function isWeixin() {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) === 'micromessenger';
}

function isMobile() {
  const ua = navigator.userAgent;

  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/);
  return isIphone || isAndroid
}

function getUrl(url) {
  let uri = new URL(url);
  let result;
  let type;
  if (uri.scheme == null) {
    type = "asset";
    result = url;
  } else if (uri.scheme === "wxfile") {
    type = "file";
    if (url.startsWith("wxfile://tmp_")) {
      result = url;
    } else if (url.startsWith("wxfile://store_")) {
      result = url;
    } else {
      console.log("=======", "[wxfile] " + url);
      result = null;
    }
  } else {
    type = "www";
    result = url;
  }
  return [type, result];
}

function getExt(url) {
  let x = url.lastIndexOf(".");
  if (x >= 0) {
    return url.substr(x + 1);
  } else {
    return "";
  }
}

function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function createUUIDfileName(fileName) {
  let uuid = createUUID();
  let ext = fileName.substring(fileName.lastIndexOf("."), fileName.length);
  return uuid + ext;
}

function createTempPath(fileName) {
  let uuid = createUUIDfileName(fileName);
  return `wxfile://tmp_onekit_${uuid}`;
}

function createStorePath(fileName) {
  let uuid = createUUIDfileName(fileName);
  return `wxfile://store/onekit_${uuid}`;
}

function loadImage(src, callback) {

  if (String.isEmpty(src)) {
    callback(null, null);
    return;
  }
  let url = new URL(src);
  if (url.toString().indexOf("tmp") !== -1) {
    let image = tempFiles[url];
    callback(image, src);
  } else if (url.toString().indexOf("store") !== -1) {
    let image = storeFiles[url];
    callback(image, src);
  } else if (url.getHost() != null) {
    $.ajax({
      url: url,
      dataType: "arraybuffer",
      success: function(blob) {
        callback(blob, src);
      },
      error: function(a, b) {
        console.log(a, b);
      }
    });
  } else {
    $.ajax({
      url: url,
      dataType: "arraybuffer",
      success: function(blob) {
        callback(blob, src);
      },
      error: function(a, b) {
        console.log(a, b);
      }
    });
  }
}

function raiseEvent(target, type, e) {
  return {
    changedTouches: [{
      clientX: e.clientX,
      clientY: e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    currentTarget: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop: target.offsetTop,
    },
    detail: {
      x: e.x,
      y: e.y
    },
    target: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop: target.offsetTop,
      timeStamp: e.timeStamp
    },
    touches: [{
      clientX: e.clientX,
      clientY: e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    type: type,
  }
}

function current() {
  return Vue.prototype.CURRENT;
}

function currentUrl() {
  return current().$route.path;
}

function fixurl(wx_rel_url) {
  const wx_abs_url = PATH.res2abs(currentUrl(), wx_rel_url)
  if (Vue.prototype.APP_JSON.pages.indexOf(wx_abs_url) < 0) {
    if (Vue.prototype.onPageNotFound) {
      Vue.prototype.onPageNotFound();
    }
  }
  const vue_path = wx_abs_url // ...
  return vue_path
}


function header2json(str) {
  var strArray = str.split('\n');
  var headers = {};

  for (let i = 0; i < strArray.length - 1; i++) {
    var array = strArray[i].split(': ');
    var key = STRING.firstUpper(array[0]);
    var value = array[1];
    headers[key] = value;
  }
  return headers;
}


export default { isWeixin, isMobile, tempFiles, storeFiles, getUrl, getExt, createUUID, createUUIDfileName, createTempPath, createStorePath, loadImage, raiseEvent, current, currentUrl, fixurl, header2json }