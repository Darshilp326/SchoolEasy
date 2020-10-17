const {Subject} = require("../models")
const Material = require("../models/Material")

const addMaterial=async(req,res)=>{
    try{
        //console.log(req.headers)
        console.log(req.file.path)
        const teacher=req.user.id
        const {subjectId}=req.params
        const subject=await Subject.findById(subjectId)
        const material=new Material({
        text:req.body.text,
        file:`${req.headers.host}/${req.file.path}`,
        teacher
        })
        subject.material.push(material.id)
        await subject.save();
        await material.save();
        res.status(200).json(material)
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}
const getMaterialsOfSpecificSubject=async(req,res)=>{
    try{
    const {subjectId}=req.params 
    const subject=await Subject.findById(subjectId).populate('material')
    if(!subject){
     res.status(400).json({message:'Subject not found'})   
    }
    const {material}=subject
    res.status(200).json({material})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})   
    }
}
module.exports={
    addMaterial,
    getMaterialsOfSpecificSubject
}