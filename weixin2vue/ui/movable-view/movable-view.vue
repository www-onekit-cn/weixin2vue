<template>
  <div :class="['onekit-movable-view',onekitClass]"
       :style="onekitStyle"
       :id="onekitId"
       @mousedown="movableView_change"
       @mousemove="_mousemove">
    <slot></slot>
  </div>
</template>

<script>
import weixin_behavior from "../../behaviors/weixin_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
export default {
  name: "onekit-movable-view",
  mixins: [weixin_behavior, onekit_behavior],
  data () {
    return {
      defaults: {
        edge: true
      },
      params: {},
      options: {},
      distanceX: 0,
      distanceY: 0,
      win: window,
      winWidth: 0,
      winHeight: 0,
      /*options || {}*/
      positionX: this.x,
      positionY: this.y,
    }
  },
  props: {
    direction: {
      type: String,
      default: 'none'
    },
    intertia: {
      type: Boolean,
      default: false
    },
    'out-of-bounds': {
      type: Boolean,
      default: false
    },
    x: Number,
    y: Number,
    damping: {
      type: Number,
      default: 20
    },
    friction: {
      type: Number,
      default: 2
    },
    disabled: Boolean,
    scale: Boolean,
    'scale-min': {
      type: Number,
      default: 0.5
    },
    'scale-max': {
      type: Number,
      default: 10
    },
    'scale-value': {
      type: Number,
      default: 1
    },
    animation: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    movableView_change (e) {
      let el = e.target;        //获取目标元素
      //算出鼠标相对元素的位置
      let disX = e.clientX - el.offsetLeft;
      let disY = e.clientY - el.offsetTop;
      document.onmousemove = (e) => {       //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        /*****  临界值 starting（此区域代码可注释）  ***/
        // 获取父元素 自元素 的宽高
        // let {
        //   offsetHeight: parentNodeHeight,
        //   offsetWidth: parentNodeWidth,
        // } = this.$refs.parentNode;
        // let {
        //   offsetHeight: sonNodeHeight,
        //   offsetWidth: sonNodeWidth,
        // } = this.$refs.sonNode;

        // // 左上角(left)
        // if (left < 0) {
        //   left = 0;
        // }
        // if (top < 0) {
        //   top = 0;
        // }
        // // 左下角
        // if (top > parentNodeHeight - sonNodeHeight) {
        //   top = parentNodeHeight - sonNodeHeight;
        // }
        // if (left > parentNodeWidth - sonNodeWidth) {
        //   left = parentNodeWidth - sonNodeWidth;
        // }
        /*****  临界值 ending  ***/

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        //移动当前元素
        el.style.left = left + 'px';
        el.style.top = top + 'px';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
      const data = {

      }
      this.$emit('Change', data)
    },
    _mousemove () {
      const data = {

      }
      this.$emit('Touchmove', data)
    }
  },
  created () {
    this.winWidth = window.innerWidth
    this.winHeight = window.innerHeight
    for (const key in this.defaults) {
      if (typeof this.options[key] !== 'undefined') {
        this.params[key] = this.options[key]
      } else {
        this.params[key] = this.defaults[key]
      }
    }
  }
}
</script>
