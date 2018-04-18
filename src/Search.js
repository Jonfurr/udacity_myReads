import React, { Component } from 'react'
import { Link } from "react-router-dom"
import ShelfChanger from "./ShelfChanger";
import * as BooksAPI from "./BooksAPI";

class Search extends Component {
  state = {
    books: [],
    results: [],
    query: ""
  };

  componentDidMount() {
    this.setState({
      books: this.props.books
    });
  }

  search = event => {
    const query = event.target.value.trim();
    this.setState({ query: query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query, 20).then(books => {
        books.length > 0
          ? this.setState({ results: books, searchErr: false })
          : this.setState({ results: [], searchErr: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ results: [], searchErr: false });
  };

  
  render() {
    const { query, results, searchErr } = this.state;
    const thumbnail = './icons/no-cover-image.png';
    return <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input className="search-contacts" type="text" placeholder="Search by title or author" value={query} onChange={this.search} />
          </div>
        </div>
        <div className="search-books-results">
          {results.length > 0 && <div>
              <h3 className="results-qty">{results.length} results. </h3>
              <ol className="books-grid">
                {this.state.results.map(book => <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail || thumbnail})` }} />
                        <ShelfChanger onUpdate={this.props.onUpdate} book={book} />
                      </div>
                      <div className="book-title">{book.title}</div>
                     
                        <div className="book-authors">{book.authors}</div>
                    
                    </div>
                  </li>)}
              </ol>
            </div>}
          {searchErr && <div>
              <div className="">
                <h3 className="results-qty">0 Results.  Please try again.</h3>
              </div>
            </div>}
        </div>
      </div>;
  }
}

export default Search

