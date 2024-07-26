const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const PolicyCarrier = new Schema({
    company_name: {
        type: String,
        required: true,
      },
});

module.exports = moongoose.model("policy_carrier", PolicyCarrier);
