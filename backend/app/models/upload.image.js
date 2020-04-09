const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let a = file.originalname.split(".");
    cb(null, `File-${Date.now()}.${a[a.length - 1]}`);
    // cb(null, `${file.fieldname}-${Date.now()}.${a[a.length - 1]}`);
  },
});

const upload = multer({ storage: storage });

module.exports = {
  upload,
};
