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
    },
    material:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Material'
    }]
})

module.exports=mongoose.model('Subject',subjectSchema);