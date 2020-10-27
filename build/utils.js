const fs = require('fs')
const path = require('path')
const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)
function  getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const componentEntries = files.reduce((ret, item) => {
        const itemPath = join(path, item)
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            if( ['weixin2vue/ui','weixin2vue/pages'].indexOf(itemPath)>=0){
      
                 ret[item] = resolve(join(itemPath, 'index.js'))
            } 
            
          }else {
              if(item==='index.js'){
             const [name] = item.split('.')
             var folder = (path!="weixin2vue"?(path.replace("weixin2vue/","")+"/"):"");
             ret[folder+name] = resolve(`${itemPath}`)
              }
         }
        return ret
    }, {})
    console.dir(componentEntries)
    return componentEntries
}
module.exports = {
    resolve,
    getComponentEntries
}