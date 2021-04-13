import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
   
  updateShelf = e =>
    this.props.shelfChanger(this.props.book, e.target.value); //it will change book to the desired shelf by the inputted props

  render() {
    const { book, books } = this.props;
    let currentShelf = 'none';  // all books will start as the fourth category of books which is none (unspecified stil)

    for (let objectBook of books) {
      if (objectBook.id === book.id) { //to clarify that they are the same book
        currentShelf = objectBook.shelf; // change the shelf to the desired props!!
      }
    }
    
    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  };
}

export default ShelfChanger;  