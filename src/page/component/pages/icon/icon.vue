<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"icon"}'></onekit-template>

      <onekit-view onekit-class="icon-box">
        <onekit-icon onekit-class="icon-box-img"
                     type="success"
                     size="93"></onekit-icon>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">成功</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示操作顺利完成</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-icon onekit-class="icon-box-img"
                     type="info"
                     size="93"></onekit-icon>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">提示</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-icon onekit-class="icon-box-img"
                     type="warn"
                     size="93"
                     color="#C9C9C9"></onekit-icon>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">普通警告</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-icon onekit-class="icon-box-img"
                     type="warn"
                     size="93"></onekit-icon>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">强烈警告</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可挽回的严重后果的情况</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-icon onekit-class="icon-box-img"
                     type="waiting"
                     size="93"></onekit-icon>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">等待</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示等待，告知用户结果需等待</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="success_no_circle"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">多选控件图标_已选择</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于多选控件中，表示已选择该项目</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="circle"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">多选控件图标_未选择</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于多选控件中，表示该项目可被选择，但还未选择</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="warn"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">错误提示</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于在表单中表示出现错误</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="success"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">单选控件图标_已选择</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于单选控件中，表示已选择该项目</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="download"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">下载</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于表示可下载</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="info_circle"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">提示</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于在表单中表示有信息提示</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="cancel"
                       size="23"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">停止或关闭</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于在表单中，表示关闭或停止</onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view onekit-class="icon-box">
        <onekit-view onekit-class="icon-small-wrp">
          <onekit-icon onekit-class="icon-small"
                       type="search"
                       size="14"></onekit-icon>
        </onekit-view>
        <onekit-view onekit-class="icon-box-ctn">
          <onekit-view onekit-class="icon-box-title">搜索</onekit-view>
          <onekit-view onekit-class="icon-box-desc">用于搜索控件中，表示可搜索</onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "icon",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'icon',
      path: 'page/component/pages/icon/icon'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.container {
  display: block;
}
.icon-box {
  margin-bottom: 20px;
  padding: 0 38px;
  display: flex;
  align-items: center;
}
.icon-box-img {
  margin-right: 28px;
}
.icon-box-ctn {
  flex-shrink: 100;
}
.icon-box-title {
  font-size: 17px;
}
.icon-box-desc {
  margin-top: 6px;
  font-size: 13px;
  color: #888;
}
.icon-small-wrp {
  margin-right: 28px;
  width: 93px;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
