/**
 * Created by Wangjunjie on 2018/12/25.
 */
class OnekitWX_ScanCode {
  static scanCode(object) {
    let onlyFromCamera = object.onlyFromCamera || false; // 是否只能从相机扫码，不允许从相册选择图片（JS-SDK不支持）
    let scanType = object.scanType || ['barCode', 'qrCode']; // 扫码类型
    let success = object.success;
    let fail = object.success;
    let complete = object.success;
    ////////////////////////////////

  }
}
