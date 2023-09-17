const express = require("express");
const router = express.Router();

// const {createComment} = require("../controllers/commentcontroller")
const {createComment} = require("../controllers/CommentController");
const { createPost, getAllPost } = require("../controllers/PostController");
const { createLike, unlikePosts } = require("../controllers/LikeController");

// const {dummyLink} = require("../controllers/likeController");

router.post("/comments/create",createComment);
// router.get("/dummyo",dummyLinko);
router.post('/posts/create',createPost);
router.get('/posts',getAllPost);

router.post('/likes/like',createLike);
router.post('/likes/unlike',unlikePosts);
module.exports = router