import Vue from 'vue'
import PATH from 'oneutil/PATH'
export default class OneKit{

  static current() {
  return Vue.prototype.CURRENT;
}

static fixurl(wx_rel_url) {
  const wx_abs_url = PATH.rel2abs(this.currentUrl(), wx_rel_url)
  if (Vue.prototype.APP_JSON.pages.indexOf(wx_abs_url) < 0) {
    if (Vue.prototype.onPageNotFound) {
      Vue.prototype.onPageNotFound();
    }
  }
  const vue_path = wx_abs_url // ...
  return vue_path
}


static currentUrl() {
  return this.current().$route.path;
}

}
