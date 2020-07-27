<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./db-permission.css"></style>
<script src="./db-permission.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body" v-if="openid">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_select">
          <onekit-view Class="weui-cell__hd weui-cell__hd_in-select-after">
            <onekit-view Class="weui-label">权限类型</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-picker @change="onPermissionChange" :value="{{currentPermissionIndex}}" :range="{{permissions}}">
              <onekit-view Class="weui-select permission-select" weui-select_in-select-after>{{permissions[currentPermissionIndex]}}</onekit-view>
            </onekit-picker>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-panel">
        <onekit-view Class="weui-panel__bd">

          <onekit-block v-if="currentPermissionIndex === 0">
            <onekit-view Class="weui-tab">
              <onekit-view Class="weui-navbar">
                <onekit-block v-for="(item) in tabs[currentPermissionIndex]">
                  <onekit-view :id="{{index}}" :Class="weui-navbar__item {{activeTabIndex === index ? 'weui-bar__item_on' : ''}}" @tap="onTabClick">
                    <onekit-view Class="weui-navbar__title">{{item}}</onekit-view>
                  </onekit-view>
                </onekit-block>
                <onekit-view Class="weui-navbar__slider" :Style="left: {{sliderLeft}}px; transform: translateX({{sliderOffset}}px); -webkit-transform: translateX({{sliderOffset}}px);"></onekit-view>
              </onekit-view>
              <onekit-view Class="weui-tab__panel">
                <onekit-view Class="weui-tab__content" :hidden="{{activeTabIndex !== 0}}">
                  <onekit-view Class="weui-cells weui-cells_after-title input-area">
                    <onekit-view Class="weui-cell weui-cell_input">
                      <onekit-view Class="weui-cell__bd">
                        <onekit-input Class="weui-input" placeholder="请输入个性签名" :value="{{myWhatsUp}}" :focus="{{!hasMyWhatsUp}}" data-name="myWhatsUp" @input="bindInput" @confirm="updateMyWhatsUp"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view Class="btn-area">
                    <onekit-button type="primary" @tap="updateMyWhatsUp" :loading="{{updating}}">设置个性签名</onekit-button>
                    <onekit-button @tap="queryMyWhatsUp" :loading="{{querying}}">获取个性签名</onekit-button>
                  </onekit-view>
                </onekit-view>

                <onekit-view Class="weui-tab__content" :hidden="{{activeTabIndex !== 1}}">
                  <onekit-view Class="weui-cells weui-cells_after-title input-area">
                    <onekit-view Class="weui-cell weui-cell_input">
                      <onekit-view Class="weui-cell__bd">
                        <onekit-input Class="weui-input" placeholder="请输入个性签名" :value="{{adminWhatsUp}}" data-name="adminWhatsUp" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view Class="btn-area">
                    <onekit-button type="primary" @tap="updateAdminWhatsUp" :loading="{{updating}}">设置个性签名</onekit-button>
                    <onekit-button @tap="queryAdminWhatsUp" :loading="{{querying}}">获取个性签名</onekit-button>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 1">
            <onekit-view Class="weui-tab">
              <onekit-view Class="weui-navbar">
                <onekit-block v-for="(item) in tabs[currentPermissionIndex]">
                  <onekit-view :id="{{index}}" :Class="weui-navbar__item {{activeTabIndex === index ? 'weui-bar__item_on' : ''}}" @tap="onTabClick">
                    <onekit-view Class="weui-navbar__title">{{item}}</onekit-view>
                  </onekit-view>
                </onekit-block>
                <onekit-view Class="weui-navbar__slider" :Style="left: {{sliderLeft}}px; transform: translateX({{sliderOffset}}px); -webkit-transform: translateX({{sliderOffset}}px);"></onekit-view>
              </onekit-view>
              <onekit-view Class="weui-tab__panel">
                <onekit-view Class="weui-tab__content" :hidden="{{activeTabIndex !== 0}}">
                  <onekit-view Class="weui-cells weui-cells_after-title input-area">
                    <onekit-view Class="weui-cell weui-cell_input">
                      <onekit-view Class="weui-cell__bd">
                        <onekit-input Class="weui-input" placeholder="请输入邮箱" :value="{{myEmail}}" data-name="myEmail" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view Class="btn-area">
                    <onekit-button type="primary" @tap="updateMyEmail" :loading="{{updating}}">设置邮箱</onekit-button>
                    <onekit-button @tap="queryMyEmail" :loading="{{querying}}">获取邮箱</onekit-button>
                  </onekit-view>
                </onekit-view>

                <onekit-view Class="weui-tab__content" :hidden="{{activeTabIndex !== 1}}">
                  <onekit-view Class="weui-cells weui-cells_after-title input-area">
                    <onekit-view Class="weui-cell weui-cell_input">
                      <onekit-view Class="weui-cell__bd">
                        <onekit-input Class="weui-input" placeholder="请输入邮箱" :value="{{adminEmail}}" data-name="adminEmail" @input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view Class="btn-area">
                    <onekit-button type="primary" @tap="updateAdminEmail" :loading="{{updating}}">设置邮箱</onekit-button>
                    <onekit-button @tap="queryAdminEmail" :loading="{{querying}}">获取邮箱</onekit-button>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 2">
            <onekit-view>
              <onekit-view Class="weui-cells weui-cells_after-title input-area">
                <onekit-view Class="weui-cell weui-cell_input">
                  <onekit-view Class="weui-cell__bd">
                    <onekit-input Class="weui-input" placeholder="请输入商品价格" :value="{{product.price}}" data-name="product.price" @input="bindInput"></onekit-input>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view Class="btn-area">
                <onekit-button type="primary" @tap="updateProductPrice" :loading="{{updating}}">设置商品价格</onekit-button>
                <onekit-button @tap="queryProduct" :loading="{{querying}}">获取商品价格</onekit-button>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-elif="currentPermissionIndex === 3">
            <onekit-view>
              <onekit-view Class="weui-cells weui-cells_after-title input-area">
                <onekit-view Class="weui-cell weui-cell_input">
                  <onekit-view Class="weui-cell__bd">
                    <onekit-input Class="weui-input" placeholder="请输入后台流水数据" :value="{{serverData}}" data-name="serverData" @input="bindInput"></onekit-input>
                  </onekit-view>
                </onekit-view>
              </onekit-view>

              <onekit-view Class="btn-area">
                <onekit-button type="primary" @tap="updateServerData" :loading="{{updating}}">设置后台流水数据</onekit-button>
                <onekit-button @tap="queryServerData" :loading="{{querying}}">获取后台流水数据</onekit-button>
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