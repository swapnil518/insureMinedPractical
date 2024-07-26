const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const userAccountSchema = new Schema({
  account_name: {
    type: String,
    required: true,
  },
  user: {
    type: moongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = moongoose.model("userAccount", userAccountSchema);
