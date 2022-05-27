const {
  StatusCodes
} = require('http-status-codes');
const Transaction = require("../models/transaction");

exports.getOneTransaction = async function (req, res) {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: "error",
        message: "Transaction not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      status: "success",
      data: transaction,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "transaction not found",
      "error_message": error.message
    });
  }
};

exports.getAllTransaction = async function (req, res) {
  try {
    const transaction = await Transaction.find();
    if (!transaction) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: "error",
        message: "Transaction not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      status: "success",

      data: transaction
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "transaction not found",
      "error_message": error.message
    });
  }
};

exports.postTransaction = async function (req, res) {
  try {

  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "transaction not created",
      "error_message": error.message
    });
  }
};