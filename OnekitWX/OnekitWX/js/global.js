/**
 * Created by Wangjunjie on 2018/12/25.
 */

// 错误提示模板
const ONEKIT_GLOBAL = {
  error_head: '{0}:fail parameter error: ',
  error_body: 'parameter.{0} should be {1} instead of {2};'
};
// 不再维护提示模板
// eg: '<audio/>' 组件不再维护，建议使用能力更强的 'wx.createInnerAudioContext' 接口
const ONEKIT_GLOBAL_NOT_MAINTAIN = "'{0}' 组件不再维护，建议使用能力更强的 'wx.{1}' 接口";
