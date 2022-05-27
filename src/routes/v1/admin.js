const express = require("express");
const router = express.Router();
const {
  postBrand,
  postWarehouse,
  getBrand,
  getAllBrand,
  getAllWarehouse,
  getWarehouse,
  putBrand,
  putWarehouse,
  deleteBrand,
  deleteWarehouse,
} = require("../../controllers/admin");

// create routes
router.post("/brand", postBrand);
router.post("/warehouse", postWarehouse);

// read routes
router.get("/brand/:id", getBrand);
router.get("/warehouse/:id", getWarehouse);
router.get("/brand", getAllBrand);
router.get("/warehouse", getAllWarehouse);

// update routes
router.put("/brand/:id", putBrand);
router.put("/warehouse/:id", putWarehouse);

// delete routes
router.delete("/brand/:id", deleteBrand);
router.delete("/warehouse/:id", deleteWarehouse);

module.exports = router;