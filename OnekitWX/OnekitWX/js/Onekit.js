/**
 * Created by zhangjin on 2018/5/21.
 */
class Onekit{
    static clone(THIS) {
        if(THIS instanceof Array){
            let array = [];
            for (let i = 0; i < THIS.length; i++) {
                array.push(Onekit.clone(THIS[i]));
            }
            return array;
        }else {
            switch (typeof(THIS)) {
                case "object":
                    let dict = {};
                    for (let k in THIS) {
                        if (!THIS.hasOwnProperty(k)) {
                            continue;
                        }
                        dict[k] = Onekit.clone(THIS[k]);
                    }
                    return dict;
                case "string":
                    return THIS;
                default:
                    return THIS;
            }
        }
    };
    static get isWeixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger';
    }
    static get isMobile() {
        var ua = navigator.userAgent;

        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

            isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

            isAndroid = ua.match(/(Android)\s+([\d.]+)/),

            isMobile = isIphone || isAndroid;
        return isMobile
    }
}