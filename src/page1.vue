<template>
  <page id="app">
    <onekit-swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <template v-for="(item) in background">
        <onekit-swiper-item :key="item">
          <onekit-view :onekit-class="'swiper-item '+item">{{item}}</onekit-view>
        </onekit-swiper-item>
      </template>
    </onekit-swiper>

  </page>
</template>

<script>
  import OnekitPage from '../weixin2vue/OnekitPage'
  export default OnekitPage({}, {

    onShareAppMessage() {
      return {
        title: 'swiper',
        path: 'page/component/pages/swiper/swiper'
      }
    },

    data: {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    },

    changeIndicatorDots() {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },

    changeAutoplay() {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },

    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },

    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }

  })
</script>

<style>

</style>