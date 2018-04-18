import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom"
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  updateShelf(e) {
    BooksAPI.update(this.props.book, e.target.value)
    .then( () => {
      console.log('update caled',this.props.book, e.target.value);
    })
  }

  search(query) {
    BooksAPI.search(query);
  }

  render() {
    return <div className="app">
        <Route exact path="/" render={() => <ListBooks onUpdate={this.updateShelf} books={this.state.books} />} />
        <Route path="/search" render={() => <SearchBooks onSearch={query => {
                this.search(query);
              }} />} />
      </div>;
  }
}

export default BooksApp
