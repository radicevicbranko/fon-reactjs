import React, { Component } from "react";
import "./App.css";
import Data from "./books.json";
import BookList from "./components/books-list";
import BookDetails from "./components/book-details";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={() => <BookList books={Data.books} />}
          />
          <Route
            path="/book/:id"
            component={props => <BookDetails {...props} />}
          />
        </div>
      </Router>
    );
  };
}

export default App;
