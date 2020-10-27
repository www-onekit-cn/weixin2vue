export default {
  props: {
    'onekit-id': {type: String, default: ''},
    'onekit-class': {type: String, default: ''},
    'onekit-style': {type: String, default: ''}
  },
  methods: {
    ui_click() {
      this.$emit('Tap')
    }
  }
}
