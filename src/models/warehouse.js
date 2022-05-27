const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
  warehouse_name: {
    type: String,
    required: true,
  },
  warehouse_address: {
    type: String,
    required: true,
  },
  warehouse_contact: {
    type: String,
    required: true,

  },
  warehouse_email: {
    type: String,
    required: true,
  },
  warehouse_status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  }
}, {
  timestamps: true,
});

const warehouseModel = mongoose.model("Warehouse", warehouseSchema);
module.exports = warehouseModel;