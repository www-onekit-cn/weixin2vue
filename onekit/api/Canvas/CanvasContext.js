export default class CanvasContext {
    static createContext() {
        let eCanvas = document.getElementsByTagName("canvas")[0];
        return new OnekitWX_CanvasContext(eCanvas);
    }

    static createCanvasContext(canvasId) {
        let eCanvas = $("[canvasid='" + canvasId + "']")[0];
        return new CanvasContext(eCanvas);
    }

    ///////////////////////////////////////////
    constructor(eCanvas) {
        this._eCanvas = eCanvas;
        this.allActions = [];
        this._actions = [];
        this.path = [];
    }

    set textBaseline(textBaseline) {
        this._actions.push({
            method: "setTextBaseLine",
            data: [textBaseline]

        });
    }

    getActions() {
        let result = OneKit.clone(this._actions);
        this._actions = [];
        return result;
    }

    save() {
        this._actions.push(
            {

                method: "save"

            }
        )
        ;
    }


    restore() {
        this._actions.push(
            {

                method: "restore"

            }
        )
        ;
    }


    setFillStyle(fillStyle) {

        let
            action =
                {

                    method: "setFillStyle"
                }
            ;
        if (fillStyle instanceof LinearGradient) {

            let
                linearGradient =
                    fillStyle;
            action["data"] = [


                "linear",
                linearGradient.info,
                linearGradient.colorStops

            ]
            ;
        } else if (fillStyle instanceof CircularGradient) {

            let
                circularGradient =
                    fillStyle;
            action["data"] = [


                "radial",
                circularGradient.info,
                circularGradient.colorStops

            ]
            ;
        } else{

            let color = fillStyle;
            action["data"] = [

                "normal", COLOR.toRGBAs(COLOR.parse(color))

            ]
            ;
        }
        this._actions.push(action);
    }


    setStrokeStyle(strokeStyle) {
        let
            action =
                {

                    method: "setStrokeStyle"

                }
            ;


            let color = strokeStyle;
            action["data"] = [
                "normal", COLOR.toRGBAs(COLOR.parse(color))
            ];

        this._actions.push(action);
    }


    strokeRect(Lx,
               Ly,
               Wx,
               Hy) {
        this._actions.push(
            {
                method: "strokePath",
                data: [
                    {
                        method: "rect",
                        data: [

                            Lx

                            ,

                            Ly

                            ,

                            Wx
                            ,

                            Hy

                        ]
                    }]
            });
    }


    fillRect(Lx,
             Ly,
             Wx,
             Hy) {
        this._actions.push(
            {

                method: "fillPath",
                data: [
                    {
                        method: "rect",
                        data: [

                            Lx
                            ,

                            Ly
                            ,

                            Wx
                            ,

                            Hy

                        ]
                    }]
            });
    }


    setLineWidth(lineWidth) {
        this._actions.push(
            {
                method: "setLineWidth",
                data: [

                    lineWidth

                ]
            });
    }


    moveTo(x,
           y) {
        this.path.push(
            {
                method: "moveTo",
                data: [

                    x
                    ,

                    y
                ]

            })
        ;
    }


    lineTo(x,
           y) {
        this.path.push(
            {
                method: "lineTo",
                data: [


                    x
                    ,

                    y

                ]

            })
        ;
    }

    setLineCap(lineCap) {
        this._actions.push(
            {

                method: "setLineCap",
                data: [
                    lineCap]
            });
    }

    setLineJoin(lineJoin) {
        this._actions.push(
            {
                method: "setLineJoin",
                data: [


                    lineJoin
                ]

            })
        ;
    }


    setMiterLimit(miterLimit) {
        this._actions.push(
            {

                method: "setMiterLimit",
                data: [

                    miterLimit
                ]
            });
    }


    clearRect(x,
              y,
              width,
              height) {
        this._actions.push(
            {
                method: "clearRect",
                data: [


                    x
                    ,

                    y
                    ,

                    width
                    ,

                    height
                ]
            });
    }

    rect(x,
         y,
         width,
         height) {
        this.path.push(
            {

                method: "rect",
                data: [

                    x
                    ,
                    y
                    ,
                    width
                    ,
                    height
                ]
            });
    }


    fill() {
        this._actions.push(
            {

                method: "fillPath",
                data: OneKit.clone(this.path)
            }
        )
        ;
    }


    stroke() {
        this._actions.push(
            {

                method: "strokePath",
                data: OneKit.clone(this.path)
            }
        )
        ;
    }


    arc(x,
        y,
        r,
        sAngle,
        eAngle,
        counterclockwise=false) {
        this.path.push(
            {

                method: "arc",
                data: [


                    x
                    ,

                    y
                    ,

                    r
                    ,

                    sAngle
                    ,

                    eAngle
                    ,

                    counterclockwise
                ]
            });
    }


    bezierCurveTo(cp1x,
                  cp1y,
                  cp2x,
                  cp2y,
                  x,
                  y) {
        this.path.push(
            {

                method: "bezierCurveTo",
                data: [

                    cp1x
                    ,

                    cp1y
                    ,

                    cp2x
                    ,

                    cp2y
                    ,

                    x
                    ,

                    y
                ]
            });
    }


    quadraticCurveTo(cpx,
                     cpy,
                     x,
                     y) {
        this.path.push(
            {

                method: "quadraticCurveTo",
                data: [

                    cpx
                    ,

                    cpy
                    ,

                    x
                    ,
                    y
                ]
            }
        );
    }


    scale(sw,
          sh) {
        this._actions.push(
            {

                method: "scale",
                data: [

                    sw
                    ,

                    sh
                ]
            });
    }


    rotate(angle) {
        this._actions.push(
            {

                method: "rotate",
                data: [


                    angle
                ]
            });
    }


    translate(x,
              y) {
        this._actions.push(
            {

                method: "translate",
                data: [

                    x
                    ,
                    y
                ]
            });
    }


    setFontSize(s) {
        this._actions.push(
            {

                method: "setFontSize",
                data: [

                    s
                ]
            });
    }


    fillText(t,
             x,
             y) {
        this._actions.push(
            {

                method: "fillText",
                data: [
                    t,

                    x
                    ,

                    y
                ]
            });
    }


    setTextAlign(align) {
        this._actions.push(
            {

                method: "setTextAlign",
                data: [
                    align]
            });
    }


    drawImage(imageResource,
              x,
              y,
              width,
              height) {
        this._actions.push(
            {

                method: "drawImage",
                data: [


                    imageResource,


                    x,

                    y,
                    width,
                    height
                ]
            });
    }


    setGlobalAlpha(alpha) {
        this._actions.push(
            {

                method: "setGlobalAlpha",
                data: [
                    alpha * 255
                ]
            });
    }


    createLinearGradient(x0,
                         y0,
                         x1,
                         y1) {
        return new OnekitWX_LinearGradient(x0, y0, x1, y1);
    }


    createCircularGradient(x,
                           y,
                           r) {
        return new OnekitWX_CircularGradient(x, y, r);
    }


    setShadow(dx,
              dy,
              radius,
              color) {
        this._actions.push(
            {
                method: "setShadow",
                data: [
                    dx,
                    dy,

                    radius, COLOR.toRGBAs(COLOR.parse(color))]
            });
    }


    beginPath() {
        this.path = [];
    }


    closePath() {
        this.path.push(
            {

                method: "closePath"

            }
        )
        ;
    }


    setLineDash(lineDashs,
                v) {
        this._actions.push(
            {

                method: "setLineDash",
                data: [
                    lineDashs,
                    v]
            });
    }

    draw(reserve,callback) {
      /*  this.allActions.push({
            reserve: reserve,
            actions: this._actions
        });*/
        //
        Canvas._draw(this._eCanvas,this._actions,reserve);
        //
        this._actions = [];
        //
        callback();
    }

    clip() {

    }
}
