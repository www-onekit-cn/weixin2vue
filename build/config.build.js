const {resolve, getComponentEntries} = require('./utils')
const pub = require('./config.pub')
const CopyWebpackPlugin = require("copy-webpack-plugin") //引入插件

module.exports = {
    outputDir: resolve('lib'),
    assetsDir: resolve('public'),
    publicPath: resolve('./'),
    configureWebpack: {
        entry: {
            ...getComponentEntries('onekit'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
            libraryExport: 'default',
            library: 'vue-lyxlwz',
            chunkFilename: "[id]/index.js"
        },
        resolve: pub.resolve,
        plugins: [
            new CopyWebpackPlugin({
             patterns:[{
              from: "./public",
              to: 'public'
             }]
            })
        ]
    },
    css: {
        extract:false,
        sourceMap:true,
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('html')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')

        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    }
}