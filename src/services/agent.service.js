const agentModel = require("../model/agent.model");
const Agent = require("../model/agent.model");

exports.addAgentService = async (body) => {
  const agent = await Agent.create(body);
  return agent;
};

exports.getAgentByIdService = async (condition) => {
  const agent = await agentModel.findOne(condition);
};
