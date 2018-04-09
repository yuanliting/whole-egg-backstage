var DateTool = require('./date.js');

function random(len) {
　　len = len || 6;
    /****默认去掉容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd.toUpperCase();
}

module.exports.random = random;

// 6位数字随机验证码
function randomNumStr(len) {
　　len = len || 6;
　　var $chars = '0123456789';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

module.exports.randomNumStr = randomNumStr;

function createOrderId() {
    var str = DateTool.getDayNum(new Date()) + '';
    str = str.substr(2);
    for (i = 0; i < 9; i++) {
        str += Math.floor(Math.random() * 10);
　　}
    return str;
}
module.exports.createOrderId = createOrderId;

function createShopOrder() {
    var str = DateTool.getDayNum(new Date()) + '';
    for (i = 0; i < 5; i++) {
        str += Math.floor(Math.random() * 10);
　　}
    return str;
}
module.exports.createShopOrder = createShopOrder;