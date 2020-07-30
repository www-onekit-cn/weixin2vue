import OnekitWX_Update from "../Basic/Update"
export class OnekitWX_Canvas extends OnekitWX_Update{
    static drawCanvas(object){
        let canvasId = object.canvasId;
        let actions = object.actions;
        let reserve = object.reserve;
        ///////////////////
        let eCanvas = $("[canvasid='" + canvasId + "']")[0];
        Canvas._draw(eCanvas,actions,reserve);
    }
    static _draw(eCanvas, actions, reserve) {

        window.requestAnimationFrame(function () {

            let canvas = eCanvas.getContext("2d");
            canvas.clearRect(0,0,eCanvas.width,eCanvas.height);
            for (let a = 0; a < actions.length; a++) {
                let action = actions[a];
                let data = action.data;
                let method = action.method;
                switch (method) {
                    case "canvasToTempFilePath":
                        break;
                    case "save":
                        canvas.save();
                        break;
                    case "restore":
                        canvas.restore();
                        break;
                    case "setStrokeStyle":
                        canvas.strokeStyle = COLOR.fromRGBAs(data[1]);
                        break;
                    case "setFillStyle":
                        let fillStyle = data[0];
                        if (fillStyle == "normal") {
                            let setFillStyle = COLOR.fromRGBAs(data[1]);// 设置填充画笔颜色
                            canvas.fillStyle = setFillStyle;
                        } else if (fillStyle == "radial") {
                            let colorStops = data[2];
                            let colors = [colorStops.length];
                            let stops = [colorStops.length];
                            for (let s = 0; s < colorStops.length; s++) {
                                stops[s] = (colorStops[s])[0];
                                let rgba = (colorStops[s])[1];
                                colors[s] = COLOR.fromRGBAs(rgba);
                            }
                            let info = data[1];
                            let cgx = dp2px(info[0]);
                            let cgy = dp2px(info[1]);
                            let cgr = dp2px(info[2]);
                            let gradient = new RadialGradient(cgx, cgy, cgr, colors, stops, Shader.TileMode.CLAMP);
                            canvas.fillStyle = gradient;

                        } else if (fillStyle == "linear") {
                            let colorStops = data[2];
                            let colors = [colorStops.length];
                            let stops = [colorStops.length];
                            for (let s = 0; s < colorStops.length; s++) {
                                stops[s] = (colorStops[s])[0];
                                let rgba = (colorStops[s])[1];
                                colors[s] = COLOR.fromRGBAs(rgba);
                            }
                            let info = data[1];
                            let lgx0 = dp2px(info[0]);
                            let lgy0 = dp2px(info[1]);
                            let lgx1 = dp2px(info[2]);
                            let lgy1 = dp2px(info[3]);
                            let gradient = new android.graphics.LinearGradient(lgx0, lgy0, lgx1, lgy1, colors, stops, Shader.TileMode.CLAMP);
                            canvas.fillStyle = gradient;
                        } else {
                            console.error("[setFillStyle]", fillStyle + "");
                        }
                        break;
                    case "clearRect":
                        canvas.drawRect(new Rect(dp2px(data[0]),
                            dp2px(data[1]),
                            dp2px(data[0] + data[2]),
                            dp2px(data[1] + data[3])), clearPaint);

                        break;
                    case "fillPath":
                        canvas.beginPath();
                        // canvas.globalAlpha = data[0];
                        for (let d = 0; d < data.length; d++) {
                            let item = data[d];
                            let method2 = item.method;
                            let data2 = item.data;
                            switch (method2) {
                                case "rect":
                                    canvas.drawRect(new Rect(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[0] + data2[2]),
                                        dp2px(data2[1] + data2[3])), fillPaint);
                                    break;
                                case "moveTo":
                                    canvas.moveTo(data2[0], data2[1]);
                                    break;
                                case "lineTo":
                                    canvas.lineTo(data2[0], data2[1]);
                                    break;
                                case "closePath":
                                    canvas.closePath();
                                    break;
                                case "bezierCurveTo":
                                    canvas.bezierCurveTo(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[2]),
                                        dp2px(data2[3]),
                                        dp2px(data2[4]),
                                        dp2px(data2[5]));
                                    break;
                                case "quadraticCurveTo":
                                    canvas.quadraticCurveTo(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[2]),
                                        dp2px(data2[3]));
                                    break;

                                case "arc": {
                                    let x = data2[0];
                                    let y = data2[1];
                                    let r = data2[2];
                                    let a1 = data2[3];
                                    let a2 = data2[4];
                                    let counterclockwise = data2[5];
                                    canvas.arc(x, y, r, a1, a2, counterclockwise);
                                }
                                    break;
                                default:
                                    console.error("===========", method2);
                                    break;
                            }
                        }
                        canvas.fill();
                        break;
                    case "strokePath":
                        canvas.beginPath();
                        // canvas.globalAlpha = data[0];
                        for (let d = 0; d < data.length; d++) {
                            let item = data[d];
                            let method2 = item.method;
                            let data2 = item.data;
                            switch (method2) {
                                case "rect":
                                    canvas.drawRect(new Rect(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[0] + data2[2]),
                                        dp2px(data2[1] + data2[3])), strokePaint);
                                    break;
                                case "moveTo":
                                    canvas.moveTo(data2[0], data2[1]);
                                    break;
                                case "lineTo":
                                    canvas.lineTo(data2[0], data2[1]);
                                    break;
                                case "closePath":
                                    canvas.closePath();
                                    break;
                                case "bezierCurveTo":
                                    canvas.bezierCurveTo(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[2]),
                                        dp2px(data2[3]),
                                        dp2px(data2[4]),
                                        dp2px(data2[5]));
                                    break;
                                case "quadraticCurveTo":
                                    canvas.quadraticCurveTo(dp2px(data2[0]),
                                        dp2px(data2[1]),
                                        dp2px(data2[2]),
                                        dp2px(data2[3]));
                                    break;
                                case "arc": {
                                    let x = data2[0];
                                    let y = data2[1];
                                    let r = data2[2];
                                    let a1 = data2[3];
                                    let a2 = data2[4];
                                    let counterclockwise = data2[5];
                                    canvas.arc(x, y, r, a1, a2, counterclockwise);
                                }
                                    break;
                                default:
                                    console.error("===========2", method2);
                                    break;
                            }
                        }
                        canvas.stroke();
                        break;
                    case "setShadow":
                        this.setLayerType(LAYER_TYPE_SOFTWARE, null);
                        fillPaint.setShadowLayer(data[2] / 2, data[0], data[1], COLOR.fromRGBAs(data[3])); // 实心矩形 & 其阴影
                        break;
                    case "setLineCap":
                        let lineCap = data[0];
                        switch (lineCap) {
                            case "butt":
                                strokePaint.setStrokeCap(Paint.Cap.BUTT);
                                break;
                            case "round":
                                strokePaint.setStrokeCap(Paint.Cap.ROUND);
                                break;
                            case "square":
                                strokePaint.setStrokeCap(Paint.Cap.SQUARE);
                                break;
                            default:
                                break;
                        }
                        break;
                    case "setLineWidth":
                        strokePaint.setStrokeWidth(data[0]);
                        break;
                    case "setLineJoin":
                        let lineJoin = data[0];
                        switch (lineJoin) {
                            case "bevel":
                                strokePaint.setStrokeJoin(Paint.Join.BEVEL);
                                break;
                            case "round":
                                strokePaint.setStrokeJoin(Paint.Join.ROUND);
                                break;
                            case "miter":
                                strokePaint.setStrokeJoin(Paint.Join.MITER);
                                break;
                            default:
                                break;
                        }
                        break;
                    case "setLineDash":
                        let data2 = data[0];
                        let items = [data2.length];
                        for (let i = 0; i < data2.length; i++) {
                            items[i] = data2.get(i);
                        }
                        let pathEffect = new DashPathEffect(items, data[1]);
                        strokePaint.setPathEffect(pathEffect);
                        break;
                    case "setMiterLimit":
                        break;
                    case "scale":
                        canvas.scale(data[0], data[1]);
                        break;
                    case "rotate":
                        canvas.rotate(( data[0] * 180 / Math.PI));
                        break;
                    case "translate":
                        canvas.translate(dp2px(data[0]),
                            dp2px(data[1]));
                        break;
                    case "drawImage": {
                        let x = data.length > 1 ? dp2px(data[1]) : 0;
                        let y = data.length > 2 ? dp2px(data[2]) : 0;
                        let type_url = OneKit.getUrl(data[0]);
                        let url = type_url[1];
                        let bitmap;
                        if (type_url[0].equalsIgnoreCase("asset")) {
                            bitmap = ASSET.loadImage(url, false);
                        } else {
                            bitmap = FSO.loadImage(url, false);
                        }
                        let width = data.length > 3 ? dp2px(data[3]) : bitmap.getWidth();
                        let height = data.length > 4 ? dp2px(data[4]) : bitmap.getHeight();
                        let matrix = new Matrix();
                        matrix.postScale(dp2px(width) / bitmap.getWidth(), dp2px(height) / bitmap.getHeight());
                        let dstbmp = Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(),
                            bitmap.getHeight(), matrix, true);
                        canvas.drawBitmap(dstbmp, x, y, fillPaint);
                    }
                        break;
                    case "setFontSize":
                        fillPaint.setTextSize(dp2px(data[0]));
                        break;
                    case "fillText":
                        let text = data[0];
                        canvas.drawText(text, dp2px(data[1])
                            , dp2px(data[2]) - textBaseLineY, fillPaint);
                        break;
                    case "setTextAlign":
                        let textAlign = data[0];
                        switch (textAlign) {
                            case "left":
                                fillPaint.setTextAlign(Paint.Align.LEFT);
                                break;
                            case "center":
                                fillPaint.setTextAlign(Paint.Align.CENTER);
                                break;
                            case "right":
                                fillPaint.setTextAlign(Paint.Align.RIGHT);
                                break;
                            default:
                                break;
                        }
                        break;
                    case "setTextBaseLine":
                        let textBaseLine = data[0];
                        let fontMetrics = fillPaint.getFontMetrics();
                        switch (textBaseLine) {
                            case "top":
                                textBaseLineY = fontMetrics.top;
                                break;
                            case "bottom":
                                textBaseLineY = fontMetrics.bottom;
                                break;
                            case "middle":
                                textBaseLineY = (fontMetrics.bottom + fontMetrics.top) / 2;
                                break;
                            case "normal":
                                textBaseLineY = 0;
                                break;
                            default:
                                break;
                        }
                        break;
                    case "setGlobalAlpha":
                        globalAlpha = data[0];
                        break;
                    default:
                        console.error("----------", method);
                        break;
                }
            }


            /*  if (_canvasToTempFilePath != null) {
             // console.error(JSON.stringify(_canvasToTempFilePath));
             let OBJECT = _canvasToTempFilePath;
             let x = (OBJECT.containsKey("x") ? OBJECT.get("x") : 0);
             let y = (OBJECT.containsKey("y") ? OBJECT.get("y") : 0);
             let width = (OBJECT.containsKey("width") ? OBJECT.get("width") : px2dp(this.getWidth()) - x);
             let height = (OBJECT.containsKey("height") ? OBJECT.get("height") : px2dp(this.getHeight()) - y);
             let destWidth = (OBJECT.containsKey("destWidth") ? OBJECT.get("destWidth") : width);
             let destHeight = (OBJECT.containsKey("destHeight") ? OBJECT.get("destHeight") : height);
             let fileType = (OBJECT.containsKey("fileType") ? OBJECT.get("fileType") : "png");
             let quality = (OBJECT.containsKey("quality") ? OBJECT.get("quality") : 1);
             _canvasToTempFilePath = null;
             //////////////////
             try {
             this.buildDrawingCache();
             let saveImage = this.getDrawingCache();
             saveImage = cn.onekit.IMAGE.crop(saveImage, new Rect(dp2px(x), dp2px(y), dp2px(x + width), dp2px(y + height)));
             saveImage = cn.onekit.IMAGE.scale(saveImage, width / destWidth, height / destHeight);
             //
             let androidTempDir = context.getExternalCacheDir().getPath();
             let androidUUIDname = OneKit.createUUID() + "." + fileType;
             let file = new java.io.File(androidTempDir, androidUUIDname);
             file.createNewFile();
             let fos = new FileOutputStream(file);
             saveImage.compress(fileType.equalsIgnoreCase("png") ? Bitmap.CompressFormat.PNG : Bitmap.CompressFormat.JPEG, (100 * quality), fos);
             fos.flush();
             } catch (e) {
             e.printStackTrace();
             }
             }*/
        });
    }
}

