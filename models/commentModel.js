const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //this is the reference to a post model
    },
    user:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Comment", commentSchema);