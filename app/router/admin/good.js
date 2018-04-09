'use strict';

/**
 * /router/admin/brand.js
 */

module.exports = app => {
  const { router, controller } = app; 
  router.get('/admin/good/goodList.html',      controller.admin.good.goodListPage               );//商品列表页面
  router.get('/admin/good/addGood.html',       controller.admin.good.goodPage                   );//商品页面
  router.post('/admin/good/img/upload',         controller.admin.good.uploadImg                 );//商品图片下载接口
  router.post('/admin/good/addGood',           controller.admin.good.addGood                    );//添加商品 
};
