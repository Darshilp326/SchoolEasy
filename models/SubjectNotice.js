const mongoose=require('mongoose')

const subjectNoticeSchema=new mongoose.Schema({
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject'
    },
    text:[{
        type:String
    }]
})
module.exports=mongoose.model('SubjectNotice',subjectNoticeSchema)