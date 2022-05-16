const app = require("express");
const router = app.Router();

const inventory = require("./inventory");

router.use("/resource1", inventory);

module.exports = router;
