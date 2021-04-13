import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    query: '',
    newBooks: [],
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({query});

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0                     //if there is any books let the new books array carried out
        ? this.setState({ newBooks: books}) //and added to the newbooks object or make it empty otherwise
        : this.setState({ newBooks: [] });  
        
      });
    } 
    else
      this.setState({ newBooks: []});
  };

  render() {
    const { query, newBooks} = this.state;
    const { books, shelfChanger } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
              placeholder="Search by title  or author of the book"
              autoFocus="true"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && ( //if there is books show them
            <div>
              <p>Search returned {newBooks.length} books </p>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book book={book} books={books} key={book.id} shelfChanger={shelfChanger} />
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    );
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  };
}
export default Search;