const mongoose=require('mongoose')

const discussionForumSchema=new mongoose.Schema({
    standard:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Standard'
    }
})
module.exports=mongoose.model('DiscussionForum',discussionForumSchema)