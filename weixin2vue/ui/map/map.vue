<template>
  <div :class="['onekit-map',onekitClass]"
       :style="onekitStyle"
       :id="onekitId">
  </div>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default {
  name: "onekit-map",
  mixins: [weixin_behavior, onekit_behavior],
  data () {
    return {
      lang: this.longitude,
      lat: this.latitude,
    }
  },
  props: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    scale: { type: Number, default: 16 },
    'min-scale': { type: Number, default: 3 },
    'max-scale': { ype: Number, default: 20 },
    markers: Array,
    covers: Array,
    polyline: Array,
    circles: Array,
    controls: Array,
    'include-points': Array,
    'show-location': { type: Boolean, default: false },
    polygons: Array,
    subkey: String,
    'layer-style': { type: Number, default: 1 },
    rotate: { type: Number, default: 0 },
    skew: { type: Number, default: 0 },
    enable3D: { type: Boolean, default: false },
    showCompass: { type: Boolean, default: false },
    showsScale: { type: Boolean, default: false },
    enableOverlooking: { type: Boolean, default: false },
    enableZoom: { type: Boolean, default: true },
    enableScroll: { type: Boolean, default: true },
    enableRotate: { type: Boolean, default: false },
    enableSatellite: { type: Boolean, default: false },
    enableTraffic: { type: Boolean, default: false },
    enablePoi: { type: Boolean, default: true },
    enableBuilding: { type: Boolean, default: true },
    setting: Object
  },
  mounted () {
    //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
    //设置地图中心点
    let myLatlng = new qq.maps.LatLng(this.latitude, this.longitude);
    // 定义工厂模式函数
    let myOptions = {
      zoom: this.scale,               //设置地图缩放级别
      center: myLatlng,      //设置中心点样式
      // mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
    }
    this.map = new qq.maps.Map(document.getElementById(this.onekitId), myOptions);
    this.map_tap()
  },
  methods: {
    map_tap () {
      //给地图添加点击事件
      //并获取鼠标点击的经纬度
      qq.maps.event.addListener(this.map, 'click', function (e) {
        this.lang = e.latLng.getLat();
        this.lat = e.latLng.getLng();
        console.log(this.lang, this.lat)
      });
      const data = {
        longitude: this.lang,
        latitude: this.lat
      }
      this.$emit('Tap', data)
    },
    //
    _trigger_markertap () {
      const data = {
      }
      this.$emit('MarkerTap', data)
    },
    _trigger_labeltap () {
      const data = {
      }
      this.$emit('LabelTap', data)
    },
    //
    _trigger_controltap () {
      const data = {
      }
      this.$emit('Controltap', data)
    },
    _trigger_CalloutTap () {
      const data = {
      }
      this.$emit('CalloutTap', data)
    },
    _trigger_updated () {
      const data = {
      }
      this.$emit('Updated', data)
    },
    _trigger_regionchange () {
      const data = {
      }
      this.$emit('RegionChange', data)
    },
    //
    _trigger_poitap () {
      const data = {
      }
      this.$emit('PoiTap', data)
    },
    _trigger_anchorpointtap () {
      const data = {
      }
      this.$emit('AnchorPointTap', data)
    },
  },
  computed: {

  },
}
</script>

<style>
.smnoprint, .csssprite{
  visibility:hidden;
}
</style>
