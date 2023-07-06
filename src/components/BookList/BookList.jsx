import React from 'react';
import PropTypes from 'prop-types';
import BookItem from 'components/BookItem/BookItem';

function BookList({ books, onRemoveBook }) {
  return (
    <ul>
      {books.map(book => (
        <BookItem
          book={book}
          onRemoveBook={onRemoveBook}
        />
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
