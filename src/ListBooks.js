import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  render() {
    let currentlyReading = this.props.books.filter(
      books => books.shelf === "currentlyReading"
    );
    let wantToRead = this.props.books.filter(
      books => books.shelf === "wantToRead"
    );
    let read = this.props.books.filter(books => books.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            onUpdate={this.props.onUpdate}
            books={currentlyReading}
            title="Currently Reading"
          />
          <BookShelf
            onUpdate={this.props.onUpdate}
            books={wantToRead}
            title="Want to Read"
          />
          <BookShelf onUpdate={this.props.onUpdate} books={read} title="Read" />
        </div>
        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
