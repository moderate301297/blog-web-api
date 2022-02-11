
const express = require("express");
const router = express.Router();
const controllersArticle = require("../controllers/article");
const controllersComment = require("../controllers/comment");
const controllersRecommend = require("../controllers/recommend");
const controllersLike = require("../controllers/like");
const controllersCollection = require("../controllers/collection");


//post
router.post("/create", controllersArticle.createArticle);
router.post("/update/:id", controllersArticle.updateArticle);
router.put("/increment_view/:id", controllersArticle.updateCountView);
router.put("/update_like", controllersArticle.updateLikeCount);
router.post("/comment/add", controllersComment.createComment);
router.post("/like/add", controllersLike.addLike);
router.delete("/like/cancel", controllersLike.cancelLike);
router.post("/collect/add", controllersCollection.addCollection);
router.delete("/collect/cancel", controllersCollection.cancelCollection);

//get
router.get("/published/page", controllersArticle.getListArticle);
router.get("/view/:id", controllersArticle.getArticleById);
router.get("/comment/latest", controllersComment.getListComment);
router.get("/comment/page", controllersComment.getArticleComment);
router.get("/recommend/list", controllersRecommend.getListRecommend);
router.get("/like/liked", controllersLike.checkLike);
router.get("/collect/collected", controllersCollection.checkCollection);
router.get("/interrelated/list", controllersArticle.getInterArticle);

module.exports = router;