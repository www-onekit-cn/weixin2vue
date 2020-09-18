const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'vue-lyxlwz': utils.resolve('onekit/index.js'),
           'vue-lyxlwz-wx': utils.resolve('onekit/wx.js'),
        }
    },
}