import React, {Component} from 'react';
import noCover from './icons/notfound.jpg';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';



class Book extends Component{
    render(){
        const { book, books, shelfChanger } = this.props;
        //if there is no image availalbe for the book
        const coverImg  = book.imageLinks ? book.imageLinks.smallThumbnail : noCover;

        //if there is no title availalbe for the book
        const title = book.title ? book.title : 'No title available';

        // {console.log(coverImg)}
        
        return(
            <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}/>
                <ShelfChanger book={book} books={books} shelfChanger={shelfChanger} />
                </div>
                <div className="book-title">{title}</div>
                {//if this is true do the mapping since the api gives us an array
                book.authors &&
                book.authors.map((author, index) => (
                <div className="book-authors" key={index}> {author} </div>))
                }
            </div>
            </li>
        )
    }
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired
  };

export default Book;