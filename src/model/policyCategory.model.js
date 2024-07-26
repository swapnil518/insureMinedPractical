const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const policy_categorySchema = new Schema({
    category_name: {
    type: String,
    required: true,
  },
});

module.exports = moongoose.model("policy_category", policy_categorySchema);
