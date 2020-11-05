import ui from './ui'
import pages from './pages'
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'
import wx from './wx'
export default {
  install(Vue) {
    Vue.use(ui)
    Vue.use(pages)
  },
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage,
  wx
}
