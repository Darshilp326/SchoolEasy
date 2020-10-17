const mongoose=require('mongoose')

const discussionAnswerSchema=new mongoose.Schema({
    discussionForum:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DiscussionForum'
    },
    answer:{
        type:String
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DiscussionQuestion'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'  
    }
})
module.exports=mongoose.model('DiscussionAnswer',discussionAnswerSchema)