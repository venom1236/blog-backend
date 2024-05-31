const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    author:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        require:'true'
    }
})

module.exports=mongoose.model('posts',postSchema)