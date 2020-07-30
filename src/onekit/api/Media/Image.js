/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/25.
 */
import OnekitWX_EditorText from "./EditorText"
export class OnekitWX_Image extends OnekitWX_EditorText{
  // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
  static chooseImage(object) {}

  // HACK: 这个 api 的名字、参数和 JS-SDK 一样，可以在用户代码中直接调用 JS-SDK 来实现
  static previewImage(object) {}

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
      pic.onload = function() {
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
      setTimeout(function() {
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

  static saveImageToPhotosAlbum() {}

  static compressImage(object) {}

  static canvasDataURL(path, obj, callback) {
    var img = new Image();
    img.src = path;
    img.onload = function() {
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
}
