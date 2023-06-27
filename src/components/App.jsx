import React from 'react';

import BookForm from './BookForm/BookForm';
import BookList from './BookList/BookList';
import Modal from './Modal/Modal';

import booksData from '../books.json';

const books = booksData.books;

export class App extends React.Component {
  state = {
    books: books,
    // [{ id: 1 }, { id: 2 }, { id: 3 }, {id: 4}]
    // [{ id: 1 }, { id: 2 }, { id: 3 }, {id: 4}, {id: 5}]
    modal: { isOpen: false, visibleData: null },
  };

  onRemoveBook = bookId => {
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId), // [{ id: 1 }, { id: 3 }]
    });
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

  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        visibleData: null,
      },
    });
  };

  componentDidMount() {
    const stringifiedBooks = localStorage.getItem('books');
    const books = JSON.parse(stringifiedBooks) ?? [];

    this.setState({ books });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.modal.isOpen !== this.state.modal.isOpen) {
      console.log('МИ ВІДКРИЛИ АБО ЗАКРИЛИ МОДАЛКУ');
    }

    if (prevState.books.length !== this.state.books.length) {
      const stringifiedBooks = JSON.stringify(this.state.books);
      localStorage.setItem('books', stringifiedBooks);
    }
  }

  render() {
    return (
      <div>
        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
          />
        )}
        <BookForm title="BookForm" onAddBook={this.onAddBook} />
        <BookList
          onOpenModal={this.onOpenModal}
          onRemoveBook={this.onRemoveBook}
          books={this.state.books}
        />
      </div>
    );
  }
}
