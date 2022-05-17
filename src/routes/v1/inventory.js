const express = require("express");
const router = express.Router();
const {getAllInventory,getOneInventory,postInventory,putInventory,deleteInventory, undeleteInventory} = require("../../controllers/inventory");

router.post("/inventory", postInventory);
router.get("/inventory", getAllInventory);
router.get("/inventory/:id", getOneInventory);
router.put("/inventory/:id", putInventory);
router.patch("/inventory/:id", undeleteInventory);
router.delete("/inventory/:id", deleteInventory);

module.exports = router;