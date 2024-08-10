const express = require('express');
const { generateOGImage } = require('../controller/generateImage');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(__dirname, 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage , limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB for files
    fieldSize: 2 * 1024 * 1024, // 2 MB for text fields
  },});

router.post('/generate-og-image',upload.single('image'),generateOGImage);


module.exports = router;