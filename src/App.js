import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import Header from "./Header"

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
    this.handleUpdateBooks = this.handleUpdateBooks.bind(this);
  }

  handleUpdateBooks(books) {
    this.setState({ books });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <SearchBar handleUpdateBooks={this.handleUpdateBooks} />
        {this.state.books.map((book) => (
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <a href={book.volumeInfo.canonicalVolumeLink} target="_blank">Title: {book.volumeInfo.title}</a> | Author: {book.volumeInfo.authors}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
