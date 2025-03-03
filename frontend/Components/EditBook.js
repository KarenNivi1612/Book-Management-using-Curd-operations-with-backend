import React, { useEffect, useState } from 'react';

const EditBook = ({ setEdit, currentbook, updatebook }) => {
    const [ebook, setEbook] = useState(currentbook);

    const oninputchange = (event) => {
        const { name, value } = event.target;
        setEbook({ ...ebook, [name]: value });
    };

    useEffect(() => {
        setEbook(currentbook);
    }, [currentbook]);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!ebook.Title || !ebook.Author || !ebook.Publisher || !ebook.Price || !ebook.Stock) return;
                updatebook(ebook._id, ebook);
            }}
        >
            <label htmlFor="Title">Title</label>
            <input type="text" id="Title" name="Title" placeholder="Enter the Title" onChange={oninputchange} value={ebook.Title} />

            <label htmlFor="Author">Author</label>
            <input type="text" id="Author" name="Author" placeholder="Enter the Author" onChange={oninputchange} value={ebook.Author} />

            <label htmlFor="Publisher">Publisher</label>
            <input type="text" id="Publisher" name="Publisher" placeholder="Enter the Publisher" onChange={oninputchange} value={ebook.Publisher} />

            <label htmlFor="Price">Price</label>
            <input type="text" id="Price" name="Price" placeholder="Enter the Price" onChange={oninputchange} value={ebook.Price} />

            <label htmlFor="Stock">Stock</label>
            <input type="text" id="Stock" name="Stock" placeholder="Enter the Stock" onChange={oninputchange} value={ebook.Stock} />

            <button type="submit">Update Book</button>
            <button type="button" onClick={() => setEdit(false)}>Cancel</button>
        </form>
    );
};

export default EditBook;
