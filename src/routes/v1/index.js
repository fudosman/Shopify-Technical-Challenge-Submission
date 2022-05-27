const app = require("express");
const router = app.Router();

const inventory = require("./inventory");
const admin = require("./admin");
const transaction = require("./transaction");

router.use("/", inventory);
router.use("/", admin);
router.use("/",transaction);


module.exports = router;
