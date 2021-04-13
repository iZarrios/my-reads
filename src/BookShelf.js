import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const { books} = this.props;
    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id} //IMPORTANT FOR SHELFCHANGER!!!
            shelfChanger={this.props.shelfChanger}
          />
        ))}
      </ol>
    );
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  };
}

export default BookShelf;