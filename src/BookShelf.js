import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
// import * as BooksAPI from "./BooksAPI";
class BookShelf extends Component {
  
  render(){
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                    <ShelfChanger onUpdate={this.props.onUpdate} book={book} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>)}
          </ol>
        </div>
      </div>;
    }

}

export default BookShelf