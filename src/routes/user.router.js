const express = require("express");
const router = express.Router();
const {
  register,
  login,
  importUsers,
} = require("../controller/user.controller");

const uploadFile = require("../middleware/multer");

router.post("/register", register);
router.get("/login", login);
router.post("/import-users", uploadFile.single("csvFile"), importUsers);

module.exports = router;
