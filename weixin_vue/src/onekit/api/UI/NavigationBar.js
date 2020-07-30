import OnekitWX_Menu from "./Menu"
export class OnekitWX_NavigationBar extends OnekitWX_Menu{
	static setNavigationBarTitle(object){
		$("#onekitwx_navigationBar_title").html("xxx");
		if(object.success)object.success();
		if(object.complete)object.complete();

	}

	static showNavigationBarLoading(){}

	static hideNavigationBarLoading(){}

	static setNavigationBarColor(object){
		if(object.frontColor){$("#onekitwx_navigationBar").css("color",object.frontColor);}
		if(object.backgroundColor){$("#onekitwx_navigationBar").css("background",object.backgroundColor);}
	}
}
