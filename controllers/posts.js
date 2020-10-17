const addPost=async(req,res)=>{
    try{
     const {standardId}=req.params
     if(!standardId){
         return res.status(400).json({message:'Subject not found'})
     }

    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}