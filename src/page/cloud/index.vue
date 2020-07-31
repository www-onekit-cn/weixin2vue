<script>
const PAGE_JSON = {
	"navigationBarTitleText":"小程序云开发展示",
	"usingComponents":{}
}
</script>
<script>
import {OnekitApp,OnekitPage,OnekitComponent} from "../../onekit/onekit.js";
import wx from "../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序云开发展示',
            path:'page/cloud/index'
        };
    },
    data:{
        list:[
            {
                id:'user',
                name:'用户鉴权',
                open:false,
                pages:[
                    {
                        zh:'获取 OpenID',
                        url:'user-authentication/user-authentication'
                    }
                ]
            },
            {
                id:'database',
                name:'数据库',
                open:false,
                pages:[
                    {
                        zh:'基本操作',
                        url:'crud/crud'
                    },
                    {
                        zh:'权限管理',
                        url:'db-permission/db-permission'
                    },
                    {
                        zh:'服务端时间',
                        url:'server-date/server-date'
                    }
                ]
            },
            {
                id:'storage',
                name:'存储',
                open:false,
                pages:[
                    {
                        zh:'上传文件',
                        url:'upload-file/upload-file'
                    },
                    {
                        zh:'下载文件',
                        url:'download-file/download-file'
                    },
                    {
                        zh:'删除文件',
                        url:'delete-file/delete-file'
                    },
                    {
                        zh:'换取临时链接',
                        url:'get-temp-file-url/get-temp-file-url'
                    },
                    {
                        zh:'组件支持',
                        url:'cloud-file-component/cloud-file-component'
                    }
                ]
            },
            {
                id:'scf',
                name:'云函数',
                open:false,
                pages:[
                    {
                        zh:'WXContext',
                        url:'get-wx-context/get-wx-context'
                    },
                    {
                        zh:'数据库',
                        url:'scf-database/scf-database'
                    },
                    {
                        zh:'存储',
                        url:'scf-storage/scf-storage'
                    },
                    {
                        zh:'云调用',
                        url:'scf-openapi/scf-openapi'
                    }
                ]
            }
        ],
        theme:'light'
    },
    onLoad:function(){
        this.setData({
            theme:wx.getSystemInfoSync().theme || 'light'
        });
        if(wx.onThemeChange){
            wx.onThemeChange(({theme})=>{this.setData({
                theme:theme
            })});
        }
    },
    kindToggle:function(e){
        const id = e.currentTarget.id;
        const list = this.data.list;
        console.log(id,list);
        for(var i = 0,len = list.length;i < len;++i){
            if(list[i].id === id){
                if(list[i].url){
                    console.log(list[i].url);
                    wx.navigateTo({
                        url:'../../packageCloud/pages/' + list[i].url
                    });
                    return;
                }
                list[i].open = !list[i].open;
            } else {
                list[i].open = false;
            }
        };
        this.setData({
            list:list
        });
    }
});
</script>
<template>
<onekit-view class="index">
  <onekit-view class="index-hd">
    <onekit-image class="index-logo" src="resources/kind/logo.png"></onekit-image>
    <onekit-view class="index-desc">以下将演示小程序云开发能力，具体属性参数详见 <onekit-navigator url="../../packageAPI/pages/doc-web-view/doc-web-view" class="weui-agree__link">小程序开发文档</onekit-navigator>。</onekit-view>
  </onekit-view>
  <onekit-view class="index-bd">
    <onekit-view class="kind-list">
      <onekit-block v-for="(item,id) in list">
        <onekit-view class="kind-list-item">
          <onekit-view :id="item.id" :class="'kind-list-item-hd '+item.open ? "kind-list-item-hd-show" : """ @tap="kindToggle">
            <onekit-view class="kind-list-text">{{item.name}}</onekit-view>
            <onekit-image v-if="theme === 'dark'" class="kind-list-img" :src="'resources/kind/'+item.id+'_dark.png'"></onekit-image>
            <onekit-image v-else class="kind-list-img" :src="'resources/kind/'+item.id+'.png'"></onekit-image>
          </onekit-view>
          <onekit-view :class="'kind-list-item-bd '+item.open ? "kind-list-item-bd-show" : """>
            <onekit-view :class="'navigator-box '+item.open ? "navigator-box-show" : """>
              <onekit-block v-for="(page) in item.pages">
                <onekit-navigator :url="'../../packageCloud/pages/'+page.url" class="navigator">
                  <onekit-view class="navigator-text">{{page.zh}}</onekit-view>
                  <onekit-view class="navigator-arrow"></onekit-view>
                </onekit-navigator>
              </onekit-block>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>
</onekit-view></template>
<style scoped src="@/onekit/onekit.css"/><style>
@import "../common/index.css";

.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
</style>
