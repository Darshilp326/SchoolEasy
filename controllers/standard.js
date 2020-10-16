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

module.exports={
    addStandard
}