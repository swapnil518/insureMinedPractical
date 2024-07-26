const xlsx = require("xlsx");
const {
  addUserService,
  getUserService,
  importCSVUsersService,
} = require("../services/user.service");
const {
  addAgentService,
  getAgentByIdService,
} = require("../services/agent.service");
const sendResponse = require("../utills/sendResponse");
const { STATUS_CODE } = require("../utills/constants");

const register = async (req, res) => {};

const login = async (req, res) => {};

const importUsers = async (req, res) => {
  try {
    console.log(req.file);
    const workBook = xlsx.readFile(req.file?.path);
    const workBookSheet = workBook.SheetNames;
    const userData = xlsx.utils.sheet_to_json(
      workBook.Sheets[workBookSheet[0]]
    );
    const Agent = await addAgentService({ agent_name: userData[0]?.agent });
    const User = await addUserService({
      first_name: userData[0].firstname,
      DOB: userData[0].dob,
      address: userData[0].address,
      phone_number: userData[0].phone_number,
      agent: Agent?.id,
    });
  } catch (error) {
    sendResponse(
      res,
      { message: error.message },
      STATUS_CODE.SERVER_ERROR,
      GENERAL.GENERAL_ERROR_CONTENT
    );
  }
};

module.exports = { register, login, importUsers };
