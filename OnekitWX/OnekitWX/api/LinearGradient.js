  class OnekitWX_LinearGradient extends OnekitWX_Gradient {

     constructor(x0, y0, x1, y1) {
         super();
         this.info = [
             x0, y0, x1, y1
         ];
     }

     toString() {
         return String_format("type:'linear',points:?,stops:?", this.info, this.colorStops);
     }
 }
