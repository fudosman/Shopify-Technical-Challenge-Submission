const app = require("express");
const router = app.Router();

const inventory = require("./inventory");

router.use("/", inventory);

module.exports = router;
