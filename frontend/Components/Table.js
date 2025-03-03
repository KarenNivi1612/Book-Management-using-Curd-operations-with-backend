import React from "react";

const Table = ({ books, deletebook, editrow }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author(s)</th>
                    <th>Publisher</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.length > 0 ? (
                    books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.Title}</td>
                            <td>{book.Author}</td>
                            <td>{book.Publisher}</td>
                            <td>{book.Price}</td>
                            <td>{book.Stock}</td>
                            <td>
                                <button onClick={() => editrow(book)}>Edit</button>
                                <button onClick={() => deletebook(book._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No book data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
