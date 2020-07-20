  class OnekitWX_CircularGradient extends OnekitWX_Gradient {
     constructor(x, y, r) {
         super();

         this.info = [
             x, y, r
         ];

     }

       toString() {
         return String_format("type:'Circular',points:?,stops:?", this.info, this.colorStops);
     }
 }
