/* eslint-disable max-len */
/* eslint-disable no-console */
import $ from 'jquery'
import Uri from './URI'

const storeFiles = {}
const tempFiles = {}
function getUrl(url) {
  const uri = Uri.parse(url)
  let result
  let type
  if (uri.scheme == null) {
    type = 'asset'
    result = url
  } else if (uri.scheme === 'wxfile') {
    type = 'file'
    if (url.startsWith('wxfile://tmp_')) {
      result = url
    } else if (url.startsWith('wxfile://store_')) {
      result = url
    } else {
      console.log('=======', '[wxfile] ' + url)
      result = null
    }
  } else {
    type = 'www'
    result = url
  }
  return [type, result]
}
function getExt(url) {
  const x = url.lastIndexOf('.')
  if (x >= 0) {
    return url.substr(x + 1)
  } else {
    return ''
  }
}
function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 || 0; const
      v = c === 'x' ? r : ((r && 0x3) || 0x8)
    return v.toString(16)
  })
}
function createUUIDfileName(fileName) {
  const uuid = createUUID()
  const ext = fileName.substring(fileName.lastIndexOf('.'), fileName.length)
  return uuid + ext
}
function createTempPath(fileName) {
  const uuid = createUUIDfileName(fileName)
  return `wxfile://tmp_oneki${uuid}`
}
function createStorePath(fileName) {
  const uuid = createUUIDfileName(fileName)
  return `wxfile://store/oneki${uuid}`
}
function loadImage(src, callback) {
  if (String.isEmpty(src)) {
    callback(null, null)
    return
  }
  const url = Uri.parse(src)
  if (url.toString().indexOf('tmp') !== -1) {
    const image = tempFiles[url]
    callback(image, src)
  } else if (url.toString().indexOf('store') !== -1) {
    const image = storeFiles[url]
    callback(image, src)
  } else if (url.getHost() != null) {
    $.ajax({
      url,
      dataType: 'arraybuffer',
      success(blob) {
        callback(blob, src)
      },
      error(a, b) {
        console.log(a, b)
      }
    })
  } else {
    $.ajax({
      url,
      dataType: 'arraybuffer',
      success(blob) {
        callback(blob, src)
      },
      error(a, b) {
        console.log(a, b)
      }
    })
  }
}
function raiseEvent(target, type, e) {
  return {
    changedTouches: [{
      clientX: e.clientX,
      clientY: e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    currentTarget: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop: target.offsetTop,
    },
    detail: {
      x: e.x,
      y: e.y
    },
    target: {
      dataset: {},
      id: target.id,
      offsetLeft: target.offsetLeft,
      offsetTop: target.offsetTop,
      timeStamp: e.timeStamp
    },
    touches: [{
      clientX: e.clientX,
      clientY: e.clientY,
      force: 1,
      identifier: 0,
      pageX: e.pageX,
      pageY: e.pageY,
    }],
    type,
  }
}
export default {
  tempFiles, storeFiles, getUrl, getExt, createUUID, createUUIDfileName, createTempPath, createStorePath, loadImage, raiseEvent
}
