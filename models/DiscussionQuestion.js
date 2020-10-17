const mongoose=require('mongoose')

const discussionQuestionSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    discussionForum:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DiscussionForum'
    },
    question:{
        type:String
    },
    answers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DiscussionAnswer'
    }]
})
module.exports=mongoose.model('DiscussionQuestion',discussionQuestionSchema)