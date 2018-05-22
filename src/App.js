import React, { Component } from "react";
import "./App.css";
import Data from "./books.json";
import BookList from "./components/books-list";
import BookDetails from "./components/book-details";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBookId: null
    };
  }
  render() {
    return <div className="App">{this.showContent()}</div>;
  }

  showContent = () => {
    if (this.state.currentBookId) {
      return (
        <BookDetails
          id={this.state.currentBookId}
          goBack={() => this.setState({ currentBookId: null })}
        />
      );
    } else {
      return (
        <BookList
          onViewDetails={book => this.setState({ currentBookId: book.isbn13 })}
          books={Data.books}
        />
      );
    }
  };
}

export default App;
