const utils = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'weixin2vue': utils.resolve('weixin2vue/index.js'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}