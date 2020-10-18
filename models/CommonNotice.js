const mongoose=require('mongoose')

const commonNoticeSchema=new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    text:{
        type:String
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject'
    },
    heading:{
        type:String,
    }
})
module.exports=mongoose.model('CommonNotice',commonNoticeSchema)