const Book = require("../Models/Book");

const Add = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.json(savedBook);
    } catch (error) {
        res.status(500).json({ message: "Error adding book", error });
    }
};

module.exports = Add;
