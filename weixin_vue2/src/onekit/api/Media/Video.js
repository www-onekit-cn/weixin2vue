import OnekitWX_Screen from "./Screen"
export default class OnekitWX_Video extends OnekitWX_Screen{
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
            function() {
              let file = xsw_ThisVideo.files[0];
              if (file) {
                result = {
                  tempFilePath: undefined, // 选定视频的临时文件路径
                  duration: undefined, // 选定视频的时间长度
                  size: file.size, // 选定视频的数据量大小
                  height: undefined, // 返回选定视频的高度
                  width: undefined // 返回选定视频的宽度
                };
                if(success){success(result);};if(complete){complete(result);};
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
        if(fail){fail(result);}if(complete){complete(result);}
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
      if(success){success(result);};if(complete){complete(result);};
    } catch (e) {
      result = { errMsg: 'saveVideoToPhotosAlbum:fail' };
      if(fail){fail(result);}if(complete){complete(result);}
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
}
