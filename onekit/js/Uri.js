export default class Uri{
    constructor(str){
        let s = str.indexOf(":");
        if(s>=0){
            this.scheme = str.substr(0,s);
            let h1 = str.indexOf("//");
            let h2 = str.indexOf("/",h1);
            this.host = str.substring(h1+2,h2);
        }
        let q = str.indexOf("?");
        if(q>=0){
          this.query =  str.substr(q+1);
        }
    }
    get params(){
      let array = this.query.split("&");
      let result = {};
      for(let item of array){
        let arr = item.split("=");
        result[arr[0]] = arr[1];
      }
      return result;
    }
}
