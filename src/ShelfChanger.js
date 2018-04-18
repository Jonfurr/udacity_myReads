import React, { Component } from "react";
// import * as BooksAPI from "./BooksAPI";

class ShelfChanger extends Component {
  state = {
    shelf: "none"
  };

  updateHandler = (e, callback) => {
    const shelf = e.target.value;
    this.props.onUpdate(this.props.book, shelf);
  };

  componentWillMount() {
    if (this.props.shelf) {
      this.setState({ shelf: this.props.shelf });
    }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          className="bookshelf-select"
          defaultValue={this.state.shelf}
          onChange={this.updateHandler}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
