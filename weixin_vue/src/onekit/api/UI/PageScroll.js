import OnekitWX_NavigationBar from "./NavigationBar"
export class OnekitWX_PageScroll extends OnekitWX_NavigationBar{
    static pageScrollTo(object){
        let scrollTop=object.scrollTop;
        let duration;
        if(!object.duration){
            duration=300;
        }
        else{
            duration=object.duration;
        }
        $("body,html").animate({
            scrollTop:scrollTop
        },duration);
    }
}
