const Like = require('../models/likemodel');
const Post  = require('../models/postModel');

exports.createLike = async(req,res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({post, user});
        const saveLike = await like.save();
        // find the id of the post and like the post by the user 
        const updatedLike = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true})

        res.json({
            like:updatedLike
        })
    }
    catch(err){
        res.status(400).json({
            error:"Message while creating like",
            message:err
        })

    }
}

exports.unlikePosts = async (req,res)=>{

    try{

        const {like,post} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        // update the post collection
        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})
         res.json({
            post:updatePost
         })

    }
    catch(err){
        res.status(400).json({
            error:"Message while creating like",
            message:err
        })

    }
}