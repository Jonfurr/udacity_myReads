import React, { Component } from "react";
import PropTypes from "prop-types";
import noCover from "./icons/no-cover-image.png";
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
    if (this.state.book.shelf) {
      console.log(`State: ${this.state.book.shelf}`);
    }

    const { book, books, onUpdate } = this.props;

    // add fallbacks for missing cover images and title
    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover;
    const title = book.title ? book.title : "No title available";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${coverImg})`
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
          {/* Check for authors and render each on separate line if exist*/
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
