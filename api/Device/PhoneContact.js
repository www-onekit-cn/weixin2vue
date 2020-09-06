/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
import OnekitWX_Phone from "./Phone"
export default class OnekitWX_PhoneContact extends OnekitWX_Phone{
  static makePhoneCall(object) {
    let phoneNumber = object.phoneNumber;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    var result;
    try {
      location.href = 'tel:' + phoneNumber;
      result = {};
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

  // TODO: 未改未测试
  // HACK: 应该不能通过web方式实现
  static addPhoneContact(object) {
    let phoneNumber = object.phoneNumber;
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    var result;
    try {
      var oDiv = document.createElement('div');
      oDiv.innerHTML = "<a  id='biaoDown' href='#' style='display: none'></a>";
      console.log(oDiv);
      document.body.appendChild(oDiv);
      var Url2 = document.getElementById('biaoDown');
      Url2.setAttribute('href', 'wtai://wp/ap;' + phoneNumber + ';');
      result = {};
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
}
