(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84ae0254"],{"102a":function(e,t,r){},"159b":function(e,t,r){var a=r("da84"),o=r("fdbc"),n=r("17c2"),i=r("9112");for(var c in o){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==n)try{i(u,"forEach",n)}catch(d){u.forEach=n}}},"17c2":function(e,t,r){"use strict";var a=r("b727").forEach,o=r("a640"),n=r("ae40"),i=o("forEach"),c=n("forEach");e.exports=i&&c?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,r){"use strict";var a=r("23e7"),o=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"5fc3":function(e,t,r){},"6c84":function(e,t,r){"use strict";var a=r("102a"),o=r.n(a);o.a},8195:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("onekit-page",[r("import",{attrs:{src:"../../../../common/head.vue"}}),r("import",{attrs:{src:"../../../../common/foot.vue"}}),r("onekit-view",{staticClass:"container"},[r("onekit-view",{staticClass:"page-body",staticStyle:{display:"flex","flex-direction":"column"}},[r("onekit-text",{staticStyle:{"text-align":"center",margin:"16px"}},[e._v("当前 serverId "+e._s(e.serverId))]),r("onekit-view",{staticClass:"action-area"},[r("onekit-button",{attrs:{type:"primary"},on:{tap:e.openBluetoothAdapter}},[e._v("创建server")]),r("onekit-button",{attrs:{type:"primary"},on:{tap:e.closeServer}},[e._v("关闭server")])],1),r("onekit-view",{staticClass:"action-area"},[r("onekit-button",{attrs:{type:"primary"},on:{tap:e.addService}},[e._v("创建服务")]),r("onekit-button",{attrs:{type:"primary"},on:{tap:e.removeService}},[e._v("关闭服务")])],1),r("onekit-view",{staticClass:"action-area"},[r("onekit-button",{attrs:{type:"primary"},on:{tap:e.startAdvertising}},[e._v("开启广播")]),r("onekit-button",{attrs:{type:"primary"},on:{tap:e.stopAdvertising}},[e._v("关闭广播")])],1),r("onekit-view",{staticClass:"action-area"},[r("onekit-button",{attrs:{type:"primary"},on:{tap:e.showInput}},[e._v("写数据")]),r("onekit-button",{attrs:{type:"primary"},on:{tap:e.closeBluetoothAdapter}},[e._v("结束流程")])],1),r("onekit-button",{attrs:{type:"primary"},on:{tap:e.chaneMode}},[e._v("返回主机模式")]),e.input?r("onekit-block",[r("onekit-input",{staticStyle:{width:"200px",margin:"0 auto",background:"var(--weui-BG-2)",padding:"5px"},attrs:{placeholder:"写个数字"},on:{confirm:e.onConfirm}})],1):e._e(),r("onekit-view",e._l(e.connects,(function(t){return e.connects.length>0?r("onekit-view",[r("onekit-view",[r("onekit-text",[e._v(e._s(t.deviceId)+" : "+e._s(t.serverId))]),r("onekit-text",[e._v(e._s(t.connected?"已连接":"断开"))])],1)],1):e._e()})),1)],1)],1)],1)},o=[],n=(r("4160"),r("a15b"),r("d81d"),r("fb6a"),r("c19f"),r("d3b7"),r("25f0"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("159b"),r("711f")),i=r("79f0"),c="0C76801A-62EB-45E5-96A8-37C8882ABB2B",s="D0611E78-BBB4-4591-A5F8-487910AE4366",u="8667556C-9A37-4C91-84ED-54EE27D90049";function d(e,t,r){for(var a=0;a<e.length;a++)if(e[a][t]===r)return a;return-1}Object(n["OnekitPage"])({onShareAppMessage:function(){return{title:"蓝牙",path:"packageAPI/pages/slave/slave"}},data:{connects:[],servers:[]},onLoad:function(e){var t=this;i["a"].onBLEPeripheralConnectionStateChanged((function(e){console.log("connect");var r=t.data.connects,a=d(r,"deviceId",e.deviceId);a>=0?r[a]=e:r.push(e),t.setData({connects:r})}))},openBluetoothAdapter:function(){var e=this;i["a"].openBluetoothAdapter({mode:"peripheral",success:function(t){console.log("openBluetoothAdapter success",t),e.createBLEPeripheralServer()},fail:function(e){console.log(e),i["a"].showToast({title:"创建失败 错误码: ".concat(e.errCode),icon:"none"}),10001===e.errCode&&i["a"].onBluetoothAdapterStateChange((function(e){console.log("onBluetoothAdapterStateChange",e),e.available&&this.createBLEPeripheralServer()}))}})},createBLEPeripheralServer:function(){var e=this;i["a"].createBLEPeripheralServer().then((function(t){console.log("createBLEPeripheralServer",t),e.data.servers.push(t.server),e.server=t.server,e.setData({serverId:e.server.serverId}),i["a"].showToast({title:"创建 server "}),e.server.onCharacteristicReadRequest((function(t){var r=t.serviceId,a=t.characteristicId,o=t.callbackId,n=new ArrayBuffer(1),i=new DataView(n),c=Math.ceil(10*Math.random());i.setUint8(0,c),console.log("onCharacteristicReadRequest",t,c),e.server.writeCharacteristicValue({serviceId:r,characteristicId:a,value:n,needNotify:!0,callbackId:o})})),e.server.onCharacteristicWriteRequest((function(t){console.log("onCharacteristicWriteRequest",t);var r=t.serviceId,a=t.characteristicId,o=t.value,n=t.callbackId;i["a"].showToast({title:"收到主机数据"}),e.server.writeCharacteristicValue({serviceId:r,characteristicId:a,value:o,needNotify:!0,callbackId:n})}))}))},closeServer:function(){this.server.close(),i["a"].showToast({title:"关闭 server"})},chaneMode:function(){i["a"].navigateBack()},onConfirm:function(e){console.log("onConfirm");var t=1*e.detail.value,r=new ArrayBuffer(1),a=new DataView(r);a.setUint8(0,t),this.server.writeCharacteristicValue({serviceId:s,characteristicId:u,value:r,needNotify:!0}),i["a"].showModal({title:"写入成功",content:"请在主机查看"})},showInput:function(){this.setData({input:!this.data.input})},addService:function(){var e=new ArrayBuffer(1),t=new DataView(e);t.setUint8(0,2);var r=new ArrayBuffer(1),a=new DataView(r);a.setInt8(0,3);var o={uuid:s,characteristics:[{uuid:u,properties:{write:!0,read:!0,notify:!0,indicate:!0},permission:{readable:!0,writeable:!0,readEncryptionRequired:!0,writeEncryptionRequired:!0},value:e,descriptors:[{uuid:c,permission:{write:!0,read:!0},value:r}]}]};this.server.addService({service:o}).then((function(e){console.log("add Service",e),i["a"].showToast({title:"创建服务"})}),(function(e){console.log(e),10001===e.errCode?i["a"].showToast({title:"请打开蓝牙"}):i["a"].showModal({title:"创建失败",content:"错误码: ".concat(e.errCode)})}))},removeService:function(){this.server.removeService({serviceId:s}).then((function(e){i["a"].showToast({title:"关闭服务"}),console.log("removeService",e)}))},startAdvertising:function(){var e=new ArrayBuffer(1),t=new DataView(e);t.setInt8(0,4),this.server.startAdvertising({advertiseRequest:{connectable:!0,deviceName:"sanford",serviceUuids:[s],manufacturerData:[{manufacturerId:"sanfordsun-pc0",manufacturerSpecificData:e}]},powerLevel:"medium"}).then((function(e){console.log("startAdvertising",e),i["a"].showToast({title:"开启广播"})}))},stopAdvertising:function(){this.server.stopAdvertising(),i["a"].showToast({title:"关闭广播"})},closeBluetoothAdapter:function(){i["a"].showToast({title:"结束流程"}),i["a"].closeBluetoothAdapter()},onUnload:function(){this.data.servers.forEach((function(e){}))}});var v=void 0,l=(r("6c84"),r("8f78"),r("2877")),f=Object(l["a"])(v,a,o,!1,null,"0db42e24",null);t["default"]=f.exports},"8f78":function(e,t,r){"use strict";var a=r("5fc3"),o=r.n(a);o.a},a15b:function(e,t,r){"use strict";var a=r("23e7"),o=r("44ad"),n=r("fc6a"),i=r("a640"),c=[].join,s=o!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(e){return c.call(n(this),void 0===e?",":e)}})},c19f:function(e,t,r){"use strict";var a=r("23e7"),o=r("da84"),n=r("621a"),i=r("2626"),c="ArrayBuffer",s=n[c],u=o[c];a({global:!0,forced:u!==s},{ArrayBuffer:s}),i(c)},d81d:function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").map,n=r("1dde"),i=r("ae40"),c=n("map"),s=i("map");a({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-84ae0254.515a31f1.js.map