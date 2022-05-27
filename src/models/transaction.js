const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transaction_name: {
    type: String,
    required: true,
  },  
},{
  timestamps: true,
});

const transactionModel = mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel;