const express = require('express')
const router = express.Router()
const Multer = require('multer')
const Path = require('path')
let BookImg = require('../Models/ImageUpload')
const fs = require('fs')

const dir = Path.join(__dirname,"Files")

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true})
}

const storage = Multer.diskStorage({
    destination : function(req,file,cb){ //cb-call back function
        cb(null,dir) // null-ensures no error
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + Path.extname(file.originalname)); // Unique file name
    } 
})
let upload = Multer({storage})

router.route('/').post(upload.single('Fileupload'),(req,res) =>{
    console.log(req.file)
    const Name =req.body.name; // get
    const FileUpload= req.file.filename; //original filename
    const FileType =req.file.mimetype;

    const bookImg ={Name,FileUpload,FileType}
    const newbookImg =new BookImg(bookImg)
    newbookImg.save()
        .then(() => res.json({ message: "Updated Successfully" }))
        .catch(err => res.status(400).json("Error:" +err));
})

router.use('/files',express.static(dir))
router.get('/view_file/:filename', (req, res) => {
    const filePath = Path.join(__dirname, 'Files', req.params.filename)
        
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found')
        }
    })
});


module.exports =router

