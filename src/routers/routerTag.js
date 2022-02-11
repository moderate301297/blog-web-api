
const express = require("express");
const router = express.Router();
const controllerTag = require("../controllers/tag");

router.post("/create", controllerTag.createTag);
router.post("/update", controllerTag.updateTag);
router.get("/list", controllerTag.getListTag);
router.delete("/delete/:id", controllerTag.deleteTag);


module.exports = router;