const mongoose=require('mongoose')

const commonNoticeSchema=new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    text:[{
        type:String
    }]
})
module.exports=mongoose.model('CommonNotice',commonNoticeSchema)