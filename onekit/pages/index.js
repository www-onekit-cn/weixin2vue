import onekitSingle from './single'
import onekitTabs from './tabs'


export default {
    install(Vue) {
        Vue.use(onekitSingle)
        Vue.use(onekitTabs)
    },
}