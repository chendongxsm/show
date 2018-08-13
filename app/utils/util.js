

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio
} = React;

const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px=>PixelRatio.roundToNearestPixel(px);
let designSize = {width:750,height:1336};
let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width;
let win_height = Dimensions.get("window").height;
let width = dp2px(win_width);
let height = dp2px(win_height);
let design_scale = designSize.width/width;
height = height*design_scale
let scale = 1/pxRatio/design_scale;

var Util = {

  //单位像素
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  width: width,
  height: height,
  scale: scale,

  //post请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
      // callback(responseText);
    }).done();
  },

  //get请求
  get: function (url, callback) {
    url = Path + url
    fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
      // callback(responseText);
    }).done();
  },

  log:function (obj){
    var description = "";
     for(var i in obj){
        var property=obj[i];
        description+=i+" = "+property+"\n";
     }
     alert(description);
  },
  //Key
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

};

module.exports = Util;