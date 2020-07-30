import OnekitWX_Worker from "../Worker/Worker"
export class OnekitWX_WXML extends OnekitWX_Worker{
	static createSelectorQuery(){
		var xsw_document=document;
		xsw_document.select = function (object) {
			var ThatBox=xsw_document.querySelector(object);
			ThatBox.boundingClientRect = function (callback) {
				var Html=ThatBox.innerHTML;
				var boundingClientRectArray=[];
				boundingClientRectArray['id']=ThatBox.getAttribute('id');
				boundingClientRectArray['left']=ThatBox.getBoundingClientRect().left;
				if(Html){
					boundingClientRectArray['dataset']={Html};
				}
				else{
					boundingClientRectArray['dataset']={};
				}
				boundingClientRectArray['right']=ThatBox.getBoundingClientRect().right;
				boundingClientRectArray['top']=ThatBox.getBoundingClientRect().top;
				boundingClientRectArray['bottom']=ThatBox.getBoundingClientRect().bottom;
				boundingClientRectArray['width']=ThatBox.getBoundingClientRect().width;
				boundingClientRectArray['height']=ThatBox.getBoundingClientRect().height;
				if(callback){
					let objT = {};
					for (var x in boundingClientRectArray){
						objT[x]=boundingClientRectArray[x]
					}
					callback.exec = function () {
						callback(objT);
					};
				}
				xsw_document.execPush(boundingClientRectArray);
				return callback;
			};
			var Tarray=[];
			ThatBox.scrollOffset=function (callback) {
				var Html=ThatBox.innerHTML;
				Tarray['id']=ThatBox.getAttribute('id');
				if(Html){
					Tarray['dataset']={Html};
				}
				else{
					Tarray['dataset']={};
				}
				Tarray['scrollTop']=ThatBox.scrollTop;
				Tarray['scrollLeft']=ThatBox.scrollLeft;
				if(callback){
					let objT = new Object();
					for (var x in Tarray){
						objT[x]=Tarray[x]
					}
					callback.exec = function () {
						callback(objT);
					};
				}
				xsw_document.execPush(Tarray);
				return callback;
			};
			ThatBox.fields = function (object,callback) {
				let id=object.id;
				let dataset=object.dataset;
				let rect=object.rect;
				let size=object.size;
				let scrollOffset=object.scrollOffset;
				let properties=object.properties;
				var fieldsArray=[];
				if(id && id==true){
					fieldsArray['id']=ThatBox.getAttribute('id');
				}
				if(dataset && dataset==true){
					var Html=ThatBox.innerHTML;
					if(Html){
						fieldsArray['dataset']={Html};
					}
					else{
						fieldsArray['dataset']={};
					}
				}
				if(rect && rect==true){
					fieldsArray['left']=ThatBox.getBoundingClientRect().left;
					fieldsArray['right']=ThatBox.getBoundingClientRect().right;
					fieldsArray['top']=ThatBox.getBoundingClientRect().top;
					fieldsArray['bottom']=ThatBox.getBoundingClientRect().bottom;
				}
				if(size && size==true){
					fieldsArray['width']=ThatBox.getBoundingClientRect().width;
					fieldsArray['height']=ThatBox.getBoundingClientRect().height;
				}
				if(scrollOffset && scrollOffset==true){
					fieldsArray['scrollTop']=ThatBox.scrollTop;
					fieldsArray['scrollLeft']=ThatBox.scrollLeft;
				}
				if(properties && properties instanceof Array ==true){
					for(let xx=0;xx<properties.length;xx++){
						fieldsArray[properties[xx]]=ThatBox.getAttribute(properties[xx]);
					}
				}
				var objF = new Object();
				for (var x in fieldsArray){
					objF[x]=fieldsArray[x]
				}
				callback.exec = function () {
					callback(objF);
				};
				return callback;
			};
			return ThatBox;
		};

		xsw_document.selectAll = function (object) {
			var ThatBox= xsw_document.querySelectorAll(object);
			ThatBox.boundingClientRect = function (callback) {
				var objArray = new Array();
				var boundingClientRectArray=[];
				for(let xd=0;xd<ThatBox.length;xd++){
					var Html=ThatBox[xd].innerHTML;
					boundingClientRectArray['id']=ThatBox[xd].getAttribute('id');
					boundingClientRectArray['left']=ThatBox[xd].getBoundingClientRect().left;
					if(Html){
						boundingClientRectArray['dataset']={Html};
					}
					else{
						boundingClientRectArray['dataset']={};
					}
					boundingClientRectArray['right']=ThatBox[xd].getBoundingClientRect().right;
					boundingClientRectArray['top']=ThatBox[xd].getBoundingClientRect().top;
					boundingClientRectArray['bottom']=ThatBox[xd].getBoundingClientRect().bottom;
					boundingClientRectArray['width']=ThatBox[xd].getBoundingClientRect().width;
					boundingClientRectArray['height']=ThatBox[xd].getBoundingClientRect().height;
					let objT = new Object();
					for (var x in boundingClientRectArray){
						objT[x]=boundingClientRectArray[x]
					}
					objArray.push(objT);
				}
				if(callback){
					callback.exec = function () {
						callback(objArray);
					};
				}
				xsw_document.execPush(objArray);
				return callback;
			};
			ThatBox.scrollOffset=function (callback) {
				var objTArray = new Array();
				var Tarray=[];
				for(let xd=0;xd<ThatBox.length;xd++){
					var Html=ThatBox[xd].innerHTML;
					Tarray['id']=ThatBox[xd].getAttribute('id');
					if(Html){
						Tarray['dataset']={Html};
					}
					else{
						Tarray['dataset']={};
					}
					Tarray['scrollTop']=ThatBox[xd].scrollTop;
					Tarray['scrollLeft']=ThatBox[xd].scrollLeft;
					let objT = new Object();
					for (var x in Tarray){
						objT[x]=Tarray[x]
					}
					objTArray.push(objT);
				}
				if(callback){
					callback.exec = function () {
						callback(objTArray);
					};
				}
				xsw_document.execPush(objTArray);
				return callback;
			};
			ThatBox.fields = function (object,callback) {
				var objTTArray = new Array();
				var fieldsArray=[];
				for(let xd=0;xd<ThatBox.length;xd++){
					let id=object.id;
					let dataset=object.dataset;
					let rect=object.rect;
					let size=object.size;
					let scrollOffset=object.scrollOffset;
					let properties=object.properties;
					if(id && id==true){
						fieldsArray['id']=ThatBox[xd].getAttribute('id');
					}
					if(dataset && dataset==true){
						var Html=ThatBox[xd].innerHTML;
						if(Html){
							fieldsArray['dataset']={Html};
						}
						else{
							fieldsArray['dataset']={};
						}
					}
					if(rect && rect==true){
						fieldsArray['left']=ThatBox[xd].getBoundingClientRect().left;
						fieldsArray['right']=ThatBox[xd].getBoundingClientRect().right;
						fieldsArray['top']=ThatBox[xd].getBoundingClientRect().top;
						fieldsArray['bottom']=ThatBox[xd].getBoundingClientRect().bottom;
					}
					if(size && size==true){
						fieldsArray['width']=ThatBox[xd].getBoundingClientRect().width;
						fieldsArray['height']=ThatBox[xd].getBoundingClientRect().height;
					}
					if(scrollOffset && scrollOffset==true){
						fieldsArray['scrollTop']=ThatBox[xd].scrollTop;
						fieldsArray['scrollLeft']=ThatBox[xd].scrollLeft;
					}
					if(properties && properties instanceof Array ==true){
						for(let xx=0;xx<properties.length;xx++){
							fieldsArray[properties[xx]]=ThatBox[xd].getAttribute(properties[xx]);
						}
					}
					var objF = new Object();
					for (var x in fieldsArray){
						objF[x]=fieldsArray[x]
					}
					objTTArray.push(objF);
				}
				if(callback){
					callback.exec = function () {
						callback(objTTArray);
					};
				}
				xsw_document.execPush(objTTArray);
				return callback;
			};
			return ThatBox;
		};

		xsw_document.selectViewport = function (callback) {
			var selectBody=document.body;
			selectBody.boundingClientRect = function (callback) {
				var boundingClientRectArrayA=[];
				var Html=selectBody.innerHTML;
				boundingClientRectArrayA['left']=selectBody.getBoundingClientRect().left;
				if(Html){
					boundingClientRectArrayA['dataset']={Html};
				}
				else{
					boundingClientRectArrayA['dataset']={};
				}
				boundingClientRectArrayA['right']=selectBody.getBoundingClientRect().right;
				boundingClientRectArrayA['top']=selectBody.getBoundingClientRect().top;
				boundingClientRectArrayA['bottom']=selectBody.getBoundingClientRect().bottom;
				boundingClientRectArrayA['width']=selectBody.getBoundingClientRect().width;
				boundingClientRectArrayA['height']=selectBody.getBoundingClientRect().height;
				if(callback){
					let objT = new Object();
					for (var x in boundingClientRectArrayA){
						objT[x]=boundingClientRectArrayA[x]
					}
					callback.exec = function () {
						callback(objT);
					};
				}
				xsw_document.execPush(boundingClientRectArrayA);
				return callback;
			};
			var Sarray=[];
			selectBody.scrollOffset=function (callback) {
				var Html=selectBody.innerHTML;
				Sarray['id']=selectBody.getAttribute('id');
				if(Html){
					Sarray['dataset']={Html};
				}
				else{
					Sarray['dataset']={};
				}
				Sarray['scrollTop']=selectBody.scrollTop;
				Sarray['scrollLeft']=selectBody.scrollLeft;
				if(callback){
					let objT = new Object();
					for (var x in Sarray){
						objT[x]=Sarray[x]
					}
					callback.exec = function () {
						callback(objT);
					};
				}
				xsw_document.execPush(Sarray);
				return callback;
			};
			selectBody.fields = function (object,callback) {
				let id=object.id;
				let dataset=object.dataset;
				let rect=object.rect;
				let size=object.size;
				let scrollOffset=object.scrollOffset;
				let properties=object.properties;
				var fieldsArrayA=[];
				if(id && id==true){
					fieldsArrayA['id']=selectBody.getAttribute('id');
				}
				if(dataset && dataset==true){
					var Html=selectBody.innerHTML;
					if(Html){
						fieldsArrayA['dataset']={Html};
					}
					else{
						fieldsArrayA['dataset']={};
					}
				}
				if(rect && rect==true){
					fieldsArrayA['left']=selectBody.getBoundingClientRect().left;
					fieldsArrayA['right']=selectBody.getBoundingClientRect().right;
					fieldsArrayA['top']=selectBody.getBoundingClientRect().top;
					fieldsArrayA['bottom']=selectBody.getBoundingClientRect().bottom;
				}
				if(size && size==true){
					fieldsArrayA['width']=selectBody.getBoundingClientRect().width;
					fieldsArrayA['height']=selectBody.getBoundingClientRect().height;
				}
				if(scrollOffset && scrollOffset==true){
					fieldsArrayA['scrollTop']=selectBody.scrollTop;
					fieldsArrayA['scrollLeft']=selectBody.scrollLeft;
				}
				if(properties && properties instanceof Array ==true){
					for(let xx=0;xx<properties.length;xx++){
						fieldsArrayA[properties[xx]]=selectBody.getAttribute(properties[xx]);
					}
				}
				var objF = new Object();
				for (var x in fieldsArrayA){
					objF[x]=fieldsArrayA[x]
				}
				callback.exec = function () {
					callback(objF);
				};
				return callback;
			};
			return selectBody
		};

		var execArray=[];
		xsw_document.execPush = function (callback) {
			let objT = new Object();
			for (var x in callback){
				objT[x]=callback[x]
			}
			execArray.push(objT);
		};
		xsw_document.exec = function (callback) {
			callback(execArray);
		};
		return xsw_document;
	}

	static createIntersectionObserver(){}
}
