var funcA = function(e,ins){
  var scrollTop = e.detail.scrollTop
  if(scrollTop > 200){
  ins.selectComponent('.page-group').setStyle({
    "background-color":'rgba(235, 235, 235, 1)',
    'z-index':'999'
  }).addClass('page-group-position');
  ins.selectComponent('.page-banner .image').setStyle({
      opacity:1 - Math.max(0,scrollTop / 200)
    });
  ins.selectComponent('.goods-list').setStyle({
      "margin-top":'59px'
    });
} else {
  ins.selectComponent('.goods-list').setStyle({
      "margin-top":'0'
    });
  ins.selectComponent('.page-group').setStyle({
    "background-color":(('rgba(235, 235, 235, ' + Math.max(0,scrollTop / 200))) + ')'
  }).removeClass('page-group-position');
  ins.selectComponent('.page-banner .image').setStyle({
      opacity:1 - Math.max(0,scrollTop / 200)
    });
  console.log(ins);
}
}
var funcD = function(e,ins){
  var scrollTop = e.detail.scrollTop
  if(scrollTop > 200){
  ins.selectComponent('.page-group').setStyle({
    "background-color":'rgba(95, 95, 95, 1)',
    'z-index':'999'
  }).addClass('page-group-position');
  ins.selectComponent('.page-banner .image').setStyle({
      opacity:1 - Math.max(0,scrollTop / 200)
    });
  ins.selectComponent('.goods-list').setStyle({
      "margin-top":'59px'
    });
} else {
  ins.selectComponent('.goods-list').setStyle({
      "margin-top":'0'
    });
  ins.selectComponent('.page-group').setStyle({
    "background-color":(('rgba(95, 95, 95, ' + Math.max(0,scrollTop / 200))) + ')'
  }).removeClass('page-group-position');
  ins.selectComponent('.page-banner .image').setStyle({
      opacity:1 - Math.max(0,scrollTop / 200)
    });
}
}
export default {
    funcA,
    funcD
  }
