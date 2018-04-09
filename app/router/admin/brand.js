'use strict';

/**
 * /router/admin/brand.js
 */

module.exports = app => {
  const { router, controller } = app; 
  router.get('/admin/brand/brandList.html', controller.admin.brand.brandListPage);//品牌列表页面
  router.get('/admin/brand/addBrand.html', controller.admin.brand.brandPage);//品牌页面
  router.post('/admin/brand/img/upload', controller.admin.brand.uploadImg);//品牌图片下载接口
  router.post('/admin/brand/addBrand', controller.admin.brand.addBrand);//添加品牌 
};
