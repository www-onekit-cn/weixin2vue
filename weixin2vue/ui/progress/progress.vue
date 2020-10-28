<template>
  <div class="weui_progress">
    <div class="weui_progress_bar"
         :style="{height: strokeWidth + 'px',
                  background: backgroudColor}">
      <div class="weui_progress_inner_bar"
           :style="{width: percent + '%',
                    borderRadius: borderRadius + 'px',
                    height: strokeWidth + 'px',
                    background: bgcolor}"
           @click="ui_click(activeColor)">
      </div>
    </div>
    <a class="onekit_progress-count"
       v-if="showInfo"
       href="javascript:;"
       :style="{fontSize : fontSize + 'px'}"
       >
    {{ percent }}%
    </a>
    <a v-if="hasCancelButton" href="javascript:;" class="weui_progress_opr" @click="callEvent('weui-progress-cancel')">
    <i class="weui_icon_cancel"></i>
  </a>
  </div>
</template>

<script>
  export default {
    name: "onekit-progress",
    data() {
      return {
        bgcolor: this.color,
        bgActiveColor: this.activeColor
      }
    },
    props: {
      'percent': {
        type: [Number, String],
        required: true,
        validator(value) {
          return value >= 0 && value <= 100;
        },
        default: 0
      },
      'showInfo': {
        type: Boolean,
        default: false,
        requred: false,
      },
      'borderRadius': {
        type: [Number, String],
        required: false,
        validator(value) {
          return value >= 0 && value <= 100
        }
      },
      'fontSize': {
        type: [Number, String],
        default: 16,
        required: false,
      },
      'strokeWidth': {
        type: [Number, String],
        default: 6,
        required: false,
      },
      'color': {
        type: [String],
        default: '#09BB07',
        required: false
      },
      'activeColor': {
        type: String,
        default: '#09BB07',
        required: false
      },
      'backgroudColor': {
        type: String,
        default: '#EBEBEB',
        required: false
      },
      'active': {
        type: Boolean,
        default: false,
        required: false
      },
      'active-mode': {
        type: String,
        // default: backwards,
        required: false,
      },
      'duration': {
        type: Number,
        default: 30,
        required: false
      },
      'bindactiveend': {
        // type: eventhandle,
        required: false
      },
      hasCancelButton: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    methods: {
      callEvent(event) {
        this.$emit(event);
      },
      ui_click(active) {
        this.bgcolor = this.activeColor
      }
    }
  }
</script>

<style scpoed>
  .onekit_progress-count {
    color: #000;
    font-weight: bolder;
    padding: 0px 4px;
  }
</style>