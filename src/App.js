import React, { Component } from "react";
import "./App.css";
import BooksData from "./books.json";
import BookList from "./components/book-list";

class App extends Component {
  render() {
    const element = (
      <div className="App">
        <BookList books={BooksData.books} />
      </div>
    );
    return element;
  }
}

export default App;
