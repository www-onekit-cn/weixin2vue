function renderResizable(status){
  console.log(status)
    switch(status){
    case "lock":
      return '锁定屏幕中';
    case "unlock":
      return "可旋转屏幕";
  }
}
export default {
    renderResizable
  }
