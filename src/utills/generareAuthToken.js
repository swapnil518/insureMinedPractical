const jwt = require("jsonwebtoken");

const generateAuthToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = generateAuthToken;
