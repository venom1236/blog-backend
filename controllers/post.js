
let Post=require('../models/Post')



const createpost= async(req,res)=>{
    let {title,image,description,author}=req.body;
   try {
    let post= await Post.create({
        title:title,
        description:description,
        image:image,
        author:author
    })
    res.status(200).json({success:true,msg:"post created successfully"})
   } catch (error) {
    res.status(500).json({success:false,mag:"error in creating post",error:error.massage})
   }

}

const updatepost=async(req,res)=>{
    // res.send("hello")
    let {title,image,description}=req.body;
    console.log(req.body)
    let id = req.params._id;
    console.log(id)
    try {
        let updatepost=await Post.findByIdAndUpdate({_id:id},{$set:{title:title,description:description,image:image}},{new:true})
        return res.status(200).json({success:true,msg:"post updated successfully",updatepost})
    } catch (error) {
        res.status(500).json({success:false,mag:"error in updating post",error:error.massage})
    }
}

const deletepost=async(req,res)=>{
    try {
        let deletepost=await Post.findByIdAndDelete(req.params._id)
    res.status(200).json({success:true,msg:"post deleted successfully"})
    } catch (error) {
        res.status(500).json({success:false,msg:'error in deleting post',error:error.message})
    }
}
const getsinglePost=async(req,res)=>{
     let _id= req.params._id;
     try {
       let post= await Post.findById(_id) 
       res.status(200).json({success:true,msg:"find post successfully",post})
     } catch (error) {
        res.status(500).json({success:false,msg:'post not found',error:error.massage})
     }
}


const getAllPost=async(req,res)=>{
   let _id= req.params._id;
   try {
    let allpost= await Post.find({author:_id})
    if(allpost){
        return res.status(200).json({success:true,msg:'feteched all post successfully ',allpost})
    }
    else{
        return res.status(404).json({success:false,msg:'no post found'})
    }
   } catch (error) {
    return res.status(500).json({success:false,msg:'error in getting all user post',error:error.massage})
   }
}


//
const getalluserposts=async(req,res)=>{
 try {
    let allpost= await Post.find().populate({path:'author'});
    if(allpost){
        return res.status(200).json({success:true,msg:'all posts fetch successfulluy ',allpost})
    }
    else{
        return res.status(404).json({success:false,msg:'no post found'})
    }
 } catch (error) {
    return res.status(500).json({success:false,msg:'error in getting all user post',error:error.massage})
 }
}




module.exports={
    createpost,
    updatepost,
    deletepost,
    getsinglePost,
    getalluserposts,
    getAllPost

}