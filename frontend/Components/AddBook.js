import React, { useState } from "react";

const AddBook = (props) => {
    const initialformstate = { Id: null, Title: "", Author: "", Publisher: "", Price: "", Stock: "" };
    const [cbook, setCbook] = useState(initialformstate);

    const oninputchange = (event) => {
        const { name, value } = event.target;
        setCbook({ ...cbook, [name]: value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!cbook.Title || !cbook.Author || !cbook.Publisher || !cbook.Price || !cbook.Stock) return;
                props.addbook(cbook); 
                setCbook(initialformstate);
            }}
        >
            <label htmlFor="Title">Title</label>
            <input type="text" id="Title" name="Title" placeholder="Enter the Title" onChange={oninputchange} value={cbook.Title} />
            
            <label htmlFor="Author">Author</label>
            <input type="text" id="Author" name="Author" placeholder="Enter the Author" onChange={oninputchange} value={cbook.Author} />
            
            <label htmlFor="Publisher">Publisher</label>
            <input type="text" id="Publisher" name="Publisher" placeholder="Enter the Publisher" onChange={oninputchange} value={cbook.Publisher} />
            
            <label htmlFor="Price">Price</label>
            <input type="text" id="Price" name="Price" placeholder="Enter the Price" onChange={oninputchange} value={cbook.Price} />
            
            <label htmlFor="Stock">Stock</label>
            <input type="text" id="Stock" name="Stock" placeholder="Enter the Stock" onChange={oninputchange} value={cbook.Stock} />
            
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
