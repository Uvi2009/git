const multer = require("multer");

// Multer Local File storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb, (null, "public/assests");
  },
  filename: function (req, file, cb) {
    cb, (null, file.originalname);
  },
});
const upload = multer({ storage });

// multer with gridfs
const storage1 = multer.memoryStorage();
const upload1 = multer({ storage1 });

module.exports = {upload,upload1}