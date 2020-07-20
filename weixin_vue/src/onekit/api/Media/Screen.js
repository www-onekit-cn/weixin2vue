import  html2canvas from  "html2canvas"
import OnekitWX_Record from "./Record"
export default class OnekitWX_Screen extends OnekitWX_Record{
  static setScreenBrightness() {
    // 设置屏幕亮度
    plus.screen.setBrightness(0.5);
  }

  static getScreenBrightness() {
    plus.screen.getBrightness();
  }

  static setKeepScreenOn() {
  }

  static captureScreen() {
    html2canvas(document.body).then(function (canvas) {
      //let ctx = cas.getContext('2d');
      //canvas.width = 100, canvas.height = 100;
      let dataURL = canvas.toDataURL('image/png', 1);
      if (OnekitWX_Screen._callback) {
        let result = {image: dataURL};
        OnekitWX_Screen._callback(result);
      }
    });
  }

  static onUserCaptureScreen(callback) {
    OnekitWX_Screen._callback = callback;
  }
}
