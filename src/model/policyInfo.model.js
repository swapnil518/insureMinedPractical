const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const PolicyInfo = new Schema({
  policy_number: {
    type: String,
  },
  policy_start_date: {
    type: Date,
  },
  policy_end_date: {
    type: Date,
  },
  policy_category: {
    type: moongoose.Types.ObjectId,
    ref: "policy_category",
  },
  company: {
    type: moongoose.Types.ObjectId,
    ref: "policy_carrier",
  },
  user: {
    type: moongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = moongoose.model("policy_info", PolicyInfo);
