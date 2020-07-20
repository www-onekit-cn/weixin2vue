


<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-button @tap="setTabBarBadge">
        {{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
      </onekit-button>
      <onekit-button @tap="showTabBarRedDot">
        {{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}
      </onekit-button>
      <onekit-button @tap="customStyle">
        {{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}
      </onekit-button>
      <onekit-button @tap="customItem">
        {{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
      </onekit-button>
      <onekit-button @tap="hideTabBar">
        {{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
      </onekit-button>
    </onekit-view>

    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="navigateBack">返回上一级</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>