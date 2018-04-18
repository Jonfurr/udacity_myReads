import React, { Component } from "react";
import PropTypes from "prop-types";
import genericCover from "./icons/no-cover-image.jpg";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  state = {
    book: {}
  };
  componentWillMount() {
    this.syncState();
  }

  syncState = () => {
    for (let i = 0; i < this.props.books.length; i++) {
      if (this.props.books[i].id === this.props.book.id) {
        this.setState({ book: this.props.books[i] });
      }
    }
  };

  render() {

    const { book, books, onUpdate } = this.props;
    const bookCover =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : genericCover;
    const title = book.title ? book.title : "Book title unavailable";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${bookCover})`,
                backgroundSize: 'contain'
              }}
            />
            <ShelfChanger
              shelf={this.state.book.shelf}
              book={book}
              books={books}
              onUpdate={onUpdate}
            />
          </div>
          <div className="book-title">{title}</div>
          {
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
            {!book.authors &&
            <div className="book-authors">Author Unavailable</div>}
        </div>
      </li>
    );
  }
}

export default Book;
