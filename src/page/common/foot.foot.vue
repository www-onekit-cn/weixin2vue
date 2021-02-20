<template>
  <onekit-ui>
    <onekit-navigator onekit-class="page-foot"
                      openType="switchTab"
                      url="/page/component/index"
                      hover-class="none">
      <onekit-image onekit-class="icon-foot"
                    src="../../image/icon_foot.png"></onekit-image>
    </onekit-navigator>
  </onekit-ui>
</template>
<script>
/* eslint-disable */
const ONEKIT_JSON = {
  "component": true,
  "usingComponents": {}
}
import OnekitComponent from '../../../weixin2vue/OnekitComponent';
import wx from '../../../weixin2vue/wx';
import { Any } from '../../../weixin2vue/macro';
//let global = {};
export default OnekitComponent(ONEKIT_JSON, {
  properties: {
    DATA: Any
  },
  data: {
    desc: ""
  },
  attached: function () {
    if (this.data.DATA) {
      var data;
      if (typeof (this.data.DATA) == "string") {
        data = JSON.parse((('{' + this.data.DATA)) + '}');
      } else {
        data = this.data.DATA;
      }
      this.setData(data);
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
