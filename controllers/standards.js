const {Standard}=require('../models')

const addStandard=async(req,res)=>{
 try{
    const standard=new Standard({
        number:req.body.number
    })
    await standard.save();
    res.status(200).json({data:standard})
 }catch(e){
  res.status(500).json({message:'Internal Server error'})
 }  
}

const getStandard=async(req,res)=>{
    try{
     const {id}=req.params
     if(!id){
        res.status(400).json({message:'Standard not found'})
    }
     const standard=await Standard.findOne({number:id})
     res.status(200).json({standard})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal Server Error'})
    }
}

const getStudentsOfStandard=async(req,res)=>{
    try{
    const {id}=req.params
    if(!id){
        res.status(400).json({message:'Standard not found'})
    }
    const standard=await Standard.findOne({number:id}).populate('students')
    res.status(200).json({standard})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal Server Error'}) 
    }
}
const getTeachersOfStandard=async(req,res)=>{
    try{
        const {id}=req.params
        if(!id){
            res.status(400).json({message:'Standard not found'})
        }
        const standard=await Standard.findOne({number:id}).populate('teachers')
        res.status(200).json({standard})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal Server Error'}) 
    }
}

module.exports={
    addStandard,
    getStandard,
    getStudentsOfStandard,
    getTeachersOfStandard
}