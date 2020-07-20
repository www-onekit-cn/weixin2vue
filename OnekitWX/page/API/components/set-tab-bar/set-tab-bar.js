const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
}

const defaultItemName = '接口'

Component({
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false,
  },

  attached() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  detached() {
    ONEKIT.removeTabBarBadge()
    ONEKIT.hideTabBarRedDot()
    ONEKIT.showTabBar()
    ONEKIT.removeCustomStyle()
    ONEKIT.removeCustomItem()
  },

  methods: {
    navigateBack() {
      ONEKIT.triggerEvent('unmount')
    },

    setTabBarBadge() {
      if (ONEKIT.data.hasSetTabBarBadge) {
        ONEKIT.removeTabBarBadge()
        return
      }
      ONEKIT.setData({
        hasSetTabBarBadge: true
      })
      wx.setTabBarBadge({
        index: 1,
        text: '1',
      })
    },

    removeTabBarBadge() {
      ONEKIT.setData({
        hasSetTabBarBadge: false
      })
      wx.removeTabBarBadge({
        index: 1,
      })
    },

    showTabBarRedDot() {
      if (ONEKIT.data.hasShownTabBarRedDot) {
        ONEKIT.hideTabBarRedDot()
        return
      }
      ONEKIT.setData({
        hasShownTabBarRedDot: true
      })
      wx.showTabBarRedDot({
        index: 1
      })
    },

    hideTabBarRedDot() {
      ONEKIT.setData({
        hasShownTabBarRedDot: false
      })
      wx.hideTabBarRedDot({
        index: 1
      })
    },

    showTabBar() {
      ONEKIT.setData({hasHiddenTabBar: false})
      wx.showTabBar()
    },

    hideTabBar() {
      if (ONEKIT.data.hasHiddenTabBar) {
        ONEKIT.showTabBar()
        return
      }
      ONEKIT.setData({hasHiddenTabBar: true})
      wx.hideTabBar()
    },

    customStyle() {
      if (ONEKIT.data.hasCustomedStyle) {
        ONEKIT.removeCustomStyle()
        return
      }
      ONEKIT.setData({hasCustomedStyle: true})
      wx.setTabBarStyle({
        color: '#FFF',
        selectedColor: '#1AAD19',
        backgroundColor: '#000000',
      })
    },

    removeCustomStyle() {
      ONEKIT.setData({hasCustomedStyle: false})
      wx.setTabBarStyle(defaultTabBarStyle)
    },

    customItem() {
      if (ONEKIT.data.hasCustomedItem) {
        ONEKIT.removeCustomItem()
        return
      }
      ONEKIT.setData({hasCustomedItem: true})
      wx.setTabBarItem({
        index: 1,
        text: 'API'
      })
    },

    removeCustomItem() {
      ONEKIT.setData({hasCustomedItem: false})
      wx.setTabBarItem({
        index: 1,
        text: defaultItemName
      })
    }
  }
})
