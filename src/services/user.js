const User = require("../models/user");
const {hashPassword,verifyPassword} = require("../services/bcrypt");


module.exports = class userService{
  static async createUser(data){
    const {username,email,password} = data;
    const hashedPassword = await hashPassword(password);
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    try{
      const newUser = await user.save();
      return newUser;
    }
    catch(err){
      throw err;
    }
  }
};