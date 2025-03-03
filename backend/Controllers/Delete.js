const Book = require("../Models/Book");

const Delete = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting book", error });
    }
};

module.exports = Delete;
