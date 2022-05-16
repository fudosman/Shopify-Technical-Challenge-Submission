const express = require("express");
const router = express.Router();
const {getAllInventory,getOneInventory,postInventory,putInventory,deleteInventory} = require("../../controllers/inventory");

router.get("/inventory", getAllInventory);
router.get("/inventory", getOneInventory);
router.post("/inventory", postInventory);
router.put("/inventory", putInventory);
router.delete("/inventory", deleteInventory);

module.exports = router;