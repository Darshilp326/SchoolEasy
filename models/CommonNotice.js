const mongoose=require('mongoose')

const commonNoticeSchema=new mongoose.Schema({
    teacher:{
        type:String
    },
    text:{
        type:String
    },
    standard:{
        type:String,
    },
    heading:{
        type:String,
    }
})
module.exports=mongoose.model('CommonNotice',commonNoticeSchema)