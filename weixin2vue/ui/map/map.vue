<template>
  <div :class="['onekit-map',onekitClass]" :style="onekitStyle" :id="onekitId">
    <el-amap class="amap-box" vid="amap-vue" :center="center" :zoom="scale - 1" :events="events">
      <el-amap-circle v-for="m of tt_circles" :key="`${m}`" :center="m.center" :radius="m.radius" fill-opacity="0.2"
        strokeWeight="1">

      </el-amap-circle>
      <el-amap-polyline :path="tt_polyline.path">

      </el-amap-polyline>
      <el-amap-marker v-for="(m, i) in tt_position" :key="i" :position="m.position" :title="m.title" :events="m.events">
      </el-amap-marker>
    </el-amap>
    <slot></slot>
  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import Vue from 'vue'
  import VueMap from 'vue-amap'
  Vue.use(VueMap)
  VueMap.initAMapApiLoader({
    key: '0c805d60efe6c4e05d13b93e4e48a129',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
      'AMap.PolyEditor', 'AMap.CircleEditor'
    ]
  })
  const optionsAPI = {
    name: "onekit-map",
    mixins: [weixin_behavior, onekit_behavior],
    data() {
      const self = this
      return {
        events: {
          'click': e => {
            e['detail'] = {
              latitude: e.lnglat.lat,
              longitude: e.lnglat.lng
            }
            self.$emit('tap', e)
          }
        }
      }
    },
    props: {
      longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      scale: {
        type: Number,
        default: 16
      },
      markers: Array,
      circles: Array,
      'show-location': {
        type: Boolean,
        default: false
      },
      polyline: Array,
      'include-points': Array
    },
    mounted() {},
    computed: {
      center() {
        return [this.longitude, this.latitude]
      },
      tt_position() {
        let tt_position = []
        for (let key in this.markers) {
          const {
            longitude,
            latitude,
            title,
            id,
            iconPath
          } = this.markers[key]
          let obj = {}
          obj[`position`] = [longitude, latitude]
          obj[`title`] = title
          obj[`icon`] = iconPath
          obj['events'] = {
            click: e => {
              e['detail'] = {
                markerId: id,
                latitude: e.lnglat.lat,
                longitude: e.lnglat.lng
              }
              this.$emit('markertap', e)
            }
          }
          tt_position.push(obj)
        }
        return tt_position
      },
      tt_circles() {
        let tt_circles = []
        for (let key in this.circles) {
          const {
            longitude,
            latitude,
            radius
          } = this.circles[key]
          let obj = []
          obj['center'] = [longitude, latitude]
          obj['radius'] = radius
          tt_circles.push(obj)
        }
        return tt_circles
      },
      tt_polyline() {
        let polyline = {}
        for (let key in this.polyline) {
          const {
            points,
            color,
            width,
            dottedLine
          } = this.polyline[key]
          polyline['path'] = []
          for (let points_key in points) {
            const {
              longitude,
              latitude
            } = points[points_key]
            const path = [longitude, latitude]
            polyline['path'].push(path)
          }
          polyline['strokeColor'] = color
          polyline['strokeWeight'] = width
          dottedLine ? polyline['strokeStyle'] = 'dashed' : polyline['strokeStyle'] = 'solid'
        }
        return polyline
      }
    }
  }
  export default optionsAPI
</script>

<style>

</style>