/**
 * Created by zhangjin on 2018/4/26.
 */
let Onekit_WX = {};
Onekit_WX.tempFiles = {};
Onekit_WX.storeFiles = {};
Onekit_WX.url = function(name,isRoot) {
        let url = name + ".html?onekit_temp=" + Math.random();
        if(isRoot) {
            url += "&onekit_root=true";
        }
        return url;
    };
Onekit_WX.getUrl = function(url) {
         let uri = Uri.parse(url);
         let result;
         let type;
         if (uri.getScheme() == null) {
             type = "asset";
             result = url;
         } else if (uri.getScheme() == "wxfile") {
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
     };
Onekit_WX.getExt = function(url){
    let x = url.lastIndexOf(".");
    if(x>=0){
        return url.substr(x+1);
    }else{
        return "";
    }
};
    Onekit_WX.  createUUID = function(){
    let uuidStr = "";
    for(let i = 0;i<2;i++){
        let uuid = UUID.randomUUID();
        uuidStr += uuid.replaceAll("-","");
    }
    return uuidStr.toString();
};
Onekit_WX.   createUUIDfileName = function( fileName) {
    let uuid = Onekit_WX.createUUID();
    let ext = fileName.substring(fileName.lastIndexOf("."), fileName.length);
    return uuid + ext;
};
Onekit_WX.createTempPath = function( fileName) {
    let uuid=  Onekit_WX.createUUIDfileName(fileName);
    return `wxfile://tmp_oneki${uuid}`;
};
Onekit_WX.createStorePath = function( fileName) {
    let uuid=  Onekit_WX.createUUIDfileName(fileName);
    return `wxfile://store/oneki${uuid}`;
};
Onekit_WX.   loadImage = function(  src,   callback) {

    if (String.isEmpty(src)) {
        callback(null, null);
        return;
    }
    let url = Uri.parse(src);
    if (url.toString().indexOf("tmp") != -1) {
        let image = Onekit_WX.tempFiles[url];
        callback(image, src);
    } else if (url.toString().indexOf("store") != -1) {
        let image = Onekit_WX.storeFiles[url];
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
};
Onekit_WX.target = function (target,id) {
    return {
        id:target.id,
        offsetLeft:target.offsetLeft,
        offsetTop:target.offsetTop,
        dataset:target.dataset
    };
};
Onekit_WX.touchs = function (touchs) {
  let result = [];
  for(let t=0;t<touchs.length;t++){
      let touch = touchs[t];
      result.push({
          identifier:t,
          pageX:touch.pageX,
          pageY:touch.pageY,
          clientX:touch.clientX,
          clientY:touch.clientY
      });
  }
  return result;
};
Onekit_WX.event = function (event,detail) {
    let type = event.type;
    switch (type) {
        case "click":
            type = "tap";
            break;
        default:
            break;
    }
    return {
        type: type,
        timeStamp:event.timeStamp,
        target:Onekit_WX.target(event.target,event.id),
        currentTarget:Onekit_WX.target(event.originalTarget,event.id),
        detail:{
            x:event.pageX,
            y:event.pageY
        },
        touches:Onekit_WX.touchs(event.touches?event.touches:[event]),
        changedTouches:Onekit_WX.touchs(event.changedTouches?event.changedTouches:[event])
    };
};