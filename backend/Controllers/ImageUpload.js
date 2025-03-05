const express = require('express');
const router = express.Router();
const Multer = require('multer');
const Path = require('path');
const ImageUpload = require('../Models/ImageUpload'); 

const dir = Path.join(__dirname, "Files");

// Multer Storage Configuration
const storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + Path.extname(file.originalname)); // Unique file name
    }
});

// Multer Upload Middleware
const upload = Multer({ storage });

router.post("/", upload.single("Fileupload"), (req, res) => {
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({ error: "File is required" });
  }
  const Name = req.body.name;
  const FileUpload = req.file.filename;
  const FileType = req.file.mimetype;

  const newBookImg = new ImageUpload({ Name, FileUpload, FileType });

  newBookImg
    .save()
    .then(() => res.json({ message: "File uploaded successfully", data: newBookImg }))
    .catch((err) => res.status(400).json({ error: err.message })); 
});

// Serve Uploaded Files
router.use("/files", express.static(dir));

router.get("/view_file", (req, res) => {
    ImageUpload.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json({ error: err.message })); 
});

module.exports = router;
