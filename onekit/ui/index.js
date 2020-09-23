import ad from './ad'
import ad_custom from './ad-custom'
import audio from './audio'
import canvas from './canvas'
import camera from './camera'
import checkbox from './checkbox'
import checkbox_group from './checkbox-group'
import cover_image from './cover-image'
import cover_view from './cover-view'
import editor from './editor'
import form from './form'
import functional_page_navigator from './functional-page-navigator'
import image from './image'
import input from './input'
import label from './label'
import live_player from './live-player'
import live_pusher from './live-pusher'
import map from './map'
import match_media from './match-media'
import movable_area from './movable-area'
import movable_view from './movable-view'
import navigation_bar from './navigation-bar'



import button from './button'
import icon from './icon'
import page from './page'
import progress from './progress'
import view from './view'


export default {
    install(Vue) {
        Vue.use(audio)
        Vue.use(button)
        Vue.use(icon)
        Vue.use(page)
        Vue.use(progress)
         Vue.use(view)
    },
}