import React from "react";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentWillMount() {
    BooksAPI.getAll()
      .then(data => {
        this.setState({ books: data });
      })
  }



  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      BooksAPI.getAll().then(data => {
        this.setState({ books: data });
      });
    })
  }


  render() {
    if (this.state.books.length < 1) {
      return <div className="spinner">
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>;
    }
    if (this.state.books.length >= 1) {
      return <div className="app">
          <Route exact path="/" render={() => <ListBooks books={this.state.books} onUpdate={this.updateShelf} />} />
          <Route path="/search" render={() => <Search books={this.state.books} onUpdate={this.updateShelf} />} />
        </div>;
    }
  }
}

export default BooksApp;
