
const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/user");

router.post("/register", controllersUser.createUser);
router.delete("/:id", controllersUser.deleteUser);
router.get("/", (req, res) => {
    res.send('hello')
});


module.exports = router;