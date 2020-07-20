/**
 * Created by xxx.
 * Modified by Wangjunjie on 2018/12/24.
 */
// TODO: location 2/3
class OnekitWX_Location {
    static getLocation(object) {
        var type = object.type || 'wgs84'; // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入 'gcj02'
        var altitude = object.altitude || 'false'; //【小程序传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度】
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        // TODO: getLocation:模拟器无法返回speed、accuracy（手机上好像可以返回，还没试）
        // HACK: getLocation:JS-SDK无法返回{ altitude高度，verticalAccuracy垂直精度（Android 无法获取，返回 0）, horizontalAccuracy水平精度 }
        if (navigator.geolocation) {
            var n = navigator.geolocation.getCurrentPosition(function (res) {
                console.log(res); // 需要的坐标地址就在res中
                console.log(n.verticalAccuracy);
            });
        } else {
            alert('该浏览器不支持定位');
        }
        /*wx.getLocation({
          type: type,
          success: function(res) {
            if (res && success) {
              res.altitude = 0;
              res.verticalAccuracy = 0;
              res.horizontalAccuracy = 0;
              success(res);
            }
          },
          fail: function(res) {
            if (fail) {
              fail(res);
            }
          },
          complete: function(res) {
            if (complete) {
              complete(res);
            }
          }
        });*/
    }

    static openLocation(object) {
        var latitude = object.latitude; //（必填） 纬度，浮点数，范围为90 ~ -90
        var longitude = object.longitude; //（必填）经度，浮点数，范围为180 ~ -180
        // TODO: 5~18 转换为 1~28
        var scale = object.latitude || 28; // 地图缩放级别,整形值,范围从1~28。默认为最大【小程序：缩放比例，范围5~18】
        var name = object.name; // 位置名
        var address = object.address; // 地址详情说明
        var infoUrl = object.infoUrl; // * 在查看位置界面底部显示的超链接,可点击跳转
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;

        try {
           /* var errorInfo = '';
            var hasError = false;
            if (typeof latitude !== 'number') {
                errorInfo =
                    String_format(onekit_global.error_head, 'openLocation') +
                    String_format(onekit_global.error_body, 'latitude', 'Number', typeof longitude);
                hasError = true;
            } else if (!longitude) {
                // TODO: 无法进入这里判断
                errorInfo += String_format(onekit_global.error_body, 'longitude', 'Number');
                hasError = true;
            }
            //location = "openLocation.html?latitude="+latitude+"&longitude="+longitude;
            console.log(location);
            if (hasError) {
                throw new Error(errorInfo);
            }*/
          //window.open(`/OnekitWX/page/openLocation.html?latitude=${latitude}&longitude=${longitude}`);
           window.location.href=`/OnekitWX/page/openLocation.html?latitude=${latitude}&longitude=${longitude}&name=${name}&address=${address}`;
        } catch (error) {
            console.error(error.message);
        }
/*
        // INFO: success 会返回 res , fail 和 complete 不会返回
       wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            name: name,
            address: address,
            scale: scale,
            infoUrl: infoUrl,
            success: function (res) {
                if (success) {
                    success(res);
                }
            },
            fail: function () {
                fail();
            },
            complete: function () {
                if (complete) {
                    complete();
                }
            }
        });*/
    }

    static chooseLocation(object) {
        var latitude = object.latitude; //（必填） 纬度，浮点数，范围为90 ~ -90
        var longitude = object.longitude; //（必填）经度，浮点数，范围为180 ~ -180
        // TODO: 5~18 转换为 1~28
        var name = object.name; // 位置名
        var address = object.address; // 地址详情说明
        var infoUrl = object.infoUrl; // * 在查看位置界面底部显示的超链接,可点击跳转
        var success = object.success;
        var fail = object.fail;
        var complete = object.complete;
        try {
            window.location.href=`/OnekitWX/page/choose-location.html`;
        }catch (e) {

        }
    }
}
