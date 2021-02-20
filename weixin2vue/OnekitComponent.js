import Vue from "vue";
let APP_JSON;
export default function (UC_JSON, object) {
  let _data = object.data || {};
  let result = {
    data:()=>{
     return  _data
    },
    props: {},
    watch: {},
    created() {

      APP_JSON = Vue.prototype.APP_JSON;
      ////////////////
      if (this["created"]) {
        this["created"]();
      }
    },
    mounted() {
      if (this["attached"]) {
        this["attached"]();
      }
      //////////
      let WINDOW_JSON = {
        navigationBarBackgroundColor: "#000000",
        navigationBarTextStyle: "white",
        navigationStyle: "default",
        backgroundColor: "#000000",
        backgroundTextStyle: "dark",
      };
      if (APP_JSON.window) {
        for (let key of Object.keys(APP_JSON.window)) {
          WINDOW_JSON[key] = APP_JSON.window[key];
        }
      }
      //let path = this.$route.fullPath;
      for (let key of Object.keys(UC_JSON)) {

        let item = UC_JSON[key];
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
          WINDOW_JSON[key] = item;
          break;
        }
      }
      //console.log(WINDOW_JSON)
      this.$emit('update-window', { WINDOW_JSON });
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
      getDATA() {
        return _data
      },
      setDATA(data) {
        _data = data
      },
      setData(data) {
        Object.assign(_data,data)
        this.$nextTick(() => {
          for (let k of Object.keys(data)) {
            this[k] = data[k];
          }
        });
      }
    },
    components: {}
  };
  if (object) {
    for (let key of Object.keys(object)) {
      let obj = object[key];
      switch (key) {
      case "data":
        break;
      case "onShareAppMessage":
        break;
      case "properties":
        for (let propertyName of Object.keys(obj)) {
          const property = obj[propertyName]
          if (!property) {
            result.props[propertyName] = {}
          } else if (typeof (property) === "object") {
            const prop = {}
            if (property.type) {
              prop.type = property.type
            }
            if (property.value) {
              _data[propertyName] = property.value
              prop.default = property.value
            }
            result.props[propertyName] = prop
          } else {
            result.props[propertyName] = { type: property }
          }
          result.watch[propertyName] = {
            deep: true,
            immediate: true,
            handler: (v) => {
              _data[propertyName] = v
            }
          }

        }
        break;
      default:
        result.methods[key] = obj;
        break;
      }
    }
    for (let key of Object.keys(UC_JSON)) {
      let item = UC_JSON[key];
      switch (key) {
      case "usingComponents":
        for (let uc of Object.keys(item)) {
          result.components[uc] = () => import(`@/${uc}.vue`);
        }
        break;
      }
    }
    return result;
  }
}
