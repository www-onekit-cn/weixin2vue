class OnekitWX_Router{
	static navigateTo(object){
		let url = object.url;
		let success =object.success;
		let fail =object.fail;
		let complete =object.complete;
		var result;
		try {
            if (window.parent) {
                window.parent.location.href = Onekit_WX.url(url);
            } else{
                window.location.href = Onekit_WX.url(url);
        }
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

	static redirectTo(object){
		let url = object.url;
		let success =object.success;
		let fail =object.fail;
		let complete =object.complete;
		var result;
		try{
            if (window.parent) {
                window.parent.location.replace(Onekit.url(url));
            }else {
                window.location.replace(Onekit.url(url));
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

	static switchTab(){}

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

	static reLaunch(){

	}
}
