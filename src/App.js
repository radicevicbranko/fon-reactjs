import React, { Component } from "react";
import "./App.css";
import Data from "./books.json";
import BookList from "./components/books-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList books={Data.books} />
      </div>
    );
  }
}

export default App;
