module.exports = app => {
    const mongoose = app.mongoose;
    const goodSchema = new mongoose.Schema({
        code:{
            type:String,
            unique:true,
            required:true
        },
        //商品名字
        name: {
            type: String
        },
        //属于的品牌
        introduce: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Brand'
        },
        //商品属于哪个种类的
        type:{
            type: String
        },
        //原价格
        originalPrice:{
            type:Number
        },
        //活动价格
        nowPrice:{
            type:Number
        },
        //商品的打折活动
        discount: {
            type: String
        },
        //尺码

        //颜色

        //规格

        //样式
        
        //类型

        //商品头图
        goodImg: {
            type: String
        },
        //商品详情页面头图
        goodDetailBigImgArray:[
            {type: String}
        ],
       
    });
  
    return mongoose.model('Good', goodSchema);
  }