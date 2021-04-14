import React from 'react';
import { BrowserRouter, Switch, Route ,Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';

class BooksApp extends React.Component {
  state = { books: [] };
  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  
  shelfChanger = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== changedBook.id).concat(changedBook)
      }));
    });
  };
  
  render() {
    const { books } = this.state;
    
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} shelfChanger={this.shelfChanger} />
            )}
          />
          <Route exact path="/"
            render = {() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My BookTrack</h1>
                </div>
                <BookList books={books} shelfChanger={this.shelfChanger} />
                <div className="open-search">
                  <Link to="/search">
                  <button> Search </button>
                  </Link>
                </div>
              </div>
            )}
          />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;