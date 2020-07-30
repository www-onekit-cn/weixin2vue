import OnekitWX_Download from "./Download"
export class OnekitWX_mDNS extends OnekitWX_Download{
  static offLocalServiceResolveFail() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceResolveFail() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceDiscoveryStop() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceDiscoveryStop() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceLost() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceLost() {
    console.error('HTML5 is not support mDNS!!');
  }
  static offLocalServiceFound() {
    console.error('HTML5 is not support mDNS!!');
  }
  static onLocalServiceFound() {
    console.error('HTML5 is not support mDNS!!');
  }
  static stopLocalServiceDiscovery() {
    console.error('HTML5 is not support mDNS!!');
  }
  static startLocalServiceDiscovery() {
    console.error('HTML5 is not support mDNS!!');
  }
}
