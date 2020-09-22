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
            if( ['onekit/ui'].indexOf(itemPath)>=0){
      
                 ret[item] = resolve(join(itemPath, 'index.js'))
            }else {
               var data = getComponentEntries(itemPath)
               for(var key in data){
                
                ret[key] = data[key]; 
               }
             }
         }else {
            const [name] = item.split('.')
            var folder = (path!="onekit"?(path.replace("onekit/","")+"/"):"");
            ret[folder+name] = resolve(`${itemPath}`)
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