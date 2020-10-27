import onekitActivity from './activity'
import onekitTabs from './tabs'


export default {
    install(Vue) {
        Vue.use(onekitActivity)
        Vue.use(onekitTabs)
    },
}