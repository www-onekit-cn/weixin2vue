<template>
  <div :class="['onekit-map',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       @click="map_tap">

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
  mounted () { },
  methods:{
    map_tap(){
      const data = {
        longitude:this.longitude,
        latitude: this.latitude
      }
      this.$emit('Tap', data)
    },
    //
    _trigger_markertap() {
      const data = {
      }
      this.$emit('MarkerTap', data)
    },
    _trigger_labeltap() {
      const data = {
      }
      this.$emit('LabelTap', data)
    },
    //
    _trigger_controltap() {
      const data = {
      }
      this.$emit('Controltap', data)
    },
    _trigger_CalloutTap() {
      const data = {
      }
      this.$emit('CalloutTap', data)
    },
    _trigger_updated() {
      const data = {
      }
      this.$emit('Updated', data)
    },
    _trigger_regionchange() {
      const data = {
      }
      this.$emit('RegionChange', data)
    },
    //
    _trigger_poitap() {
      const data = {
      }
      this.$emit('PoiTap', data)
    },
    _trigger_anchorpointtap() {
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
</style>
