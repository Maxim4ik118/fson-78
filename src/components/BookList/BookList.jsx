import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, onRemoveBook, onOpenModal }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <button onClick={() => onRemoveBook(book.id)}>&times;</button>
          <button onClick={() => onOpenModal(book)}>
            OPEN MODAL WITH DETAILS
          </button>
          <h3>Title: {book.title}</h3>
          <h4>Author: {book.author}</h4>
          <p>Year: {book.year}</p>
          <p>Genre: {book.genre}</p>
          <p>Favourite: {book.favourite ? '❤' : '-'}</p>
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  onRemoveBook: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      favourite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default BookList;
