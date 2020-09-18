import OnekitWX_Request from "./Request"
export default class OnekitWX_UDPSocket extends OnekitWX_Request{
  static createUDPSocket(){
    console.error('HTML5 is not support UDP!!');
  }
}
