/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.webCanvasContext = alipayCanvasContext
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.webCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  arcTo(x1, y1, x2, y2, radius) {
    return this.webCanvasContext.arcTo(x1, y1, x2, y2, radius)
  }

  beginPath() {
    return this.webCanvasContext.beginPath()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.webCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  clearRect(x, y, width, height) {
    return this.webCanvasContext.clearRect(x, y, width, height)
  }

  clip() {
    return this.webCanvasContext.createCircularGradient()
  }

  closePath() {
    return this.webCanvasContext.createLinearGradient()
  }

  createCircularGradient(x, y, r) {
    return this.webCanvasContext.createCircularGradient(x, y, r)
  }

  createLinearGradient(x0, y0, x1, y1) {
    return this.webCanvasContext.createLinearGradient(x0, y0, x1, y1)
  }

  createPattern(image, repetition) {
    return this.webCanvasContext.createPattern(image, repetition)
  }

  draw(reserve, callback) {
    return this.webCanvasContext.draw(reserve, callback)
  }

  drawImage(imageResource, sx, sy) {
    const sWidth = 0
    const sHeight = 0
    const dx = 0
    const dy = 0
    const dWidth = 0
    const dHeight = 0
    return this.webCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  fill() {
    return this.webCanvasContext.fill()
  }

  fillRect(x, y, width, height) {
    return this.webCanvasContext.fillRect(x, y, width, height)
  }

  fillText(text, x, y) {
    this.webCanvasContext.fillStyle = '#000'
    return this.webCanvasContext.fillText(text, x, y)
  }

  lineTo(x, y) {
    return this.webCanvasContext.lineTo(x, y)
  }

  measureText(text) {
    return this.webCanvasContext.measureText(text)
  }

  moveTo(x, y) {
    return this.webCanvasContext.moveTo(x, y)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.webCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  rect(x, y, width, height) {
    return this.webCanvasContext.rect(x, y, width, height)
  }

  restore() {
    return this.webCanvasContext.restore()
  }

  rotate(rotate) {
    return this.webCanvasContext.rotate(rotate)
  }

  save() {
    return this.webCanvasContext.save()
  }

  scale(scaleWidth, scaleHeight) {
    return this.webCanvasContext.scale(scaleWidth, scaleHeight)
  }

  //
  set fillStyle(color) {
    this.webCanvasContext.fillStyle = color
  }

  get fillStyle() {
    return this.webCanvasContext.getFillStyle()
  }

  setFillStyle(color) {
    this.fillStyle = color
  }

  //
  set font(fontSize) {
    this.webCanvasContext.font = fontSize
  }


  setFontSize(fontSize) {
    this.webCanvasContext.font = fontSize
  }

  //
  set globalAlpha(alpha) {
    this.webCanvasContext.setGlobalAlpha(alpha)
  }

  get globalAlpha() {
    return this.webCanvasContext.getGlobalAlpha()
  }

  setGlobalAlpha(alpha) {
    this.globalAlpha = alpha
  }

  //
  set lineCap(lineCap) {
    this.webCanvasContext.setLineCap(lineCap)
  }

  get lineCap() {
    return this.webCanvasContext.getLineCap()
  }

  setLineCap(lineCap) {
    this.lineCap = lineCap
  }

  //
  set lineDashOffset(offset) {
    this.webCanvasContext.setLineDash([5, 5], offset)
  }

  get lineDashOffset() {
    return this.webCanvasContext.getLineDash()
  }

  setLineDash(pattern, offset) {
    this.lineDashOffset = (pattern, offset)
  }

  //
  set lineJoin(lineJoin) {
    this.webCanvasContext.setLineJoin(lineJoin)
  }

  get lineJoin() {
    return this.webCanvasContext.getLineJoin()
  }

  setLineJoin(lineJoin) {
    this.lineJoin = lineJoin
  }

  //
  set lineWidth(lineWidth) {
    this.webCanvasContext.setLineWidth(lineWidth)
  }

  get lineWidth() {
    return this.webCanvasContext.getLineWidth()
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  //
  set miterLimit(miterLimit) {
    this.webCanvasContext.setMiterLimit(miterLimit)
  }

  get miterLimit() {
    return this.webCanvasContext.getMiterLimit()
  }

  setMiterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  //
  set shadowOffsetX(offsetX) {
    const offsetY = this._shadowOffsetY || 0
    const blur = this._shadowBlur || 0
    const color = this._shadowColor || 'black'
    this._shadowOffsetX = offsetX
    this.webCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowOffsetX() {
    return this._shadowOffsetX || 0
  }

  set shadowOffsetY(offsetY) {
    const offsetX = this._shadowOffsetX || 0
    const blur = this._shadowBlur || 0
    const color = this._shadowColor || 'black'
    this._shadowOffsetY = offsetY
    this.webCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowOffsetY() {
    return this._shadowOffsetY || 0
  }

  set shadowBlur(blur) {
    const offsetX = this._shadowOffsetX || 0
    const offsetY = this._shadowOffsetY || 0
    const color = this._shadowColor || 'black'
    this._shadowBlur = blur
    this.webCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowBlur() {
    return this._shadowBlur || 0
  }

  set shadowColor(color) {
    const offsetX = this._shadowOffsetX || 0
    const offsetY = this._shadowOffsetY || 0
    const blur = this._shadowBlur || 0
    this._shadowColor = color
    this.webCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowColor() {
    return this._shadowColor || 'black'
  }

  setShadowBlur(offsetX, offsetY, blur, color) {
    this.shadowOffsetX = offsetX
    this.shadowOffsetY = offsetY
    this.shadowBlur = blur
    this.shadowColor = color
  }


  //
  set strokeStyle(color) {
    this.webCanvasContext.setStrokeStyle(color)
  }

  get strokeStyle() {
    return this.webCanvasContext.getStrokeStyle()
  }

  setStrokeStyle(color) {
    this.strokeStyle = color
  }

  setTextAlign(align) {
    return this.webCanvasContext.setTextAlign(align)
  }

  setTextBaseline(textBaseline) {
    return this.webCanvasContext.setTextBaseline(textBaseline)
  }

  setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.webCanvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  stroke() {
    return this.webCanvasContext.stroke()
  }

  strokeRect(x, y, width, height) {
    return this.webCanvasContext.strokeRect(x, y, width, height)
  }

  strokeText(text, x, y, maxWidth = 0) {
    return this.webCanvasContext.strokeText(text, x, y, maxWidth)
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.webCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  translate(x, y) {
    return this.webCanvasContext.translate(x, y)
  }
}
