import button from './button'
import icon from './icon'
import page from './page'
import progress from './progress'
import view from './view'

export default {
    install(Vue) {
        Vue.use(button)
        Vue.use(icon)
        Vue.use(page)
        Vue.use(progress)
         Vue.use(view)
    },
}