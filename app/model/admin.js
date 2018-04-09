module.exports = app => {
    const mongoose = app.mongoose;
    const adminSchema = new mongoose.Schema({
        //名字
        name: {
            type: String
        },
        //手机号
        phoneNumber: {
            type: Number
        },
        //性别
        sex: {
            type: String
        },
        //某个品牌的管理者
        brandName: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Brand'
        }               
    });
  
    return mongoose.model('Admin', adminSchema);
  }