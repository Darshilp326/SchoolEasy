const mongoose=require('mongoose')

const standardSchema=new mongoose.Schema({
  number:{
      type:String,
      required:true
  },
  students:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Student'
  }],
  teachers:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Teacher'
  }],
  subjects:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Subject'
  }],
  discussionForum:{
 type:mongoose.Schema.Types.ObjectId,
 ref:'DiscussionForum'
  }
})

module.exports=mongoose.model('Standard',standardSchema)