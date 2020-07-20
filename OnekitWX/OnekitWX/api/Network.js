/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
class OnekitWX_Network {
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
    connection.addEventListener('change', function() {
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
}
