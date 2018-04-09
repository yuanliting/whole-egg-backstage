
  'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async indexPage() {
    await this.ctx.render('../view/index.nj',{title:'首页'});
   }
  async mainPage() {
    await this.ctx.render('../view/parts/main.nj',{ title: '主面板' });
  }
  //获取左侧导航菜单列表
  async navMenu() {
    this.ctx.body = { code: 200,msg: 'success',data: this.config.navMenu }
  }
}

module.exports = AdminController;
