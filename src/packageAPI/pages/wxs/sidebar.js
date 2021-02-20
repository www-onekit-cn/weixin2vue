var newmark = startmark = 0
var status = 0
function touchstart(e,ins){
  var pageX = (e.touches[0] || e.changedTouches[0]).pageX
  startmark = newmark = pageX
}
function touchmove(e,ins){
  var pageX = (e.touches[0] || e.changedTouches[0]).pageX
  console.log('pageX',pageX)
  newmark = pageX
  var data = {
      windowWidth:e.target.dataset.width
    }
  if(startmark < pageX){
    if(((data.windowWidth * 0.4)) > Math.abs(newmark - startmark)){
      console.log('newmark - startmark',newmark - startmark);
      ins.selectComponent('.page-top').setStyle({
          transform:(('translateX(' + Math.min(data.windowWidth * 0.4,((status == 1?data.windowWidth * 0.4:0 + newmark)) - startmark))) + 'px)'
        });
    }
  }
  if(startmark > pageX){
    ins.selectComponent('.page-top').setStyle({
        transform:(('translateX(' + Math.max(0,((status == 1?data.windowWidth * 0.4:0 + newmark)) - startmark))) + 'px)'
      });
  }
}
function touchend(e,ins){
  var pageX = (e.touches[0] || e.changedTouches[0]).pageX
  newmark = pageX
  var data = {
      windowWidth:e.target.dataset.width
    }
  if(startmark < pageX){
    if(((data.windowWidth * 0.2)) < Math.abs(newmark - startmark)){
      ins.selectComponent('.page-top').setStyle({
          transform:(('translateX(' + ((data.windowWidth * 0.4)))) + 'px)'
        });
      status = 1;
    } else {
      ins.selectComponent('.page-top').setStyle({
          transform:'translateX(0px)'
        });
      status = 0;
    }
  }
  if(startmark > newmark){
    ins.selectComponent('.page-top').setStyle({
        transform:'translateX(0px)'
      });
    status = 0;
  }
}
export default {
    touchstart,
    touchmove,
    touchend
  }
