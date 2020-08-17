<script>
const PAGE_JSON = {
  navigationBarTitleText: "form",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-form>
          <onekit-view class="page-section page-section-gap">
            <onekit-view class="page-section-title">switch</onekit-view>
            <onekit-switch name="switch"></onekit-switch>
          </onekit-view>

          <onekit-view class="page-section page-section-gap">
            <onekit-view class="page-section-title">radio</onekit-view>
            <onekit-radio-group name="radio">
              <onekit-label>
                <onekit-radio value="radio1"></onekit-radio>选项一
              </onekit-label>
              <onekit-label>
                <onekit-radio value="radio2"></onekit-radio>选项二
              </onekit-label>
            </onekit-radio-group>
          </onekit-view>

          <onekit-view class="page-section page-section-gap">
            <onekit-view class="page-section-title">checkbox</onekit-view>
            <onekit-checkbox-group name="checkbox">
              <onekit-label>
                <onekit-checkbox value="checkbox1"></onekit-checkbox>选项一
              </onekit-label>
              <onekit-label>
                <onekit-checkbox value="checkbox2"></onekit-checkbox>选项二
              </onekit-label>
            </onekit-checkbox-group>
          </onekit-view>

          <onekit-view class="page-section page-section-gap">
            <onekit-view class="page-section-title">slider</onekit-view>
            <onekit-slider value="50" name="slider" show-value></onekit-slider>
          </onekit-view>

          <onekit-view class="page-section">
            <onekit-view class="page-section-title">input</onekit-view>
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__bd">
                  <onekit-input class="weui-input" name="input" placeholder="这是一个输入框"></onekit-input>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view class="btn-area">
            <onekit-button type="primary" formType="submit">Submit</onekit-button>
            <onekit-button formType="reset">Reset</onekit-button>
          </onekit-view>
        </onekit-form>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "form",
      path: "page/component/pages/form/form",
    };
  },
  data: {
    pickerHidden: true,
    chosen: "",
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true,
    });
    this.setData({
      chosen: e.detail.value,
    });
  },
  pickerCancel: function () {
    this.setData({
      pickerHidden: true,
    });
  },
  pickerShow: function () {
    this.setData({
      pickerHidden: false,
    });
  },
  formSubmit: function (e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
  },
  formReset: function (e) {
    console.log("form发生了reset事件，携带数据为：", e.detail.value);
    this.setData({
      chosen: "",
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

label {
  display: inline-block;
  min-width: 235px;
  margin-right: 10px;
}
form {
  width: 100%;
}
.picker-text {
  margin-left: 10px;
  position: relative;
}
</style>
