import ui from './ui'
import pages from './pages'

export default {
  install(Vue) {
    Vue.use(ui)
    Vue.use(pages)
  }
}
