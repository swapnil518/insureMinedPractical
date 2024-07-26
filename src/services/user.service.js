const User = require("../model/user.model");
exports.addUserService = async (body) => {
  const user = await User.create(body);
  return user;
};

exports.getUserService = async () => {};

exports.importCSVUsersService = async () => {};
