require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {
  createUser
} = require("../services/user");

module.exports = class User {
  static async createNewUser(req, res, next) {
    const data = req.body;
    try {
      const user = await createUser(data);

      const token = jwt.sign({
        userId: user._id
      }, process.env.JWT_SECRET, {
        expiresIn: "6h"
      });

      res.status(201).json({
        status: "success",
        message: "User created successfully",
        token,
        user
      });
    } catch (error) {
      next(error);
    }
  }
};