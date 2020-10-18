const CommonNotice = require("../models/CommonNotice")
const Teacher = require("../models/Teacher")

const addNotice=async(req,res)=>{
 try{
 const teacherId=req.user.id    
 const standardId=req.params.id
 const teacher=await Teacher.findById(teacherId)
 if(!teacher){
    return res.status(400).json({message:'Only teacher are allowed to post notice'})
 }
 if(!standardId){
     return res.status(400).json({message:'Standard not found'})
 }
 const notice=new CommonNotice({
  teacher:teacher.name,
  standard:standardId,
  text:req.body.text,
  heading:req.body.heading
 })
 await notice.save();
 res.status(200).json({notice})
 }catch(e){
     console.log(e.message)
     res.status(500).json({
         message:'Internal server error'
     })
 }
}
const getAllNotices=async(req,res)=>{
    try{
     const standard=req.params.id
     if(!standard){
        return res.status(400).json({message:'Standard not found'})
    }
    const notices=await CommonNotice.find({standard})
    res.status(200).json({notices})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}

module.exports={
    addNotice
}