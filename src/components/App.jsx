import BookForm from './BookForm/BookForm';
import booksData from '../books.json';
import React from 'react';

const books = booksData.books;

export class App extends React.Component {
  state = {
    books: books, // [{ id: 1 }, { id: 2 }, { id: 3 }, {id: 4}]
  };

  onRemoveBook = bookId => {
    console.log(bookId); // 2

    // [{ id: 1 }, { id: 2 }, { id: 3 }]
    // [{ id: 1 }, { id: 3 }]

    this.setState({
      books: this.state.books.filter(book => book.id !== bookId), // [{ id: 1 }, { id: 3 }]
    });

    // this.setState(state => {
    //   return {
    //     books: state.books.filter(book => book.id !== bookId),
    //   };
    // });
  };

  onAddBook = bookData => {
    const finalBook = {
      ...bookData,
      id: (Math.random() * 10).toString(),
    };

    this.setState({
      books: [finalBook, ...this.state.books],
    });
  };

  render() {
    return (
      <div>
        <BookForm title="BookForm" onAddBook={this.onAddBook} />
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <button onClick={() => this.onRemoveBook(book.id)}>
                &times;
              </button>
              <h3>Title: {book.title}</h3>
              <h4>Author: {book.author}</h4>
              <p>Year: {book.year}</p>
              <p>Genre: {book.genre}</p>
              <p>Favourite: {book.favourite ? '❤' : '-'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
