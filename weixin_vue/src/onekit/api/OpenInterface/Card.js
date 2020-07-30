import OnekitWX_Authorize from "./Authorize"
export class OnekitWX_Card extends OnekitWX_Authorize{
  static addCard(object) {
    let cardList = object.cardList;
    let success = object.success || '';
    let fail = object.fail || '';
    let complete = object.complete || '';
    /////////////////////////////////
    wx.openCard({
      cardList: cardList, // 需要添加的卡券列表
      success: success,
      fail: fail,
      complete: complete
    });
  }

  static openCard(object) {
    let cardList = object.cardList;
    let success = object.success || '';
    let fail = object.fail || '';
    let complete = object.complete || '';
    /////////////////////////////////
    wx.openCard({
      cardList: cardList, // 需要打开的卡券列表
      success: success,
      fail: fail,
      complete: complete
    });
  }
}
