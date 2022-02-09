
const express = require("express");
const router = express.Router();
const controllersArticle = require("../controllers/article");

router.get("/published/page", controllersArticle.getArticle);

module.exports = router;