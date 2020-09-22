import Uri from "./js/uri"
const storeFiles = {};
const tempFiles = {};
function getUrl(url) {
  let uri = Uri.parse(url);
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
function getExt(url){
  let x = url.lastIndexOf(".");
  if(x>=0){
    return url.substr(x+1);
  }else{
    return "";
  }
}
function  createUUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
function   createUUIDfileName ( fileName) {
  let uuid = createUUID();
  let ext = fileName.substring(fileName.lastIndexOf("."), fileName.length);
  return uuid + ext;
}
function createTempPath ( fileName) {
  let uuid=  createUUIDfileName(fileName);
  return `wxfile://tmp_oneki${uuid}`;
}
function createStorePath  ( fileName) {
  let uuid=  createUUIDfileName(fileName);
  return `wxfile://store/oneki${uuid}`;
}
function   loadImage  (  src,   callback) {

  if (String.isEmpty(src)) {
    callback(null, null);
    return;
  }
  let url = Uri.parse(src);
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
      success: function (blob) {
        callback(blob, src);
      },
      error: function (a, b) {
        console.log(a, b);
      }
    });
  } else {
    $.ajax({
      url: url,
      dataType: "arraybuffer",
      success: function (blob) {
        callback(blob, src);
      },
      error: function (a, b) {
        console.log(a, b);
      }
    });
  }
}
function raiseEvent(target,type,e) {
  return {
    changedTouches: [{
      clientX: e.clientX,
      clientY:  e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    currentTarget: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop:  target.offsetTop,
    },
    detail: {
      x: e.x,
      y: e.y
    },
    target: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop:  target.offsetTop,
      timeStamp: e.timeStamp
    },
    touches: [{
      clientX: e.clientX,
      clientY:  e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    type: type,
  }
}
export default {tempFiles,storeFiles,getUrl,getExt,createUUID,createUUIDfileName,createTempPath,createStorePath,loadImage,raiseEvent}
