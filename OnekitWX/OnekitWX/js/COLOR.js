let COLOR = {};
COLOR.parse = function(str){
    let eTemp = document.createElement('span');
    eTemp.style.color = str;
    return eTemp.style.color;
};
COLOR.toRGBAs = function(color) {
    let str,array;
    if (color.indexOf("rgb(")==0) {
        str = color.substr("rgb(".length,color.length-1);
        array = str.split(",");
        array = array.map(function (item) {
            return parseInt(item.trim());
        });
        array.push(255);
        return array;
    } else if (color.indexOf("rgba(")==0) {
        str = color.substr("rgba(".length,color.length-1);
        array = str.split(",");
        array = array.map(function (item) {
            return parseInt(item.trim());
        });
        return array;
    } else {
        return null;
    }
};
COLOR.fromRGBAs = function (array) {
    let r = array[0];
    let g = array[1];
    let b = array[2];
    let a = array[3];
    return "rgba("+r+","+g+","+b+","+a/255.0+")";
};