function header2json(str) {
  const strArray = str.split('\n');
  const headers = {};

  for (let i = 0; i < strArray.length - 1; i++) {
    // "strArray.length - 1" 是为了消除最后一个空字符串
    const array = strArray[i].split(': ');
    const key = String._toUpperCaseOfFirstLetter(array[0]); // 首字母大写
    headers[key] = array[1];
  }
  return headers;
}
function isWeixin() {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) === 'micromessenger';
}
function isMobile() {
  const ua = navigator.userAgent;

  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

      isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

      isAndroid = ua.match(/(Android)\s+([\d.]+)/);
  return isIphone || isAndroid
}
export {header2json,isWeixin,isMobile}