/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */

export default class MapContext {
  constructor(vueMapContext, id) {
    this.vueMapContext = vueMapContext
    this.id = id
  }

  addCustomLayer(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.addCustomLayer(wx_object)
  }

  addGroundOverlay(wx_object) {
    // 支付宝组件ground-overlays
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.addGroundOverlay(wx_object)
  }

  addMarkers(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.addMarkers(wx_object)
  }

  fromScreenLocation(wx_object) {
    return this.vueMapContext.screenToMap(wx_object)
  }

  getCenterLocation(object) {
    return this.vueMapContext.getCenterLocation(object)
  }

  getRegion(object) {
    return this.vueMapContext.getRegion(object)
  }

  getRotate(object) {
    return this.vueMapContext.getRegion(object)
  }

  getScale(object) {
    return this.vueMapContext.getScale(object)
  }

  getSkew(object) {
    return this.vueMapContext.getSkew(object)
  }

  includePoints(object) {
    return this.vueMapContext.includePoints(object)
  }

  initMarkerCluster(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.initMarkerCluster(wx_object)
  }

  moveAlong(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.moveAlong(wx_object)
  }

  moveToLocation(object) {
    return this.vueMapContext.moveToLocation(object)
  }

  on(eventName, handlers) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.on(eventName, handlers)
  }

  openMapApp(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.openMapApp(wx_object)
  }

  removeGroundOverlay(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.removeGroundOverlay(wx_object)
  }

  removeMarkers(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.removeMarkers(wx_object)
  }

  setCenterOffset(object) {
    return this.vueMapContext.moveToLocation(object)
  }

  toScreenLocation(object) {
    return this.vueMapContext.moveToLocation(object)
  }

  translateMarker(object) {
    return this.vueMapContext.translateMarker(object)
  }

  updateGroundOverlay(wx_object) {
    const map = this.fn_global().onekit_nodes[`_${this.id}`]
    map.updateGroundOverlay(wx_object)
  }
}
