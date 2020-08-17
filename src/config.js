
import wx from './onekit/wx.js';
const host = '14592619.qcloud.la';
const config = {
    requestUrl:'https://mp.weixin.qq.com',
    host:host,
    envId:'release-b86096',
    demoImageFileId:'cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg',
    demoVideoFileId:'cloud://release-b86096.7265-release-b86096/demo.mp4',

    
    //webpack配置
	configureWebpack: {
	    //关闭 webpack 的性能提示
	    performance: {
		    hints:false
	    },
 
	    //或者
 
	    //警告 webpack 的性能提示
	    performance: {
	    	hints:'warning',
	    	//入口起点的最大体积
	    	maxEntrypointSize: 50000000,
	    	//生成文件的最大体积
	    	maxAssetSize: 30000000,
	    	//只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	    	}
	    }
    }, 
};
module.exports = config;
