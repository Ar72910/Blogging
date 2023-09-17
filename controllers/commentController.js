// import mode
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

// logic


exports.createComment = async (req,res)=>{

    try{
        const {post,user,body} = req.body;

        const comment = new Comment({post,user,body});
        const saveComment = await comment.save();
        
        // find the post by Id , add the new comment to its comments array
        const updatePost = await Post.findByIdAndUpdate(post,{$push: {comments:saveComment._id}},{new:true}).populate("comments").exec();

        res.json({
            post:updatePost
        })

    }
    catch(error){  
        return res.status(500).json({
            error:"Error while creating comment",
            message:error.message
        })

    }
}


// export