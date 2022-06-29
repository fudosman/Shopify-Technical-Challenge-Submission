const app = require("express");
const router = app.Router();

const inventory = require("./inventory");
const admin = require("./admin");
const transaction = require("./transaction");
const user = require("./user");

router.use("/", inventory);
router.use("/", admin);
router.use("/", transaction);
router.use("/", user);


module.exports = router;
