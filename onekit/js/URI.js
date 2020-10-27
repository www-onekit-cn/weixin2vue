export default class URI {
  constructor(str) {
    const s = str.indexOf(':')
    if (s >= 0) {
      this.scheme = str.substr(0, s)
      const h1 = str.indexOf('//')
      const h2 = str.indexOf('/', h1)
      this.host = str.substring(h1 + 2, h2)
    }
    const q = str.indexOf('?')
    if (q >= 0) {
      this.query = str.substr(q + 1)
    }
  }

  get params() {
    const array = this.query.split('&')
    const result = {}
    for (const item of array) {
      const arr = item.split('=')
      result[arr[0]] = arr[1]
    }
    return result
  }
}
