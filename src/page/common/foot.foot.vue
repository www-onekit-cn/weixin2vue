<template>
  <onekit-page id='app'>
    <onekit-navigator onekit-class="page-foot"
                      openType="switchTab"
                      url="/page/component/index"
                      hover-class="none">
      <onekit-image onekit-class="icon-foot"
                    src="../../image/icon_foot.png"></onekit-image>
    </onekit-navigator>
  </onekit-page>
</template>
<script>
/* eslint-disable */
const ONEKIT_JSON = {
  "component": true,
  "usingComponents": {}
}
import OnekitComponent from '../../../weixin2vue/OnekitComponent';
import wx from '../../../weixin2vue/wx';
//let global = {};
export default OnekitComponent(ONEKIT_JSON, {}, {
  properties: {
    DATA: Object
  },
  attached: function () {
    if (this.DATA) {
      var data;
      if (typeof (this.DATA) == "string") {
        data = JSON.parse((('{' + this.DATA)) + '}');
      } else {
        data = this.DATA;
      }
      this.setData(data);
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
