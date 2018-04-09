// 转化为北京时间
function getBeijingTime (d){
    var ticks = d.getTime();
    var offset = 8*60*60*1000;
    ticks += offset;
    return new Date(ticks);
};
module.exports.getBeijingTime = getBeijingTime;

// 获取ISO时间（减去8小时，还原）
function getISOTime (d){
    var ticks = d.getTime();
    var offset = 8*60*60*1000;
    ticks -= offset;
    return new Date(ticks);
};
module.exports.getISOTime = getISOTime;

// 获得当前北京时间
module.exports.getNow = function(){
    return getBeijingTime(new Date());
};

// 初始化一个指定的北京时间
module.exports.newDate = function(year,month,day,hour,minute,second){
    var newdate = new Date(year,month-1,day,hour,minute,second);
    return getBeijingTime(newdate);
};

// 获取时间代码
module.exports.getDayNum = function(d){
    var str,year,month,day;
    year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate(); 
    str = year.toString() + (month>9?month:'0'+month) + (day>9?day:'0'+day);
    return parseInt(str);
};

// 获取月份数字
module.exports.getMouthNum = function(d){
    var str,year,month,day;
    year = d.getFullYear();
    month = d.getMonth() + 1;
    str = year.toString() + (month>9?month:'0'+month);
    return parseInt(str);
};

