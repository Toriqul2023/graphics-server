const multer=require('multer')
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  './src/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage,  limits: {
    fileSize: 5 * 1024 * 1024, // Max file size (e.g., 5MB)
    fieldSize: 10 * 1024 * 1024, // Max size for non-file fields (e.g., 10MB for text fields)
  }, })
  module.exports=upload