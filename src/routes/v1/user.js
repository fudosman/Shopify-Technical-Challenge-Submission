const express = require("express");
const router = express.Router();
const {createNewUser} = require("../../controllers/user");

router.post("/user", createNewUser);

module.exports = router;