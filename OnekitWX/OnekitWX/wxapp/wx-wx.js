/**
 * Created by zhangjin on 2018/4/26.
 */
HTMLElement.prototype.hasBehavior = function (base) {
    return $.inArray(base, this.classList);
};
//////////////////////////////
/////////////////////////////
let Reporter = {};
Reporter.errorReport = function () {

};
/////////////////
let WeixinJSBridge = {};
WeixinJSBridge.invoke = function () {

};
WeixinJSBridge.publish = function () {

};
WeixinJSBridge.subscribe = function () {

};
//////////////////////
let exparser = {};
exparser.addListenerToElement = function(element,name,func){
    console.log("======"+name);
};
exparser.Element = HTMLElement;
window.exparser = {};
window.exparser.uc = {};
window.exparser.uc_data = {};
window.exparser.registerBehavior = function(object) {
    return window.exparser.register(object,false);
};
window.exparser.registerElement = function(object) {
    return window.exparser.register(object,true);
};
window.exparser.register = function(object,isElement) {
    function stringify(value) {
        if (value == null) {
            return null;
        }
        let defaultValue;
        if (value instanceof Array) {
            defaultValue = JSON.stringify(value);
        } else {
            switch (typeof(value)) {
                case "number":
                case "boolean":
                    defaultValue = value;
                    break;
                case "string":
                    defaultValue = '"' + value + '"';
                    break;
                case "object":
                    defaultValue = JSON.stringify(value);
                    break;
                default:
                    console.log("[stringify]", value, typeof(value));
                    break;
            }
        }
        return defaultValue;
    }

    if (!object["is"]) {
        return;
    }
    let data = {};
    let result = {
        template: object.template,
        attached: object.attached,
        contentChanged: object.contentChanged,
        detached: object.detached,
        methods: {},
        watch: {},
        computed: {},
        props: {}
    };
    if (object.data) {
        data = object.data;
    }
    if (object.computed) {
        result.computed = object.computed;
    }
    if (object.methods) {
        result.methods = object.methods;
    }
    let events = {
        onekit:{}
    };
    switch (object.is) {
        case "wx-view":
        case "wx-button":
            events["onekit"]["@click"] = "onekit_click";
            result.methods["onekit_click"] = function (e) {
                //e = Onekit_WX.event(e);
                this.$emit("bindtap", e);
            };
            break;
        default:
            break;
    }

    function addAttributes(listeners,isAttribute) {
        for (let l in listeners) {
            if (!listeners.hasOwnProperty(l)) {
                continue;
            }
            let listener = listeners[l];
            //
            let p = l.indexOf(".");
            let ref, attributeName,attributeValue;
            if (p < 0) {
                ref = "onekit";
                attributeName = l;
            } else {
                ref = l.substr(0, p);
                attributeName = l.substr(p + 1);
            }
            let prefix = isAttribute?":":"@";
            if (!events[ref]) {
                events[ref] = {};
            }
            if(isAttribute){
                if(!listener.reflectToAttribute) {
                    continue;
                }
                attributeValue = attributeName;
            }else {
                attributeValue = listener;
                switch (attributeName) {
                    case "tap":
                        attributeName = "click";
                        break;
                    case  "track":
                        attributeName = "drag";
                        break;
                   /* case "change":
                        attributeName = "propertychange";
                        break;*/
                    default:
                        break;
                }
            }
            if (!events[ref][prefix + attributeName]) {
                events[ref][prefix + attributeName] =attributeValue;
            }
        }
    }
    for (let p in object) {
        if (!object.hasOwnProperty(p)) {
            continue;
        }
        let obj = object[p];
        switch (p) {
            case "listeners":
                result.listeners = object.listeners;
                addAttributes(object.listeners,false);
                break;
            case "computed":
            case "is":
            case "data":
            case "template":
            case "behaviors":
                break;
            case "properties":
                result.properties = object.properties;
                addAttributes(object.properties,true);
                for (let key in object["properties"]) {
                    if (!object["properties"].hasOwnProperty(key)) {
                        continue;
                    }
                    let property = object["properties"][key];
                    let p = key.indexOf(".");
                    if(p>=0){
                        key = key.substr(p+1);
                    }
                    if (property.reflectToAttribute) {
                        let type = property.type;
                        if(type!=String){
                            type = [type,String];
                        }
                        result.props[key] = {
                            type: type
                        };
                        if (property.value != null) {
                            let defaultValue = stringify(property.value);
                            eval('result.props["' + key + '"].default = function () {return ' + defaultValue + '; };');
                        }
                        if (property.observer) {
                            result.watch[key] = property.observer;

                            result.methods[property.observer] = object[property.observer];
                            result.methods["onekit_" + key] = object[property.observer];
                        }
                    } else {
                        data["onekit_" + key] = (property.value != null ? property.value : null);
                        let js = 'result.computed["' + key + '"] = {get:function(){return this.onekit_' + key + ';},set:function(value){this.onekit_' + key + '=value;';
                        if(property.observer){
                            result.methods[property.observer] = object[property.observer];
                            js+='this.'+property.observer+'(value);';
                        }
                        js += '}};';
                        eval(js);
                    }
                }
                break;
            default:
                if (typeof (obj) == "function") {
                    result.methods[p] = obj;
                } else {
                    data[p] = obj;
                    //console.log("[registerElement] " + object["is"] + " " + p + " " + typeof (obj));
                }
                break;
        }
    }
    /////////
        result.mounted = function () {
        let className = this.$el.className;
        if (className) {
            className = " " + className;
        }
        className = object["is"] + className;
        this.$el.className = className;
        ///////
        for (let key in this.$props) {
            if (!this.$props.hasOwnProperty(key)) {
                continue;
            }
            let func = this["onekit_"+key];
            let value = this[key];
            if(func && value) {
                func(value);
            }
        }
        ///////
       if (this.attached) {
            this.attached();
        }
    };
    result.updated = function () {
        if (this.contentChanged) {
            this.contentChanged();
        }
    };
    result.destroyed = function () {
        if (this.detached) {
            this.detached();
        }
    };
    ////////////////////////
    let mixins = [];
    if (object.behaviors) {
        for (let b = 0; b < object.behaviors.length; b++) {
            let base = object.behaviors[b];
            let uc = window.exparser.uc[base];
            let mixin = {};
            for (let x in uc) {
                if (!uc.hasOwnProperty(x)) {
                    continue;
                }
                if(x=="mounted"){
                    continue;
                }
                    mixin[x] = uc[x];

            }
            mixins.push(mixin);
            //////////////
            for (let key in uc["props"]) {
                if (!uc["props"].hasOwnProperty(key)) {
                    continue;
                }
                let observer = uc.watch[key];
                if (observer && object[observer]) {
                    result.methods[observer] = object[observer];
                    result.methods["onekit_" + key] = object[observer];
                }
            }
            ////////////////
            addAttributes(uc.listeners,false);
            addAttributes(uc.properties,true);
        }
    }
    /////////////////////////
    eval('result.data = function () {return ' + stringify(data) + '}');
    window.exparser.uc[object.is] = result;
    //
    result.mixins = mixins;
    if (isElement) {
        if(result.template) {
            let template = result.template;
            for (let e in events) {
                if (!events.hasOwnProperty(e)) {
                    continue;
                }
                let event = events[e];
                let eventString = "";
                for (let e2 in event) {
                    if (!event.hasOwnProperty(e2)) {
                        continue;
                    }
                    let v2 = event[e2];
                  //  if (template.indexOf(`${e2}=`) < 0) {
                        eventString += ` ${e2}="${v2}"`;
                   // }
                }
                //
                let target, p;
                if (e == "onekit") {
                    let v = template.indexOf("<");
                    let p1 = template.indexOf(" ", v);
                    let p2 = template.indexOf(">", v);
                    if (p1 >= 0 && p2 >= 0) {
                        p = Math.min(p1, p2);
                    } else {
                        p = p2;
                    }
                    target = template.substr(0, p);
                } else {
                    target = `ref="${e}"`;
                    p = template.indexOf(target);
                }
                template = template.substr(0, p) + eventString + " " + template.substr(p);
            }
            result.template = template;

        }
        Vue.component(object["is"], result);
    }
};
let ONEKIT_JSON = {
    navigationBarBackgroundColor:"#00000000",
    navigationBarTextStyle:"black",
    navigationBarTitleText:"",
    navigationStyle:"default",
    backgroundColor:"#ffffff",
    backgroundTextStyle:"dark",
    backgroundColorTop:"#ffffff",
    backgroundColorBottom:"#ffffff",
    enablePullDownRefresh:false,
    onReachBottomDistance:50,
    pageOrientation:"portrait",
    disableScroll:false,
    disableSwipeBack:false,
    usingComponents:null
};
function onekitwx_json(json){
    for(let key in json){
        if(!json.hasOwnProperty(key)) {
            continue;
        }
        ONEKIT_JSON[key] = json[key];
    }
    ////////////
    $("#onekitwx_navigationBar").css("background",ONEKIT_JSON["navigationBarBackgroundColor"]);
    //
    $("#onekitwx_navigationBar_title").css("color",ONEKIT_JSON["navigationBarTextStyle"]);
    $("#onekitwx_navigationBar_back").attr("src","/OnekitWX/images/"+ONEKIT_JSON["navigationBarTextStyle"]+"/back.png");
    $("#onekitwx_navigationBar_more").attr("src","/OnekitWX/images/"+ONEKIT_JSON["navigationBarTextStyle"]+"/more.png");
    $("#onekitwx_navigationBar_quit").attr("src","/OnekitWX/images/"+ONEKIT_JSON["navigationBarTextStyle"]+"/quit.png");
    //
    $("#onekitwx_navigationBar_title").html(ONEKIT_JSON["navigationBarTitleText"]);
}
