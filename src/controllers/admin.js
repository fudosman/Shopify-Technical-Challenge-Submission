const Category = require("../models/category");
const Brand = require("../models/brand");


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
exports.getBrand = async (req, res) => {
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

// delete the brand
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


// create a category
exports.postCategory = async (req, res) => {
  try {
    const {
      item_category
    } = req.body;
    const category = new Category({
      item_category
    });
    const savedCategory = await category.save();
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "Category successfully created",
      "data": savedCategory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Category not created",
      "error_message": error.message
    });
  }
};

// read the category
exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
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

// update the category
exports.putCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Category not found"
      });
    }
    const {
      item_category
    } = req.body;
    category.item_category = item_category;
    const savedCategory = await category.save();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Category successfully updated",
      "data": savedCategory
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Category not updated",
      "error_message": error.message
    });
  }
};

// delete the category
exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(StatusCodes.NOT_FOUND).json({
        "status": "error",
        "error_message": "Category not found"
      });
    }
    await category.remove();
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "Category successfully deleted"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "message": "Category not deleted",
      "error_message": error.message
    });
  }
};