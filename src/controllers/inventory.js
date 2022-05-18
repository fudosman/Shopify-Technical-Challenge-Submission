const {
  StatusCodes
} = require('http-status-codes');
const Inventory = require("../models/inventory");

exports.postInventory = async (req, res) => {
  try {
    const {
      item_name,
      item_category,
      item_brand,
      item_price
    } = req.body;
    const inventory = new Inventory({
      item_name,
      item_category,
      item_brand,
      item_price
    });
    const savedInventory = await inventory.save();
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "Inventory successfully created",
      "data": savedInventory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not created",
      "error_message": error.message
    });
  }
};

exports.putInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventory = await Inventory.findById(inventoryId);

    if (!inventory) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Inventory not found"
      });
    }
    const {
      name
    } = req.body;
    inventory.name = name;
    const savedInventory = await inventory.save();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Inventory successfully updated",
      "data": savedInventory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not updated",
      "error_message": error.message
    });
  }
};


exports.getAllInventory = async (req, res) => {
  try {
    const allInventory = await Inventory.find({
      isDeleted: false
    }).sort('-createdAt');
    if (!allInventory) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Inventory not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the get all resource route is running",
      "data": allInventory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not found",
      "error_message": error.message
    });
  }
};

exports.getOneInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventory = await Inventory.findById(inventoryId);
    if (!inventory || inventory.isDeleted === true) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Inventory not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the get one resource route is running",
      "data": inventory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not found",
      "error_message": error.message
    });
  }
};


exports.deleteInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventory = await Inventory.findById(inventoryId);
    if (!inventory || inventory.isDeleted === true) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Inventory not found"
      });
    }

    inventory.isDeleted = true;
    if (req.body.deletionComment) {
      inventory.deletionComment = req.body.deletionComment;
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({
        "status": "error",
        "error_message": "Please provide a deletion comment"
      });
    }
    const deletedInventory = await inventory.save();

    if (deletedInventory) {
      return res.status(StatusCodes.OK).json({
        "status": "success",
        "message": "Inventory successfully deleted",
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not deleted",
      "error_message": error.message
    });
  }
};

exports.undeleteInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventory = await Inventory.findById(inventoryId);
    if (!inventory) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Inventory not found"
      });
    }

    inventory.isDeleted = false;
    inventory.deletionComment = "";
    const undeletedInventory = await inventory.save();

    if (undeletedInventory) {
      return res.status(StatusCodes.OK).json({
        "status": "success",
        "message": "Inventory successfully undeleted",
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Inventory not undeleted",
      "error_message": error.message
    });
  }
};