import OnekitWX_Storage from "../Storage/Storage"
import Animation from "./Animation"
export default class OnekitWX_Animation extends OnekitWX_Storage{

     static  createAnimation(OBJECT) {
         let animation = new Animation();
         if(OBJECT) {
             if (OBJECT["duration"] != null) {
                 animation.duration = OBJECT["duration"];
             }
             if (OBJECT["timingFunction"] != null) {
                 animation.timingFunction = OBJECT["timingFunction"];
             }
             if (OBJECT["delay"] != null) {
                 animation.delay = OBJECT["delay"];
             }
             if (OBJECT["transformOrigin"] != null) {
                 animation.transformOrigin = OBJECT["transformOrigin"];
             }
         }
         return animation;
     }

 }
