const {DiscussionForum,Standard,DiscussionQuestion}=require('../models');
const DiscussionAnswer = require('../models/DiscussionAnswer');
const User = require('../models/User');

const addDiscussionForum=async(req,res)=>{
    try{
        const discussionForum=new DiscussionForum({
            standard:req.body.standard
        })
        await discussionForum.save();
        const std=await Standard.findById(req.body.standard)
        std.discussionForum=discussionForum.id
        await std.save()
        res.status(200).json({discussionForum,std})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}
const getDiscussionForum=async(req,res)=>{
  try{
  const forumId=req.params.id
  if(!forumId){
    return res.status(400).json({message:'Forum id not found'})
  }
  const forum=await DiscussionForum.findById(forumId).populate({path:'questions',populate:{path:'user'} })
   if(!forum){
    return res.status(400).json({message:'Forum not found'})
  }
  res.status(200).json({forum})
  }catch(e){
      console.log(e.message)
      res.status(500).json({message:'Internal server error'})
  }

}

const addQuestionToForum=async(req,res)=>{
 try{
    const userId=req.user.id
    const user=await User.findOne({userId})
    if(!user){
        return res.status(400).json({message:'User not found'}) 
    }
    const forumId=req.params.id;
    if(!forumId){
        return res.status(400).json({message:'Forum id not found'})
    }
    const forum=await DiscussionForum.findById(forumId)
    if(!forum){
        return res.status(400).json({message:'Forum not found'})
    }
    const {question}=req.body
    const ques=new DiscussionQuestion({
        discussionForum:forumId,
        question,
        user
    })
    await ques.save()
    forum.questions.push(ques.id)
    await forum.save()
    res.status(200).json({ques})
 }catch(e){
  console.log(e.message)
  res.status(500).json({message:'Internal server error'})
 }
}
const addAnswerToForum=async(req,res)=>{
 try{
 const userId=req.user.id    
 const questionId=req.params.id
 if(!questionId){
    return res.status(400).json({message:'Question id not found'})
}
const question=await DiscussionQuestion.findById(questionId)
if(!question){
    return res.status(400).json({message:'Question not found'})
}
const answer=new DiscussionAnswer({
    answer:req.body.answer,
    question:questionId
})
await answer.save()
question.answers.push(answer.id)
await question.save()
res.status(200).json({answer})
 }catch(e){
    console.log(e.message)
    res.status(500).json({message:'Internal server error'})
   }

}
const getAnswersOfSpecificQuestion=async(req,res)=>{
    try{
        const questionId=req.params.id
        if(!questionId){
            return res.status(400).json({message:'Question id not found'})
        }
        const question=await DiscussionQuestion.findById(questionId).populate("answers")
        if(!question){
            return res.status(400).json({message:'Question not found'})
        }
        res.status(200).json({question})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports={
    addDiscussionForum,
    getDiscussionForum,
    addQuestionToForum,
    addAnswerToForum,
    getAnswersOfSpecificQuestion
}