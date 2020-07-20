class OnekitWX_AudioContext {
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

    console.warn(String_format(ONEKIT_GLOBAL_NOT_MAINTAIN, '<audio/>', 'createInnerAudioContext'));

    return ac;
  }

  // InnerAudioContext
  static createInnerAudioContext() {
    return new IAC();
  }

}

// IAC for InnerAudioContext
// TODO: 未完成，会报错
function IAC() {
  let audioContainer = document.createElement('audio');
  audioContainer.setAttribute('controls', 'controls');
  document.body.appendChild(audioContainer);
  let o = new Object();
  o.autoplay = false;
  Object.defineProperties(o, 'autoplay', {
    get: function() {
      return autoplay;
    },
    set: function(value) {
      console.log('define');
      autoplay = value;
      // o.autoplay = value;
      // audioContainer.autoplay = value;
    }
  });
  return o;
}
