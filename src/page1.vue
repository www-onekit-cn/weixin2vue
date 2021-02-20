<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="page-section">
      <onekit-view onekit-class="page-section-title first">movable-view区域小于movable-area</onekit-view>
      <onekit-movable-area>
        <onekit-movable-view :x="x"
                             :y="y"
                             direction="all">text</onekit-movable-view>
      </onekit-movable-area>
    </onekit-view>
  </onekit-page>
</template>

<script>
import OnekitPage from '../weixin2vue/OnekitPage'
export default OnekitPage({}, {
  onShareAppMessage: function () {
    return {
      title: 'movable-view',
      path: 'page/component/pages/movable-view/movable-view'
    }
  },
  data: {
    x: 0,
    y: 0,
    scale: 2
  },
  tap: function () {
    this.setData({
      x: 30,
      y: 30
    })
  },
  tap2: function () {
    this.setData({
      scale: 3
    })
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  }
})
</script>

<style>
.onekit-movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(var(--screen-width) * 100 / 750);
  width: calc(var(--screen-width) * 100 / 750);
  background: #1aad19;
  color: #fff;
}
.onekit-movable-area {
  height: calc(var(--screen-width) * 400 / 750);
  width: calc(var(--screen-width) * 400 / 750);
  margin: calc(var(--screen-width) * 50 / 750);
  background-color: #ccc;
  overflow: hidden;
}
.max {
  width: calc(var(--screen-width) * 600 / 750);
  height: calc(var(--screen-width) * 600 / 750);
}
.page-section {
  width: 100%;
  margin-bottom: calc(var(--screen-width) * 60 / 750);
}
.page-section:last-child {
  margin-bottom: 0;
}
.page-section-title {
  font-size: calc(var(--screen-width) * 28 / 750);
  color: #999999;
  margin-bottom: calc(var(--screen-width) * 10 / 750);
  padding-left: calc(var(--screen-width) * 30 / 750);
  padding-right: calc(var(--screen-width) * 30 / 750);
}
</style>
