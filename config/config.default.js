'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_yuan$$$$';

  // add your config here
  config.middleware = [];

   //关闭csrf安全
   exports.security = {
    csrf: {
      enable: false,
    },
  };
  
  //视图配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  }

  //数据库配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1/egg-example',
    options: {}
  };

   //后台管理左侧导航菜单
   config.navMenu = {
    menus:[
      {
        icon: 'fa fa-star',
        title: '品牌',
        src: null,
        children: [
          {
            id: 1,
            icon: 'fa fa-list-ul',
            title: '品牌列表',
            src: '/admin/brand/brandList.html'
          },
          {
            id: 2,
            icon: 'fa fa-plus',
            title: '添加品牌',
            src: '/admin/brand/addBrand.html'
          }
        ]
      },
      {
        icon: 'fa fa-star',
        title: '商品',
        src: null,
        children: [
          {
            id: 3,
            icon: 'fa fa-list-ul',
            title: '商品列表',
            src: '/admin/good/goodList.html'
          },
          {
            id: 4,
            icon: 'fa fa-plus',
            title: '添加商品',
            src: '/admin/good/addGood.html'
          }
        ]
      }
    ]
  };

  return config;
};
