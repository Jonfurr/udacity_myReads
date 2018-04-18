import React, { Component } from "react";
import Book from "./Book";
import { PropTypes } from 'prop-types';

class BookShelf extends Component {
  static PropTypes = {
    onUpdate: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired, 
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book
                key={book.id}
                books={this.props.books}
                book={book}
                onUpdate={this.props.onUpdate}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
