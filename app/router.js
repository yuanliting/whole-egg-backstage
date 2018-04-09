'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
 require('./router/admin/admin')(app);//首页相关的
 require('./router/admin/brand')(app);//品牌
 require('./router/admin/good')(app);//商品
};
