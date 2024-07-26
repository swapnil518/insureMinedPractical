const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(
      null,
      "C:/Users/pm761/Desktop/Practical tasks/insureMinedTask/src/upload"
    );
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({ storage: storage, limits: "10mb" });

module.exports = uploadFile;
