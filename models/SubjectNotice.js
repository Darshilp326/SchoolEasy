const mongoose=require('mongoose')

const subjectNoticeSchema=new mongoose.Schema({
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject'
    },
    text:[{
        type:String
    }],
    Date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('SubjectNotice',subjectNoticeSchema)