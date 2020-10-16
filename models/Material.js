const mongoose=require('mongoose')

const materialSchema=new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    },
    file:{
        type:String
    },
    text:{
        type:String
    }
})
module.exports=mongoose.model('Material',materialSchema)