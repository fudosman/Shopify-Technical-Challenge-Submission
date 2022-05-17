const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },  
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletionComment: {
    type: String,
    default: "",
  },
  type: {
    type: String,
  },
},{
  timestamps: true,
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;