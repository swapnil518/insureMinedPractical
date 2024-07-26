const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const AgentSchema = new Schema({
  agent_name: {
    type: String,
    required: true,
  },
});

module.exports = moongoose.model("Agent", AgentSchema);
