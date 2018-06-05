import React, { Component } from "react";
import "./App.css";
import Data from "./books.json";
import BookList from "./components/books-list";
import BookDetails from "./components/book-details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBookId: null
    };
  }
  render() {
    return (
      <div className="App">
        {this.showNavbar()}
        {this.showContent()}
      </div>
    );
  }

  showNavbar = () => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">My first awesome App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <Button type="submit">Search</Button>
          </Navbar.Form>
          <Navbar.Text>
            Hello user: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <span className="icon-wrapper">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <span className="badge">2</span>
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  };
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
