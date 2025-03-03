import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Table from './Components/Table';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
        .then(response => setBooks(response.data))
        .catch(error => console.error("Error fetching books:", error));
  }, []);

  const addbook = (book) => {
    axios.post("http://localhost:5000/books", book)
        .then(response => setBooks([...books, response.data]))
        .catch(error => console.error("Error adding book:", error));
  };

  const deletebook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`)
        .then(() => setBooks(books.filter(book => book._id !== id)))
        .catch(error => console.error("Error deleting book:", error));
  };

  const [Edit, setEdit] = useState(false);
  const initialeditstate = { _id: null, Title: "", Author: "", Publisher: "", Price: "", Stock: "" };
  const [currentbook, setCurrentbook] = useState(initialeditstate);

  const editrow = (book) => {
    setEdit(true);
    setCurrentbook({
      _id: book._id, // Use _id instead of Id
      Title: book.Title,
      Author: book.Author,
      Publisher: book.Publisher,
      Price: book.Price,
      Stock: book.Stock
    });
  };

  const updatebook = (id, updatedBook) => {
    axios.put(`http://localhost:5000/books/${id}`, updatedBook)
        .then(response => {
            setBooks(books.map(book => (book._id === id ? response.data : book)));
            setEdit(false); // Close edit form after update
        })
        .catch(error => console.error("Error updating book:", error));
  };

  return (
    <div className="App">
      <h1>Book Store Management</h1>
      <div className="container">
        <div className="form-container">
          {Edit ? (
            <>
              <h3>Edit BOOK</h3>
              <EditBook setEdit={setEdit} currentbook={currentbook} updatebook={updatebook} />
            </>
          ) : (
            <>
              <h3>ADD BOOK DETAILS</h3>
              <AddBook addbook={addbook} />
            </>
          )}
        </div>
        <div className="table-container">
          <h2>BOOK DETAILS </h2>
          <Table books={books} deletebook={deletebook} editrow={editrow} />
        </div>
      </div>
    </div>
  );
}

export default App;
