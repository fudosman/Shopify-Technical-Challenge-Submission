const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item_categorySchema = new Schema({
  item_category: {
    type: String,
    required: true,
  },  
},{
  timestamps: true,
});

const item_category = mongoose.model("Category", item_categorySchema);
module.exports = item_category;