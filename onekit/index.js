import ui from './ui'
import OnekitApp from './OnekitApp'
import OnekitBehavior from './OnekitBehavior'
import OnekitComponent from './OnekitComponent'
import OnekitPage from './OnekitPage'
import wx from './wx'
import TheKit from './js/TheKit'
import OneKit from './js/OneKit'

export default {
  install(Vue) {
    Vue.use(ui)
  },
  TheKit,
  OneKit,
  wx,
  OnekitApp,
  OnekitBehavior,
  OnekitComponent,
  OnekitPage
}
