<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="container"
                 :onekit-style="'height:'+(editorHeight)+'px;'">
      <onekit-editor onekit-id="editor"
                     onekit-class="ql-container"
                     :placeholder="placeholder"
                     @Statuschange="onStatusChange"
                     @Ready="onEditorReady">
      </onekit-editor>
    </onekit-view>

    <onekit-view onekit-class="toolbar"
                 @Touchend.stop="format"
                 :hidden="false"
                 :onekit-style="'bottom: '+(isIOS ? keyboardHeight : 0)+'px; height: '+(toolBarHeight)+'px; padding-bottom: '+(isIOS ? safeHeight : 0)+'px'">
      <onekit-i class="iconfont icon-charutupian"
                @touchend.stop="insertImage"></onekit-i>
      <onekit-i :class="'iconfont icon-format-header-2 '+(formats.header === 2 ? 'ql-active' : '')"
                data-name="header"
                :data-value="2"></onekit-i>
      <onekit-i :class="'iconfont icon-format-header-3 '+(formats.header === 3 ? 'ql-active' : '')"
                data-name="header"
                :data-value="3"></onekit-i>
      <onekit-i :class="'iconfont icon-zitijiacu '+(formats.bold ? 'ql-active' : '')"
                data-name="bold"></onekit-i>
      <onekit-i :class="'iconfont icon-zitixieti '+(formats.italic ? 'ql-active' : '')"
                data-name="italic"></onekit-i>
      <onekit-i :class="'iconfont icon-zitixiahuaxian '+(formats.underline ? 'ql-active' : '')"
                data-name="underline"></onekit-i>
      <onekit-i class="iconfont icon--checklist"
                data-name="list"
                data-value="check"></onekit-i>
      <onekit-i :class="'iconfont icon-youxupailie '+(formats.list === 'ordered' ? 'ql-active' : '')"
                data-name="list"
                data-value="ordered"></onekit-i>
      <onekit-i :class="'iconfont icon-wuxupailie '+(formats.list === 'bullet' ? 'ql-active' : '')"
                data-name="list"
                data-value="bullet"></onekit-i>
    </onekit-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "navigationBarTitleText": "editor",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'editor',
      path: 'page/component/pages/editor/editor'
    }
  },
  data: {
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    editorHeight: 300,
    keyboardHeight: 0,
    isIOS: false,
    safeHeight: 0,
    toolBarHeight: 50
  },
  readOnlyChange: function () {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onLoad: function () {
    const { platform, safeArea, screenHeight } = wx.getSystemInfoSync()
    var safeHeight
    if (safeArea) {
      safeHeight = screenHeight - safeArea.bottom;
    } else {
      safeHeight = 32;
    }
    this._safeHeight = safeHeight
    var isIOS = platform == 'ios'
    this.setData({
      isIOS,
      safeHeight,
      toolBarHeight: isIOS ? safeHeight + 50 : 50
    })
    const that = this
    this.updatePosition(0)
    var keyboardHeight = 0
    wx.onKeyboardHeightChange((res) => {
      if (res.height == keyboardHeight) {
        return;
      }
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success: function () {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)
    })
  },
  updatePosition: function (keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight } = wx.getSystemInfoSync()
    var editorHeight = keyboardHeight > 0 ? ((windowHeight - keyboardHeight)) - toolbarHeight : windowHeight
    if (keyboardHeight == 0) {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: this.data.isIOS ? 50 + this._safeHeight : 50,
        safeHeight: this._safeHeight
      });
    } else {
      this.setData({
        editorHeight,
        keyboardHeight,
        toolBarHeight: 50,
        safeHeight: 0
      });
    }
  },
  calNavigationBarAndStatusBar: function () {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform == 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady: function () {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur: function () {
    this.editorCtx.blur()
  },
  format: function (e) {
    var { name, value } = e.target.dataset
    if (!name) return
    this.editorCtx.format(name, value)
  },
  onStatusChange: function (e) {
    const formats = e.detail
    this.setData({
      formats
    })
  },
  insertDivider: function () {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear: function () {
    this.editorCtx.clear({
      success: function () {
        console.log("clear success")
      }
    })
  },
  removeFormat: function () {
    this.editorCtx.removeFormat()
  },
  insertDate: function () {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage: function () {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "./assets/iconfont.css";
.onekit-page > view {
  max-width: 100%;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.ql-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  overflow: auto;
  padding: 10px 10px 20px 10px;
  border: 1px solid #ececec;
}
.ql-active {
  color: #22c704;
}
.iconfont {
  display: inline-block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
}
.toolbar {
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ececec;
  border-left: none;
  border-right: none;
}
</style>
