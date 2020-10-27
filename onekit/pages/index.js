import activity from './activity'
import tabs from './tabs'
export default {
    install(Vue) {
        Vue.use(activity)
        Vue.use(tabs)
    }
}