const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Standard'
    },
    file:{
     type:String
    },
    caption:{
        type:String
    },
})
module.exports=mongoose.model('Post',postSchema)