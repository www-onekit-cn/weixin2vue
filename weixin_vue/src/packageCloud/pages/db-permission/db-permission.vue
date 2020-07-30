<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./db-permission.css"></style>
<script src="./db-permission.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body" v-if="openid">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_select">
          <onekit-view class="weui-cell__hd weui-cell__hd_in-select-after">
            <onekit-view class="weui-label">权限类型</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-picker @change="onPermissionChange" :value="currentPermissionIndex" :range="permissions">
              <onekit-view class="weui-select permission-select" weui-select_in-select-after>{{permissions[currentPermissionIndex]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-panel">
        <onekit-view class="weui-panel__bd">

          <onekit-block v-if="currentPermissionIndex === 0">
            <onekit-view class="weui-tab">
              <onekit-view class="weui-navbar">
                <onekit-block v-for="(item) in tabs[currentPermissionIndex]">
                  <onekit-view :id="index" :class="'weui-navbar__item '+activeTabIndex === index ? "weui-bar__item_on" : """ @tap="onTabClick">
                    <onekit-view class="weui-navbar__title">{{item}}</onekit-view>
                  </onekit-view>
                </onekit-block>
                <onekit-view class="weui-navbar__slider" :style="'left: '+sliderLeft+'px; transform: translateX('+sliderOffset+'px); -webkit-transform: translateX('+sliderOffset+'px);'"></onekit-view>
              </onekit-view>
              <onekit-view class="weui-tab__panel">
                <onekit-view class="weui-tab__content" :hidden="activeTabIndex !== 0">
                  <onekit-view class="weui-cells weui-cells_after-title input-area">
                    <onekit-view class="weui-cell weui-cell_input">
                      <onekit-view class="weui-cell__bd">
                        <onekit-input class="weui-input" placeholder="请输入个性签名" :value="myWhatsUp" :focus="!hasMyWhatsUp" data-name="myWhatsUp" @input="bindInput" @confirm="updateMyWhatsUp"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view class="btn-area">
                    <onekit-button type="primary" @tap="updateMyWhatsUp" :loading="updating">设置个性签名</onekit-button>
                    <onekit-button @tap="queryMyWhatsUp" :loading="querying">获取个性签名</onekit-button>
                  </onekit-view>
                </onekit-view>

                <onekit-view class="weui-tab__content" :hidden="activeTabIndex !== 1">
                  <onekit-view class="weui-cells weui-cells_after-title input-area">
                    <onekit-view class="weui-cell weui-cell_input">
                      <onekit-view class="weui-cell__bd">
                        <onekit-input class="weui-input" placeholder="请输入个性签名" :value="adminWhatsUp" data-name="adminWhatsUp" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view class="btn-area">
                    <onekit-button type="primary" @tap="updateAdminWhatsUp" :loading="updating">设置个性签名</onekit-button>
                    <onekit-button @tap="queryAdminWhatsUp" :loading="querying">获取个性签名</onekit-button>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 1">
            <onekit-view class="weui-tab">
              <onekit-view class="weui-navbar">
                <onekit-block v-for="(item) in tabs[currentPermissionIndex]">
                  <onekit-view :id="index" :class="'weui-navbar__item '+activeTabIndex === index ? "weui-bar__item_on" : """ @tap="onTabClick">
                    <onekit-view class="weui-navbar__title">{{item}}</onekit-view>
                  </onekit-view>
                </onekit-block>
                <onekit-view class="weui-navbar__slider" :style="'left: '+sliderLeft+'px; transform: translateX('+sliderOffset+'px); -webkit-transform: translateX('+sliderOffset+'px);'"></onekit-view>
              </onekit-view>
              <onekit-view class="weui-tab__panel">
                <onekit-view class="weui-tab__content" :hidden="activeTabIndex !== 0">
                  <onekit-view class="weui-cells weui-cells_after-title input-area">
                    <onekit-view class="weui-cell weui-cell_input">
                      <onekit-view class="weui-cell__bd">
                        <onekit-input class="weui-input" placeholder="请输入邮箱" :value="myEmail" data-name="myEmail" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view class="btn-area">
                    <onekit-button type="primary" @tap="updateMyEmail" :loading="updating">设置邮箱</onekit-button>
                    <onekit-button @tap="queryMyEmail" :loading="querying">获取邮箱</onekit-button>
                  </onekit-view>
                </onekit-view>

                <onekit-view class="weui-tab__content" :hidden="activeTabIndex !== 1">
                  <onekit-view class="weui-cells weui-cells_after-title input-area">
                    <onekit-view class="weui-cell weui-cell_input">
                      <onekit-view class="weui-cell__bd">
                        <onekit-input class="weui-input" placeholder="请输入邮箱" :value="adminEmail" data-name="adminEmail" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view class="btn-area">
                    <onekit-button type="primary" @tap="updateAdminEmail" :loading="updating">设置邮箱</onekit-button>
                    <onekit-button @tap="queryAdminEmail" :loading="querying">获取邮箱</onekit-button>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 2">
            <onekit-view>
              <onekit-view class="weui-cells weui-cells_after-title input-area">
                <onekit-view class="weui-cell weui-cell_input">
                  <onekit-view class="weui-cell__bd">
                    <onekit-input class="weui-input" placeholder="请输入商品价格" :value="product.price" data-name="product.price" @input="bindInput"></onekit-input>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view class="btn-area">
                <onekit-button type="primary" @tap="updateProductPrice" :loading="updating">设置商品价格</onekit-button>
                <onekit-button @tap="queryProduct" :loading="querying">获取商品价格</onekit-button>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 3">
            <onekit-view>
              <onekit-view class="weui-cells weui-cells_after-title input-area">
                <onekit-view class="weui-cell weui-cell_input">
                  <onekit-view class="weui-cell__bd">
                    <onekit-input class="weui-input" placeholder="请输入后台流水数据" :value="serverData" data-name="serverData" @input="bindInput"></onekit-input>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view class="btn-area">
                <onekit-button type="primary" @tap="updateServerData" :loading="updating">设置后台流水数据</onekit-button>
                <onekit-button @tap="queryServerData" :loading="querying">获取后台流水数据</onekit-button>
              </onekit-view>
            </onekit-view>
          </onekit-block>

        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>