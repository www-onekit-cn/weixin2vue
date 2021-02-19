export default class PickerTools {

  static findColumIndexDiffrent(arr1, arr2) {
    let resulIndex;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        resulIndex = i
      }
    }
    return resulIndex
  }

  static findValueIndexDiffrent(arr1, arr2) {
    let resulIndex;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        resulIndex = arr1[i]
      }
    }
    return resulIndex
  }

  static debounce(fn, delay) {
        let timer = null
        return function() {
        let context = this
        let args = arguments
        clearTimeout(timer);
        timer = setTimeout(function() {
        fn.apply(context, args)
        }, delay)
        }
    }
}