/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/25.
 */
function fix(px) {
  return parseFloat(px.substring(2));
}
function dp2px(v) {
  return v;
}
///////////////////////////////////////////
String.isEmpty = function(str) {
  return str == null || str == '';
};
String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, '');
};
String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2);
};
//////////////////////////////////
class UUID {
  static randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

/**
 * 替换错误提示中的字符串
 *
 * @param {String} 错误模板
 * @param {Array} 需要替换的字符串
 * @returns {String} 替换后的错误提示
 */
String.format = function(str) {
  for (i = 0; i < arguments.length - 1; i++) {
    str = str.replace(`{${i}}`, arguments[i + 1]);
  }
  return str;
};

/**
 * 首字母大写
 *
 * @param {String}
 * @returns {String}
 */
String._toUpperCaseOfFirstLetter = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 把请求响应头部字符串转换为键值对
 * eg: 输入"Accept-ranges: bytes\nContent-length: 9"
 *     输出{Accept-ranges: "bytes",Content-length: "9"}
 *
 * @param {String} str 字符串
 * @returns {Object} 键值对
 */
String._header2json = function(str) {
  var strArray = str.split('\n');
  var headers = {};

  for (let i = 0; i < strArray.length - 1; i++) {
    // "strArray.length - 1" 是为了消除最后一个空字符串
    var array = strArray[i].split(': ');
    var key = String._toUpperCaseOfFirstLetter(array[0]); // 首字母大写
    var value = array[1];
    headers[key] = value;
  }
  return headers;
};

/**
 * 判断传入的变量是否为指定类型
 *
 * @param {*} valueName 变量名
 * @param {*} value 要判断的变量
 * @param {*} targetType 指定的类型
 */
// function _judgeValue(functionName, args) {
//   //   if (typeof value !== targetType) {
//   //     throw new Error(String.format(onekit_global.error_body, valueName, String._toUpperCaseOfFirstLetter(targetType), typeof value));
//   //   }
//   var errorInfo = String.format(onekit_global.error_head, functionName);
//   var hasError = false;
//   console.log(args);
//   for (const item in args) {

//     if (typeof item.value !== targetValue) {
//         errorInfo += String.format(onekit_global.error_body, valueName, String._toUpperCaseOfFirstLetter(targetType), typeof value);
//         hasError = true;
//     }
//   }
//   if(hasError){
//     throw new Error(errorInfo);
//   }
// }

/**
 * 执行成功回调函数
 *
 * @param {*} success
 * @param {*} complete
 * @param {*} result
 */
function _success_callback(success, complete, result) {
  if (success) {
    success(result);
  }
  if (complete) {
    complete(result);
  }
}

/**
 * 执行失败回调函数
 *
 * @param {*} fail
 * @param {*} complete
 * @param {*} result
 */
function _fail_callback(fail, complete, result) {
  if (fail) {
    fail(result);
  }
  if (complete) {
    complete(result);
  }
}

/**
 * 判断参数是否为指定类型
 * eg: 输入：(['hello', { name:'tom' }], ['string','object'])
 *
 * @param {Array} params 要判断的参数
 * @param {Array} paramsType 参要判断的参数的类型
 */
function checkParams(params, paramsType) {
  // 当 params 只有一个参数并且不是数组时，将其转换为数组
  let temp;
  if (params && !(params instanceof Array)) {
    temp = params;
    params = new Array();
    params[0] = temp;
  }

  if (paramsType && !(paramsType instanceof Array)) {
    temp = paramsType;
    paramsType = new Array();
    paramsType[0] = temp;
  }

  // params 和 paramsType 不相等
  if (params.length !== paramsType.length) {
    throw new Error(
      `[Onekit js.js]Parameter's length(${params.length}) not equal paramsType's length(${paramsType.length})`
    );
  }

  // 判断类型
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] !== paramsType[i]) throw new Error(`Parameter ${i + 1} should be a ${paramsType[i]}`);
  }
}
