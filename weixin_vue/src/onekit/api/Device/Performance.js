import OnekitWX_NFC from "./NFC"
export default class OnekitWX_Performance extends OnekitWX_NFC{
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
}
