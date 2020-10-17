const {Subject} = require("../models")
const Material = require("../models/Material")

const addMaterial=async(req,res)=>{
    try{
        console.log(req.headers)
        console.log(req.path.file)
        const teacher=req.user.id
        const {subjectId}=req.params
        const subject=await Subject.findById(subjectId)
        const material=new Material({
        text:req.body.text,
        file:`${req.headers.host}/${req.file.path}`,
        teacher
        })
        //subject.materials.push(material.id)
        await material.save();
        res.status(200).json(material)
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports={
    addMaterial
}