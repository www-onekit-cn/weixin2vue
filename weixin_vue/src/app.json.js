export {
	"pages":[
		"page/component/index",
		"page/component/pages/view/view",
		"page/component/pages/scroll-view/scroll-view",
		"page/component/pages/swiper/swiper",
		"page/component/pages/text/text",
		"page/component/pages/icon/icon",
		"page/component/pages/progress/progress",
		"page/component/pages/button/button",
		"page/component/pages/checkbox/checkbox",
		"page/component/pages/form/form",
		"page/component/pages/input/input",
		"page/component/pages/label/label",
		"page/component/pages/picker/picker",
		"page/component/pages/radio/radio",
		"page/component/pages/slider/slider",
		"page/component/pages/switch/switch",
		"page/component/pages/textarea/textarea",
		"page/component/pages/navigator/navigator",
		"page/component/pages/navigator/navigate",
		"page/component/pages/navigator/redirect",
		"page/component/pages/image/image",
		"page/component/pages/video/video",
		"page/component/pages/map/map",
		"page/component/pages/canvas/canvas",
		"page/component/pages/ad/ad",
		"page/component/pages/movable-view/movable-view",
		"page/component/pages/cover-view/cover-view",
		"page/component/pages/rich-text/rich-text",
		"page/component/pages/picker-view/picker-view",
		"page/component/pages/camera/camera",
		"page/component/pages/camera-scan-code/camera-scan-code",
		"page/component/pages/map-styles/map-styles",
		"page/component/pages/live-player/live-player",
		"page/component/pages/live-pusher/live-pusher",
		"page/component/pages/aria-component/aria-component",
		"page/API/index",
		"page/cloud/index",
		"page/component/pages/doc-web-view/doc-web-view",
		"page/component/pages/open-data/open-data",
		"page/component/pages/web-view/web-view",
		"page/component/pages/editor/editor",
		"page/component/pages/canvas-2d/canvas-2d",
		"page/component/pages/webgl/webgl"
	],
	"tabBar":{
		"list":[
			{
				"selectedIconPath":"image/icon_component_HL.png",
				"text":"组件",
				"pagePath":"page/component/index",
				"iconPath":"image/icon_component.png"
			},
			{
				"selectedIconPath":"image/icon_API_HL.png",
				"text":"接口",
				"pagePath":"page/API/index",
				"iconPath":"image/icon_API.png"
			},
			{
				"selectedIconPath":"image/icon_cloud_HL.png",
				"text":"云开发",
				"pagePath":"page/cloud/index",
				"iconPath":"image/icon_cloud.png"
			}
		]
	},
	"window":{
		"backgroundColor":"#f7f7f7",
		"navigationBarBackgroundColor":"#f7f7f7",
		"navigationBarTitleText":"演示",
		"navigationBarTextStyle":"black"
	},
	"subpackages":[
		{
			"pages":[
				"pages/login/login",
				"pages/get-user-info/get-user-info",
				"pages/request-payment/request-payment",
				"pages/share/share",
				"pages/share-button/share-button",
				"pages/custom-message/custom-message",
				"pages/template-message/template-message",
				"pages/set-navigation-bar-title/set-navigation-bar-title",
				"pages/navigation-bar-loading/navigation-bar-loading",
				"pages/navigator/navigator",
				"pages/pull-down-refresh/pull-down-refresh",
				"pages/animation/animation",
				"pages/action-sheet/action-sheet",
				"pages/modal/modal",
				"pages/toast/toast",
				"pages/get-network-type/get-network-type",
				"pages/on-network-status-change/on-network-status-change",
				"pages/get-system-info/get-system-info",
				"pages/on-compass-change/on-compass-change",
				"pages/make-phone-call/make-phone-call",
				"pages/scan-code/scan-code",
				"pages/request/request",
				"pages/web-socket/web-socket",
				"pages/upload-file/upload-file",
				"pages/download-file/download-file",
				"pages/image/image",
				"pages/voice/voice",
				"pages/file/file",
				"pages/on-accelerometer-change/on-accelerometer-change",
				"pages/canvas/canvas",
				"pages/background-audio/background-audio",
				"pages/video/video",
				"pages/get-location/get-location",
				"pages/open-location/open-location",
				"pages/choose-location/choose-location",
				"pages/storage/storage",
				"pages/get-wxml-node-info/get-wxml-node-info",
				"pages/load-font-face/load-font-face",
				"pages/clipboard-data/clipboard-data",
				"pages/bluetooth/bluetooth",
				"pages/screen-brightness/screen-brightness",
				"pages/vibrate/vibrate",
				"pages/add-contact/add-contact",
				"pages/wifi/wifi",
				"pages/page-scroll/page-scroll",
				"pages/intersection-observer/intersection-observer",
				"pages/capture-screen/capture-screen",
				"pages/worker/worker",
				"pages/ibeacon/ibeacon",
				"pages/choose-address/choose-address",
				"pages/setting/setting",
				"pages/choose-invoice-title/choose-invoice-title",
				"pages/soter-authentication/soter-authentication",
				"pages/subscribe-message/subscribe-message",
				"pages/doc-web-view/doc-web-view",
				"pages/audio/audio",
				"pages/get-battery-info/get-battery-info",
				"pages/get-performance/get-performance",
				"pages/mdns/mdns",
				"pages/udp-socket/udp-socket",
				"pages/two-way-bindings/two-way-bindings",
				"pages/media-container/media-container",
				"pages/get-background-fetch-data/get-background-fetch-data",
				"pages/get-background-prefetch-data/get-background-prefetch-data",
				"pages/wxs/wxs",
				"pages/bluetooth/slave/slave",
				"pages/resizable/resizable",
				"pages/wxs/movable",
				"pages/wxs/sidebar",
				"pages/wxs/stick-top",
				"pages/wxs/nearby"
			],
			"root":"packageAPI"
		},
		{
			"pages":[
				"pages/doc-web-view/doc-web-view",
				"pages/user-authentication/user-authentication",
				"pages/get-wx-context/get-wx-context",
				"pages/upload-file/upload-file",
				"pages/download-file/download-file",
				"pages/get-temp-file-url/get-temp-file-url",
				"pages/delete-file/delete-file",
				"pages/cloud-file-component/cloud-file-component",
				"pages/crud/crud",
				"pages/crud-detail/crud-detail",
				"pages/db-permission/db-permission",
				"pages/server-date/server-date",
				"pages/scf-database/scf-database",
				"pages/scf-storage/scf-storage",
				"pages/scf-openapi/scf-openapi"
			],
			"root":"packageCloud"
		}
	]
}