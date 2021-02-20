/* eslint-disable */
var startX = 0
var startY = 0
var lastLeft = lastTop = 50
function touchstart(event,ins){
  var touch = (event.touches[0] || event.changedTouches[0])
  startX = touch.pageX
  startY = touch.pageY
  ins.callMethod('testCallmethod',{
      complete:function(res){
        console.log('args',res)
      }
    })
}
function touchmove(event,ins){
  var touch = (event.touches[0] || event.changedTouches[0])
  var pageX = touch.pageX
  var pageY = touch.pageY
  var left = ((pageX - startX)) + lastLeft
  var top = ((pageY - startY)) + lastTop
  startX = pageX
  startY = pageY
  lastLeft = left
  lastTop = top
  ins.selectComponent('.movable').setStyle({
      left:left + 'px',
      top:top + 'px'
    })
}
export default {
    touchstart,
    touchmove
  }
