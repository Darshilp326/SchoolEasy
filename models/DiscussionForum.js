const mongoose=require('mongoose')

const discussionForumSchema=new mongoose.Schema({
    standard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Standard'
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DiscussionQuestion'
    }],
    
})
module.exports=mongoose.model('DiscussionForum',discussionForumSchema)