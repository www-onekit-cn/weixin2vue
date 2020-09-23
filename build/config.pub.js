const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'weixin2vue': utils.resolve('onekit/index.js')
        }
    },
}