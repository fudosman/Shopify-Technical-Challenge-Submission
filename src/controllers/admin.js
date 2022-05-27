const Warehouse = require("../models/warehouse");
const Brand = require("../models/brand");
const {
  StatusCodes
} = require('http-status-codes');

// create a brand
exports.postBrand = async (req, res) => {
  try {
    const {
      item_brand
    } = req.body;
    const brand = new Brand({
      item_brand
    });
    const savedBrand = await brand.save();
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "Brand successfully created",
      "data": savedBrand
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Brand not created",
      "error_message": error.message
    });
  }
};

// read the brand  
exports.getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Brands successfully fetched",
      "data": brands
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Brands not fetched",
      "error_message": error.message
    });
  }
};

// read a brand by id
exports.getBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Brand not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Brand successfully fetched",
      "data": brand
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Brand not fetched",
      "error_message": error.message
    });
  }
};

// update the brand
exports.putBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Brand not found"
      });
    }
    const {
      item_brand
    } = req.body;
    brand.item_brand = item_brand;
    const savedBrand = await brand.save();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Brand successfully updated",
      "data": savedBrand
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Brand not updated",
      "error_message": error.message
    });
  }
};

// delete a brand
exports.deleteBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Brand not found"
      });
    }
    await brand.remove();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Brand successfully deleted"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Brand not deleted",
      "error_message": error.message
    });
  }
};

// create a warehouse
exports.postWarehouse = async (req, res) => {
  try {
    const {
      warehouse_name,
      warehouse_address,
      warehouse_contact,
      warehouse_email,
      warehouse_status
    } = req.body;
    const warehouse = new Warehouse({
      warehouse_name,
      warehouse_address,
      warehouse_contact,
      warehouse_email,
      warehouse_status
    });
    const savedwarehouse = await warehouse.save();
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "warehouse successfully created",
      "data": savedwarehouse
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "warehouse not created",
      "error_message": error.message
    });
  }
};

// read all warehouse
exports.getAllWarehouse = async (req, res) => {
  try {
    const categories = await Warehouse.find();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Categories successfully fetched",
      "data": categories
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Categories not fetched",
      "error_message": error.message
    });
  }
};

// read a warehouse by id
exports.getWarehouse = async (req, res) => {
  try {
    const warehouseId = req.params.id;
    const warehouse = await Warehouse.findById(warehouseId);
    if (!warehouse) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "warehouse not found"
      });
    }
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "warehouse successfully fetched",
      "data": warehouse
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "warehouse not fetched",
      "error_message": error.message
    });
  }
};

// update the warehouse
exports.putWarehouse = async (req, res) => {
  try {
    const warehouseId = req.params.id;
    const warehouse = await Warehouse.findById(warehouseId);
    if (!warehouse) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "warehouse not found"
      });
    }
    const {
      warehouse_name,
      warehouse_address,
      warehouse_contact,
      warehouse_email,
      warehouse_status
    } = req.body;

    warehouse.warehouse_name = warehouse_name;
    warehouse.warehouse_address = warehouse_address;
    warehouse.warehouse_contact = warehouse_contact;
    warehouse.warehouse_email = warehouse_email;
    warehouse.warehouse_status = warehouse_status;
    
    const savedwarehouse = await warehouse.save();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "warehouse successfully updated",
      "data": savedwarehouse
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "warehouse not updated",
      "error_message": error.message
    });
  }
};

// delete the warehouse
exports.deleteWarehouse = async (req, res) => {
  try {
    const warehouseId = req.params.id;
    const warehouse = await Warehouse.findById(warehouseId);
    if (!warehouse) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "warehouse not found"
      });
    }
    await Warehouse.deleteOne();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "warehouse successfully deleted"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "warehouse not deleted",
      "error_message": error.message
    });
  }
};