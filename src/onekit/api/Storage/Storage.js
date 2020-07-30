/**
 * Created by xsw on 2018/4/28.
 * Modified by Wangjunjie on 2018/12/24.
 */
import OnekitWX_BackgroundFetch from "./BackgroundFetch"
export class OnekitWX_Storage extends OnekitWX_BackgroundFetch{
  // INFO: 已改
  static setStorageSync(key,value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
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
}
