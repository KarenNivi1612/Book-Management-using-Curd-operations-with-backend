const Book = require("../Models/Book");

const View = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error });
    }
};

module.exports = View;
