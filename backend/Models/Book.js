const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Publisher: { type: String, required: true },
    Price: { type: String, required: true },
    Stock: { type: Number, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
