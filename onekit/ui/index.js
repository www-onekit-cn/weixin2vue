import icon from './icon'
import page from './page'
import view from './view'

export default {
    install(Vue) {
        Vue.use(icon)
        Vue.use(page)
         Vue.use(view)
    },
}