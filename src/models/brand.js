const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  item_brand: {
    type: String,
    required: true,
  },  
},{
  timestamps: true,
});

const item_brand = mongoose.model("Brand", brandSchema);
module.exports = item_brand;