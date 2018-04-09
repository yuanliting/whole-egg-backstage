'use strict';

/**
 * /router/admin/admin.js
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.admin.admin.indexPage);//首页
  router.get('/admin/main.html',controller.admin.admin.mainPage);   //首页面板页面
  router.get('/admin/navMenu', controller.admin.admin.navMenu);//左侧导航菜单
};
