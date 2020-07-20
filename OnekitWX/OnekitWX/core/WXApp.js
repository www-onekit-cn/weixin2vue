/**
 * Created by zhangjin on 2018/4/26.
 */
function App(object) {
}
$(document).ready(function() {
    $.getJSON("./app.json", function (json) {
        if (json["tabBar"]) {
            location.href = "../../index.htm";
        } else {
            location.href = Onekit_WX.url(json["pages"][0],true);
        }
    });
});