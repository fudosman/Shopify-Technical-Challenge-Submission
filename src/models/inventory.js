const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },  
  item_warehouse: {
    type: Schema.Types.ObjectId,
    ref: "Warehouse",
    required: true,
  },
  item_brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    required: true,    
  },
  item_price: {
    type: Number,
    required: true,
  },
  item_quantity: {
    type: Number,
    default: 1,
    required: true,
  },
  item_description: {
    type: String,
    minlength: 3,
    maxlength: 500,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletionComment: {
    type: String,
    default: "",
  },
},{
  timestamps: true,
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;