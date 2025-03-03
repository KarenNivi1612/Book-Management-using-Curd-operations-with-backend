const Book = require("../Models/Book");

const Update = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error });
    }
};

module.exports = Update;
