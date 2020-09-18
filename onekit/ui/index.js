import onekitAd from './ad'
import onekitAudio from './audio'


export default {
    install(Vue) {
        Vue.use(onekitAd)
        Vue.use(onekitAudio)
      //  Vue.use(onekitButton)
    },
}