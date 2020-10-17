const {Subject,Standard}=require('../models');
const Teacher = require('../models/Teacher');

const addSubject=async(req,res)=>{
 try{
    const subject=new Subject({
        name:req.body.name,
        teacher:req.body.teacher,
        standard:req.body.standard
    })
    await subject.save();
    const std=await Standard.findById(req.body.standard);
    const teacher=await Teacher.findById(req.body.teacher)
    teacher.subject=subject.id
    await teacher.save()
    std.subjects.push(subject.id)
    await std.save()
    res.status(200).json({data:subject})
 }catch(e){
  console.log(e.message)   
  res.status(500).json({message:'Internal Server error'})
 }  
}
const getAllSubjects=async(req,res)=>{
    try{
    const {standard}=req.params
    const subjects=await Subject.find({standard}).populate({path:'teacher',path:'standard'})
    res.status(200).json({subjects})
    }
    catch(e){
        console.log(e.message)   
        res.status(500).json({message:'Internal Server error'})
    }  
}

module.exports={
    addSubject,
    getAllSubjects
}