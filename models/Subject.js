const mongoose=require('mongoose')

const subjectSchema=new mongoose.Schema({
    name:{
        type:String
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    standard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Standard'
    }
})

module.exports=mongoose.model('Subject',subjectSchema);