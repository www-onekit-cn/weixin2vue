
<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"camera"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-wrapper">
          <onekit-view onekit-style="margin-bottom: 10px"> camera 组件 </onekit-view>
          <onekit-camera flash="off"
                         :device-position="position"
                         @Error="error">
          </onekit-camera>
          <onekit-view v-if="showCanvas"
                       onekit-class="info-container">
            <onekit-view onekit-style="margin: 10px 0">使用实时数据帧在 canvas 组件的展示</onekit-view>
            <onekit-view>
              帧高度：{{ frameHeight }} 帧宽度：{{ frameWidth }}
            </onekit-view>
            <onekit-canvas onekit-id="webgl"
                           type="webgl"
                           canvas-id="canvas"
                           :onekit-style="'width: '+(width)+'px; height: '+(height)+'px;'">
            </onekit-canvas>
          </onekit-view>
          <onekit-view onekit-class="btn-area first-btn">
            <onekit-button @Tap="handleShowCanvas"
                           type="primary">{{showCanvas ? "关闭实时帧数据模式": "开启实时帧数据模式"}}</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="togglePosition">切换摄像头</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="takePhoto">拍照</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="startRecord">开始录像</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="stopRecord">结束录像</onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-navigator url="/page/component/pages/camera-scan-code/camera-scan-code"
                              hover-class="none">
              <onekit-button type="primary">扫描一维码</onekit-button>
            </onekit-navigator>
          </onekit-view>
          <onekit-view onekit-class="preview-tips">点击录像或拍照即可在下方预览效果</onekit-view>
          <onekit-image v-if="src"
                        mode="widthFix"
                        onekit-class="photo"
                        :src="src"></onekit-image>
          <onekit-video v-if="videoSrc"
                        onekit-class="video"
                        :src="videoSrc"></onekit-video>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "camera",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const vs = `
  attribute vec3 aPos;
  attribute vec2 aVertexTextureCoord;
  varying highp vec2 vTextureCoord;

  void main(void){
    gl_Position = vec4(aPos, 1);
    vTextureCoord = aVertexTextureCoord;
  }
`
const fs = `
  varying highp vec2 vTextureCoord;
  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`
const vertex = [
  -1,
  -1,
  0.0,
  1,
  -1,
  0.0,
  1,
  1,
  0.0,
  -1,
  1,
  0.0
]
const vertexIndice = [
  0,
  1,
  2,
  0,
  2,
  3
]
const texCoords = [
  0.0,
  0.0,
  1.0,
  0.0,
  1.0,
  1.0,
  0.0,
  1.0
]
function createShader (gl, src, type) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Error compiling shader: ' + gl.getShaderInfoLog(shader));
  }
  return shader
}
const buffers = {}
function createRenderer (canvas, width, height) {
  const gl = canvas.getContext("webgl")
  if (!gl) {
    console.error('Unable to get webgl context.');
    return;
  }
  const info = wx.getSystemInfoSync()
  gl.canvas.width = info.pixelRatio * width
  gl.canvas.height = info.pixelRatio * height
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
  const vertexShader = createShader(gl, vs, gl.VERTEX_SHADER)
  const fragmentShader = createShader(gl, fs, gl.FRAGMENT_SHADER)
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program.');
    return;
  }
  gl.useProgram(program)
  const texture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE0)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.bindTexture(gl.TEXTURE_2D, null)
  buffers.vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)
  buffers.vertexIndiceBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.vertexIndiceBuffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndice), gl.STATIC_DRAW)
  const aVertexPosition = gl.getAttribLocation(program, 'aPos')
  gl.vertexAttribPointer(aVertexPosition, 3, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(aVertexPosition)
  buffers.trianglesTexCoordBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.trianglesTexCoordBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW)
  const vertexTexCoordAttribute = gl.getAttribLocation(program, "aVertexTextureCoord")
  gl.enableVertexAttribArray(vertexTexCoordAttribute)
  gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0)
  const samplerUniform = gl.getUniformLocation(program, 'uSampler')
  gl.uniform1i(samplerUniform, 0)
  return (arrayBuffer, width, height) => {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, arrayBuffer)
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
  }
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'camera',
      path: 'page/component/pages/camera/camera'
    }
  },
  data: {
    src: '',
    videoSrc: '',
    position: 'back',
    mode: 'scanCode',
    result: {},
    frameWidth: 0,
    frameHeight: 0,
    width: 288,
    height: 358,
    showCanvas: false
  },
  onReady: function () {
    this.ctx = wx.createCameraContext()
  },
  init: function (res) {
    if (this.listener) {
      this.listener.stop();
    }
    const canvas = res.node
    const render = createRenderer(canvas, this.data.width, this.data.height)
    this.listener = this.ctx.onCameraFrame((frame) => {
      render(new Uint8Array(frame.data), frame.width, frame.height)
      const { frameWidth, frameHeight } = this.data
      if (((frameWidth == frame.width) && (frameHeight == frame.height))) return
      this.setData({
        frameWidth: frame.width,
        frameHeight: frame.height
      })
    })
    this.listener.start()
  },
  takePhoto: function () {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord: function () {
    this.ctx.startRecord({
      success: () => { console.log('startRecord') }
    })
  },
  stopRecord: function () {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  togglePosition: function () {
    this.setData({
      position: this.data.position == 'front' ? 'back' : 'front'
    })
  },
  error: function (e) {
    console.log(e.detail)
  },
  handleShowCanvas: function () {
    const that = this
    this.setData({
      showCanvas: !this.data.showCanvas
    }, () => {
      if (this.data.showCanvas) {
        const selector = wx.createSelectorQuery();
        selector.select('#webgl').node(this.init).exec();
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-camera {
  height: 250px;
}
.preview-tips {
  margin: 10px 0;
}
.photo,
.video {
  margin-top: 25px;
  width: 100%;
}
.btn-area {
  margin-top: 0;
}
.first-btn {
  margin-top: 15px;
}
form {
  margin-top: 15px;
}
.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
.info-container {
  margin: 12px;
  text-align: center;
}
</style>
