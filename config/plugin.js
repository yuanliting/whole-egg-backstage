'use strict';

// had enabled by egg
// exports.static = true;
//开启插件

//视图插件
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

//数据库插件
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};