import APP from '../app.json.js';
function OnekitApp(object) {

}

function OnekitPage(object) {
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
      //console.log( this.$route.fullPath);
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
      let path = this.$route.fullPath;
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
function OnekitComponent(data){
 //return Component(data);
}
export default {OnekitApp,OnekitPage,OnekitComponent};
