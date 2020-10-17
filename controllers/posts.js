const Post = require("../models/Post")

const addPost=async(req,res)=>{
    try{
    const {standardId}=req.params
    if(!standardId){
        return res.status(400).json({message:'Subject not found'})
    }
    const post=new Post({
    standard:standardId,
    file:`${req.headers.host}/${req.file.path}`,
    caption:req.body.caption,
    user:req.user.id
    })
    await post.save();
    res.status(200).json({post})
    }catch(e){
        console.log(e.message)
        res.status(500).json({message:'Internal server error'})
    }
}
const getAllPost=async(req,res)=>{
    try{
        const {standardId}=req.params
        if(!standardId){
            return res.status(400).json({message:'Subject not found'})
        }
        const posts=await Post.find({standard:standardId})
        if(!posts){
            return res.status(400).json({message:'No posts'})
        }
        res.status(200).json({posts})
    }catch(e){
        console.log(e.message),
        res.status(500).json({message:'Internal server error'})
    }
}
module.exports={
    addPost,
    getAllPost
}