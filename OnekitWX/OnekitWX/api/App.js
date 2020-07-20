class OnekitWX_App {
  static offPageNotFound() {}
  static onPageNotFound() {}

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
}
