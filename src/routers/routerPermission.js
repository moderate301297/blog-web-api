
const express = require("express");
const router = express.Router();
const controllerPermission = require("../controllers/permission");

router.post("/create", controllerPermission.createPermission);
router.post("/update", controllerPermission.updatePermission);
router.delete("/delete/:id", controllerPermission.deletePermission);


module.exports = router;