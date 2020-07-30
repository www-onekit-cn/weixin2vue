import OnekitWX_WeRun from "../OpenInterface/WeRun"
import EventChannel from "./EventChannel"
export class OnekitWX_Router extends OnekitWX_WeRun{
  static switchTab(){}
  static reLaunch(){
  }

  static redirectTo(object){
    let url = object.url;
    let success =object.success;
    let fail =object.fail;
    let complete =object.complete;
    var result;
    try{
      if (window.parent) {
        window.parent.location.replace(OneKit.url(url));
      }else {
        window.location.replace(OneKit.url(url));
      }
      result = {
        redirectTo:'ok'
      };
      if(success){
        success(result);
      }
      if(complete){
        complete(result);
      }
    }catch(e) {
      result = {errMsg:e.message};
      if(fail){
        fail(result);
      }
      if(complete){
        complete(result);
      }
    }
  }
	static navigateTo(object){
		let url = object.url;
		let success =object.success;
		let fail =object.fail;
		let complete =object.complete;
		var result;
		try {
      router.push({path: OneKit.url(url)});
        /*   if (window.parent) {
                window.parent.location.href = OneKit.url(url);
            } else{
                window.location.href = OneKit.url(url);
        }*/
			result = {
				navigateTo:'ok'
			};
			if(success){
				success(result);
			}
			if(complete){
				complete(result);
			}
		}catch(e) {
			result = {errMsg:e.message};
			if(fail){
				fail(result);
			}
			if(complete){
				complete(result);
			}
		}
	}


	static navigateBack(object){
		let delta;
		let success =object.success;
		let fail =object.fail;
		let complete =object.complete;
		var result;
		try{
			if(object.delta){
				delta=object.delta;
			}
			else{
				delta=1;
			}
			history.go(-delta);

			result = {
				navigateBack:'ok'
			};
			if(success){
				success(result);
			}
			if(complete){
				complete(result);
			}
		}catch(e) {
			result = {errMsg:e.message};
			if(fail){
				fail(result);
			}
			if(complete){
				complete(result);
			}
		}
	}
}
