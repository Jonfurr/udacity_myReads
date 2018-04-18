import React, { Component } from 'react';
// import * as BooksAPI from "./BooksAPI";

class ShelfChanger extends Component {
  updateHandler = (e, callback) => {
    const shelf = e.target.value;
    this.props.onUpdate(this.props.book, shelf);
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select className="bookshelf-select" defaultValue={this.props.book.shelf || "none" } onChange={this.updateHandler}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger