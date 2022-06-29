const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255

  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  }
  // ,
  // transactions: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Transaction"
  // }]
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);