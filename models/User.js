const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String
    }
})

module.exports=mongoose.model('User',userSchema);