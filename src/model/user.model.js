const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true, // corrected 'require' to 'required'
  },
  DOB: {
    type: String,
  },
  address: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  state: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  userType: {
    type: String,
  },
  agent: {
    type: mongoose.Types.ObjectId,
    ref: "Agent",
  },
});

module.exports = mongoose.model("User", UserSchema);
