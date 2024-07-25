const jwt = require("jsonwebtoken");
const sendResponse = require("../utills/sendResponse");
const constants = require("../utills/constants");
const responseMessage = require("../utills/responseMessages");

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return sendResponse(
        res,
        null,
        constants.STATUS_CODE.UNAUTHORIZED,
        responseMessage.USERS.UNAUTHORIZED
      );
    }

    const result = jwt.verify(token, SECRET_KEY);
    // const user = await User.finOne({
    //   where: {
    //     id: result.id,
    //   },
    // });
    if (!user) {
      return sendResponse(
        res,
        null,
        constants.STATUS_CODE.UNAUTHORIZED,
        responseMessage.USERS.UNAUTHORIZED
      );
    }
    req.user = result;
  } catch (error) {
    sendResponse(
      res,
      { message: error.message },
      STATUS_CODE.SERVER_ERROR,
      GENERAL.GENERAL_ERROR_CONTENT
    );
  }
};

module.exports = authenticate;
