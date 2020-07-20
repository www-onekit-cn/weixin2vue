const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },

  setDisabled() {
    ONEKIT.setData({
      disabled: !ONEKIT.data.disabled
    })
  },

  setPlain() {
    ONEKIT.setData({
      plain: !ONEKIT.data.plain
    })
  },

  setLoading() {
    ONEKIT.setData({
      loading: !ONEKIT.data.loading
    })
  }
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        ONEKIT.data[key] === 'default' ? 'mini' : 'default'
      ONEKIT.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)
