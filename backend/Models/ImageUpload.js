const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    Name: { type: String},
    FileUpload: { type: String},
    FileType: { type: String}
});

const ImageUpload = mongoose.model("Files", FileSchema);

module.exports = ImageUpload;
