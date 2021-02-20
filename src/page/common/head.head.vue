<template>
  <onekit-ui>
    <onekit-view onekit-class="page-head">
      <onekit-view onekit-class="page-head-title">
        {{title}}
      </onekit-view>
      <onekit-view onekit-class="page-head-line"></onekit-view>
      <onekit-view v-if="desc"
                   onekit-class="page-head-desc">
        {{desc}}
      </onekit-view>
    </onekit-view>
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
export default OnekitComponent(ONEKIT_JSON,  {
  properties: {
    DATA: Any
  },
  data: {
    title: ""
  },
  onLoad: function () {
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
