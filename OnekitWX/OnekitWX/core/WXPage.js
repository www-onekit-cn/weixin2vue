/**
 * Created by zhangjin on 2018/4/26.
 */
function getApp() {

}
let ONEKIT;
function Page(onekit_page) {
    ONEKIT = onekit_page;
    if(!onekit_page){onekit_page={};}
    //////////////////////////
    let screen_width = Onekit.isMobile?(($(window).width())-2):750;
    document.documentElement.style.setProperty('--screen-width', screen_width + "px");

    window.exparser.registerElement({
        is: "wx-page",
        template: '<div><slot></slot></div>'
    });
    ///////////
    let methods = {

    };
    for (let key in onekit_page) {
        if (!onekit_page.hasOwnProperty(key)) {
            continue;
        }
        if ($.inArray(key, ["data", "onLoad"]) >= 0) {
            continue;
        }
        if(typeof(onekit_page[key])=="function") {
            let js = 'methods.'+key+' = function(a,b,c,d,e,f,g){onekit_page["'+key+'"](a,b,c,d,e,f,g)}';
            eval(js);
        }
    }
    ///////////////////////
    let data = {};
    if(onekit_page.data){
        data = onekit_page.data;
    }
    let result = {
        el: 'wx-page',
        methods : methods,
        data: data,
    };
    let vPage;
    onekit_page.setData = function (data) {
        if(!data) {
            return;
        }
        let result = vPage.$data;
        for(let key in data) {
            if (!data.hasOwnProperty(key)) {
                continue;
            }
            result[key] = data[key];
        }
        Vue.set( vPage, "data",result);

    };
     vPage = new Vue(result);
    //console.log(document.body.outerHTML);
    vPage.data = vPage.$data;
    //
    let url = new Uri(location.href).params;
    let option = {};
    if(url.query) {
        let params = url.query.split("&");
        for (let p =0;p< params.length;p++) {
            let param = params[p];
            let kv = param.split("=");
            let key = kv[0];
            let value = kv[1];
            if(key.startsWith("onekit_")){
                switch (key.substr(7)) {
                    case "root":
                        if(value){
                            $("#back_onekit").hide();
                        }
                        break;
                    default:break;
                }
            }else{
                option[key] = value;
            }
        }
    }
    if (onekit_page.onLoad) {
        onekit_page.onLoad(option);
    }

    if (onekit_page.onReady) {
        onekit_page.onReady();
    }
    if (onekit_page.onShow) {
        onekit_page.onShow();
    }
}