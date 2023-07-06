import { BookContext } from 'context/BooksContext';
import React, { useContext } from 'react';

function BookItem({ book, onRemoveBook }) {
  const {  onOpenModal } = useContext(BookContext);

  return (
    <li key={book.id}>
      <button onClick={() => onRemoveBook(book.id)}>&times;</button>
      <button onClick={() => onOpenModal(book)}>OPEN MODAL WITH DETAILS</button>
      <h3>Title: {book.title}</h3>
      <h4>Author: {book.author}</h4>
      <p>Year: {book.year}</p>
      <p>Genre: {book.genre}</p>
      <p>Favourite: {book.favourite ? '❤' : '-'}</p>
    </li>
  );
}

export default BookItem;
