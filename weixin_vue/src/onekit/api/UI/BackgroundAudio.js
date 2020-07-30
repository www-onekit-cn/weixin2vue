import OnekitWX_Background from "./Background"
export class OnekitWX_BackgroundAudio extends OnekitWX_Background{
  static getBackgroundAudioPlayerState(object) {
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    let result;
    var xsw_audio = document.getElementById('xsw_autoplayId');
    try {
      if (xsw_audio) {
        var audioStatus = '2';
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
    setTimeout(function() {
      var xsw_audio = document.getElementById('xsw_autoplayId');
      if (xsw_audio) {
        xsw_audio.addEventListener('playing', function() {
          var audioStatus = '1';
          callback(audioStatus);
        });
      }
    });
  }

  static onBackgroundAudioPause(callback) {
    var audioStatus;
    var zzz = setInterval(function() {
      var xsw_audio = document.getElementById('xsw_autoplayId');
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
    var audioStatus;
    var zzz = setInterval(function() {
      var xsw_audio = document.getElementById('xsw_autoplayId');
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

    bgm.onNext = function(callback) {};
    bgm.onPrev = function(callback) {};

    return bgm;
  }
}

// class BackgroundAudioManager {
//   static getBackgroundAudioManager() {
//     var audio = document.createElement('audio');
//     audio.setAttribute('id', 'backgroundAudio');
//     var firstChild = document.body.firstChild;
//     document.body.insertBefore(audio, firstChild);
//     var backgroundAudio = document.getElementById('backgroundAudio');
//     return backgroundAudio;
//   }
// }
