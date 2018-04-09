'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');
var crypto = require('crypto'); // 加密库
// const uuidV1 = require('uuid/v1');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const toArray = require('stream-to-array');
const StringTool = require('../../public/js/string.js');
const xlsx = require('node-xlsx');
const _  = require('lodash');

function md5(str) {
  　　var ret = crypto.createHash('md5').update(str.toString()).digest("hex");
  　　return ret;  
}


class GoodController extends Controller {
    async goodPage(){
        await this.ctx.render('../view/admin/good/addGood.nj',{title:'添加商品'});
    }
    async goodListPage(){
      await this.ctx.render('../view/admin/good/goodList.nj',{title:'商品列表'});
  }

     //上传图片接口
   async uploadImg() {
    const stream = await this.ctx.getFileStream();
    let buf;
    let parts;
    try {
      parts = await toArray(stream);
      buf = Buffer.concat(parts);
      const filename = md5(parts) + path.extname(stream.filename).toLowerCase();
      const target = path.join(this.config.baseDir, 'app/public/img/uploads/goods', filename);
      await fs.writeFileSync(target, buf);
      return this.ctx.body = {code: 200,msg: 'success', url: '/public/img/uploads/goods/' + filename };
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
  }

    //添加商品
    async addGood() {
        let params = this.ctx.query.formData;
        params = JSON.parse(params);
        if(params){
          try {
            let fileUrl = '';
            let stream;
            let buf;
            let files = [];
            let data = [];
            const parts = this.ctx.multipart({ autoFields: true });
            let img = this.ctx.query.img;
            if(img){
              while ((stream = await parts()) != null) {
                let obj = {};
                const filenamed = stream.filename;
                let  partss = await toArray(stream);
                buf = Buffer.concat(partss);
                const filename = md5(partss) + path.extname(stream.filename).toLowerCase();
                const target = path.join(__dirname, '../../public/img/uploads/goods', filename);
                await fs.writeFileSync(target, buf);
                obj.fileName = filenamed;
                obj.decodeName = filename;
                files.push(obj);
                data.push(obj.decodeName);
              }
            }
            
            let paths = [];
            data.forEach((item) => {
              let obj = '/public/img/uploads/goods/' + item;
              paths.push(obj);
            })
            params.brandDetailImgArray = paths;
            let code = params.code;
            let good = await this.ctx.model.Good.findOne({'code':code});
            if(good){
             return this.ctx.body = { code: 202,msg: '该单项已存在' };
            }else{
              let res = await this.ctx.model.Good.create(params);
              return this.ctx.body = { code: 200,msg: 'success',data:res  };
            }
          } catch (error) {
            console.log(error);
            throw new Error(error);
          }
        }
       return this.ctx.body = { code: 400,msg: '参数不能为空' };
      }
}

module.exports = GoodController;
