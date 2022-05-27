const express = require("express");
const router = express.Router();

const {
  getOneTransaction,
  getAllTransaction,
  postTransaction,
} = require("../../controllers/transaction");

router.post("/transaction", postTransaction );
router.get("/transaction", getAllTransaction );
router.get("/transaction/id", getOneTransaction );


module.exports = router;