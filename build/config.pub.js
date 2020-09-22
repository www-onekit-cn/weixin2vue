const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue-lyxlwz': utils.resolve('onekit/index.js')
        }
    },
}