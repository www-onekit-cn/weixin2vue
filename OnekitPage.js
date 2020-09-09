import APP from '../app.json.js';
/*
export default function(object){
  let result = {
    data() {
      return {};
    },
    created() {
      this.data = this.$data;
      if (this["onLoad"]) {
        this["onLoad"]();
      }
    },
    destroy() {
      if (this["onUnload"]) {
        this["onUnload"]();
      }
    },
    mounted() {
      let WINDOW = {
        navigationBarBackgroundColor:"#000000",
        navigationBarTextStyle:"white",
        navigationStyle:"default",
        backgroundColor:"#000000",
        backgroundTextStyle:"dark",
      };
      if(APP.window) {
        for (let key in APP.window) {
          if (!APP.window.hasOwnProperty(key)) {
            continue;
          }
          WINDOW[key] = APP.window[key];
        }
      }
      if(typeof(PAGE_JSON)!="undefined"){
        for (let key in PAGE_JSON) {
          if (!PAGE_JSON.hasOwnProperty(key)) {
            continue;
          }
          let item = PAGE_JSON[key];
          switch (key) {
            case "backgroundColorTop":
              break;
            case "backgroundColorBottom":
              break;
            case "enablePullDownRefresh":
              break;
            case "onReachBottomDistance":
              break;
            case "pageOrientation":
              break;
            default:
              WINDOW[key] = item;
              break;
          }
        }
      }
      //console.log(WINDOW)
      this.$emit("updateWindow",WINDOW);
      if (this["onReady"]) {
        this["onReady"]();
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (vm["onShow"]) {
          vm["onShow"]();
        }
      });
    },
    beforeRouteLeave(to, from, next) {
      next(vm => {
        if (vm["onHide"]) {
          vm["onHide"]();
        }
      });
    },
    methods: {
      setData(data) {
        let that = this;
        this.$nextTick(() => {
          for (let k in data) {
            if (!data.hasOwnProperty(k)) {
              continue;
            }
            that[k] = data[k];
          }
        });
      }
    },
    components: {}
  };
  if (object) {
    if (object.data) {
      result.data = () => {
        return object.data;
      };
    }
    for (let key in object) {
      if (!object.hasOwnProperty(key)) {
        continue;
      }
      let obj = object[key];
      switch (key) {
        case "data":
          break;
        case "usingComponents":
          for (let uc of obj) {
            result.components[uc] = () => import(`@/${uc}.vue`);
          }
          break;
        case "onShareAppMessage":
          break;
        default:
          result.methods[key] = obj;
          break;
      }
    }
  }
  return result;
}
*/
export default function(options){
	const _data = options.data || {};
	const uniapp_options = {
		created(){
			Object.defineProperty(this, 'data', {
			  get: function () {
			    return _data;
			  },
			  set: function (data) {
			    _data = data;
			  }
			});
			this.setData(_data);

			if(this.onLoad){
				this.onLoad.apply(this);
			}
		},
		onShow(){
			if(this.onShow){
				this.onShow.apply(this);
			}
		},
		onReady(){
			if(this.onReady){
				this.onReady.apply(this);
			}
		},
		onHide(){
			if(this.onHide){
				this.onHide.apply(this);
			}
		},
		onUnload(){
			if(this.onUnload){
				this.onUnload.apply(this);
			}
		},
		onResize(){
			if(this.onResize){
				this.onResize.apply(this);
			}
		},
		onPullDownRefresh(){
			if(this.onPullDownRefresh){
				this.onPullDownRefresh.apply(this);
			}
		},
		onReachBottom(){
			if(this.onReachBottom){
				this.onReachBottom.apply(this);
			}
		},
		onTabItemTap(){
			if(this.onTabItemTap){
				this.onTabItemTap.apply(this);
			}
		},
		onShareAppMessage(){
			if(this.onShareAppMessage){
				this.onShareAppMessage.apply(this);
			}
		},
		onPageScroll(){
			if(this.onPageScroll){
				this.onPageScroll.apply(this);
			}
		},
		onNavigationBarButtonTap(){
			if(this.onNavigationBarButtonTap){
				this.onNavigationBarButtonTap.apply(this);
			}
		},
		onBackPress(){
			if(this.onBackPress){
				this.onBackPress.apply(this);
			}
		},
		onNavigationBarSearchInputChanged(){
			if(this.onNavigationBarSearchInputChanged){
				this.onNavigationBarSearchInputChanged.apply(this);
			}
		},
		onNavigationBarSearchInputConfirmed(){
			if(this.onNavigationBarSearchInputConfirmed){
				this.onNavigationBarSearchInputConfirmed.apply(this);
			}
		},
		onNavigationBarSearchInputClicked(){
			if(this.onNavigationBarSearchInputClicked){
				this.onNavigationBarSearchInputClicked.apply(this);
			}
		},
		onShareTimeline(){
			if(this.onShareTimeline){
				this.onShareTimeline.apply(this);
			}
		},
		onAddToFavorites(){
			if(this.onAddToFavorites){
				this.onAddToFavorites.apply(this);
			}
		},
		methods:{
			setData(data){
				for(const key of Object.keys(data)){
					this[key] = data[key];
					_data[key] = data[key];
				}
			}
		}
	};
	for(const key of Object.keys(options)){
		const value = options[key];
		switch(key){
			case "data":
				break;
			default:
			if(typeof(value)=="function" ){
				uniapp_options.methods[key] = value;
			}else{
				uniapp_options[key] = value;
				}
				break;
		}
	}
	return uniapp_options;
}