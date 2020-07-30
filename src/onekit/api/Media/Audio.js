import OnekitWX_Location from "../Location/Location"
export default class OnekitWX_Audio extends OnekitWX_Location{
  static setInnerAudioOption(){}
  static getAvailableAudioSources(){}
  static setInnerAudioOption(){}
    // AudioContext
    static createAudioContext(id, object) {
      checkParams(id, 'string');
      let ac = document.getElementById(id);

      ac.setSrc = function(src) {
        ac.src = src;
      };

      ac.seek = function(position) {
        ac.currentTime = position;
      };

      //console.warn(String_format(ONEKIT_GLOBAL_NOT_MAINTAIN, '<audio/>', 'createInnerAudioContext'));

      return ac;
    }
}
