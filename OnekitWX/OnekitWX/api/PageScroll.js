class OnekitWX_PageScroll{
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
