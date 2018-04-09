module.exports = app => {
    const mongoose = app.mongoose;
    const brandSchema = new mongoose.Schema({
        code:{
            type:String,
            unique:true,
            required:true
        },
        //品牌名字
        brandName: {
            type: String
        },
        //品牌类型
        brandType:{
            type: String
        },
        //品牌发布时间
        time:{
            type: Date
        },
        //品牌介绍
        describe: {
            type: Number
        },
        //品牌活动
        brandAction:{
            type: String
        },
        //品牌优惠券
        discount: {
            type: Number
        },
        //品牌是否被收藏----不合理
        collectioned:{
            type:Boolean,
            default:false
        },
        //打折
        brandDiscount:{
            type: Number
        },
        //品牌头图
        brandImg: {
            type: String
        },
        //品牌详情页面头图
        brandDetailBigImg:{
            type: String
        },
        //品牌小图片
        brandDetailSmallImg:{
            type: String
        },
        //品牌详情页面品牌图片数组
        brandDetailImgArray:[
            {type: String}
        ]
    });
  
    return mongoose.model('Brand', brandSchema);
  }