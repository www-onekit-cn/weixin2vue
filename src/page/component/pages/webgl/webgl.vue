<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"webgl"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <template v-if="canIUse">
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="page-body-wrapper">
              <onekit-canvas onekit-class="canvas"
                             type="webgl"
                             onekit-id="canvasWebGL"></onekit-canvas>
            </onekit-view>
          </onekit-view>
        </template>
        <onekit-view v-else
                     onekit-style="margin: 15px; text-align:center">
          微信版本过低，暂不支持本功能
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
  "navigationBarTitleText": "webgl",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
import { compareVersion } from "../../../../util/util"
const vs = `
  precision mediump float;

  attribute vec2 vertPosition;
  attribute vec3 vertColor;
  varying vec3 fragColor;

  void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
    fragColor = vertColor;
  }
`
const fs = `
  precision mediump float;

  varying vec3 fragColor;
  void main() {
    gl_FragColor = vec4(fragColor, 1.0);
  }
`
const triangleVertices = [
  0.0,
  0.5,
  1.0,
  1.0,
  0.0,
  -0.5,
  -0.5,
  0.7,
  0.0,
  1.0,
  0.5,
  -0.5,
  0.1,
  1.0,
  0.6
]
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'canvas',
      path: 'page/component/pages/webgl/webgl'
    }
  },
  data: {
    canIUse: true
  },
  onReady: function () {
    const { SDKVersion } = wx.getSystemInfoSync()
    if (compareVersion(SDKVersion, '2.7.0') < 0) {
      console.log('123');
      this.setData({
        canIUse: false
      });
    } else {
      wx.createSelectorQuery().select('#canvasWebGL').node().exec((res) => {
        const canvas = res[0].node
        this.renderWebGL(canvas)
      });
    }
  },
  renderWebGL: function (canvas) {
    if (!canvas) {
      this.setData({
        canIUse: false
      });
      return;
    }
    const gl = canvas.getContext('webgl')
    if (!gl) {
      console.error('gl init failed', gl);
      return;
    }
    gl.viewport(0, 0, 305, 305)
    const vertShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertShader, vs)
    gl.compileShader(vertShader)
    const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragShader, fs)
    gl.compileShader(fragShader)
    const prog = gl.createProgram()
    gl.attachShader(prog, vertShader)
    gl.attachShader(prog, fragShader)
    gl.deleteShader(vertShader)
    gl.deleteShader(fragShader)
    gl.linkProgram(prog)
    gl.useProgram(prog)
    const draw = () => {
      const triangleVertexBufferObject = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW)
      const positionAttribLocation = gl.getAttribLocation(prog, 'vertPosition')
      const colorAttribLocation = gl.getAttribLocation(prog, 'vertColor')
      gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0)
      gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT)
      gl.enableVertexAttribArray(positionAttribLocation)
      gl.enableVertexAttribArray(colorAttribLocation)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      canvas.requestAnimationFrame(draw)
    }
    canvas.requestAnimationFrame(draw)
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common//lib/weui.css";
.canvas {
  width: 305px;
  height: 305px;
  background-color: var(--weui-BG-1);
  margin-top: 30px;
}
</style>
