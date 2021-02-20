<template>
  <div :class="['onekit-picker',onekitClass]" :style="onekitStyle" :id="onekitId">
    <div class="selector" v-if="mode === 'selector'">
      <selector :column="'1'" :data="data" />
      <slot></slot>
    </div>

    <div class="multiselector" v-if="mode === 'multiSelector' && this.childData">
      <multiselector :column="'3'" :data="data"></multiselector>
      <slot></slot>
    </div>

    <div class="timeselector" v-if="mode === 'time'">
      <timeComponent :column="'2'" :data="data"></timeComponent>
      <slot></slot>
    </div>

    <div class="dateselector" v-if="mode === 'date'">
      <dateComponent :column="'3'" :data="data"></dateComponent>
      <slot></slot>
    </div>

    <div class="regionselector" v-if="mode === 'region'">
      <region :column="'3'" :data="data"></region>
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import weixin_behavior from "../../behaviors/weixin_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  import selector from './_/selector-picker/selector'
  import region from './_/region-picker/region'
  import multiselector from './_/mutiselector-picker/multiselector'
  import city_list from './_/region-picker/city-data.json'
  import timeComponent from './_/time-picker/time'
  import dateComponent from './_/date-picker/date'
  import {
    eventBus
  } from '../../eventBus'
  export default {
    name: "onekit-picker",
    data() {
      return {
        data: '',
        reldata: [],
        childData: true,
        newRange: []
      }
    },
    mixins: [weixin_behavior, onekit_behavior],
    props: {
      mode: {
        type: String,
        default: 'selector',
      },
      disabled: {
        type: Boolean,
        default: false
      },
      range: Array,
      value: {
        // type: Number || Array,
        default: 0
      },
      start: String,
      end: String
    },
    components: {
      selector,
      region,
      multiselector,
      timeComponent,
      dateComponent
    },
    created() {

    },
    mounted() {
      eventBus['disabled'] = this.disabled
      if (this.mode === 'region') {
        this.data = city_list
      } else if (this.mode === 'time') {
        let endStr
        if (this.end) {
          endStr = this.end.split(':')[0]
        } else {
          endStr = 24
        }
        let startStr
        if (this.start) {
          startStr = this.start.split(':')[0]
        } else {
          startStr = 0
        }
        let time_lists = []
        for (let i = startStr; i <= endStr; i++) {
          let time_listHouers = {}
          time_listHouers['time'] = i
          time_listHouers['children'] = []
          for (let j = 1; j <= 60; j++) {
            let time_listSecond = {}
            time_listSecond['time'] = j
            time_listHouers['children'].push(time_listSecond)
          }
          time_lists.push(time_listHouers)
        }


        this.data = time_lists
      } else if (this.mode === 'date') {
        let date_lists = []
        let startYear, endYear
        if (this.start && this.end) {
          startYear = this.start.split('-')[0]
          endYear = this.end.split('-')[0]
        } else {
          startYear = 0
          endYear = 0
        }
        for (let i = startYear; i <= endYear; i++) {
          let date_listsYears = {}
          date_listsYears['date'] = i
          date_listsYears['children'] = []
          date_lists.push(date_listsYears)
          for (let m = 1; m <= 12; m++) {
            let date_listsMonths = {}
            date_listsMonths['date'] = m
            date_listsMonths['children'] = []
            date_listsYears['children'].push(date_listsMonths)


            for (let d = 1; d <= 31; d++) {
              let date_listsDays = {}
              date_listsDays['date'] = d
              date_listsMonths['children'].push(date_listsDays)
            }
          }
        }
        this.data = date_lists
      } else {
        this.data = this.range
      }
      eventBus.$on('picker-cancel', () => {
        this.$emit('Cancel')
      })
      switch (this.mode) {
        case 'selector':
          eventBus.$on('onekit-picker-change-done', data => {
            eventBus.$emit('onekit-picker-submit', data)
            this.$emit('Change', data)
          })
          break
        case 'region':
          eventBus.$on('onekit-region-picker-change-done', data => {
            eventBus.$emit('onekit-picker-submit', data)
            this.$emit('Change', data)
          })
          break
        case 'multiSelector':
          eventBus.$on('onekit-mutiPicker-changeend', data => {
            this.newRange = this.range
            eventBus.$emit('mutirangeChange', this.newRange)
            eventBus.$emit('onekit-picker-submit', data)
            this.$emit('Columnchange', data)
          })
          break
        case 'time':
          eventBus.$on('onekit-time-picker-change-done', data => {
            eventBus.$emit('onekit-picker-submit', data)
            this.$emit('Change', data)
          })
          break
        case 'date':
          eventBus.$on('onekit-date-picker-change-done', data => {
            eventBus.$emit('onekit-picker-submit', data)
            this.$emit('Change', data)
          })
          break
        default:
          return
      }

    }
  }
</script>

<style>

</style>