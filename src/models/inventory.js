const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item_name: {
    type: String,
    required: true,
  },  
  item_category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
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