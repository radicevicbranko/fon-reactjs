import React, { Component } from "react";
import "./App.css";
import BookList from "./components/books-list";
import BookDetails from "./components/book-details";
import Cart from "./components/cart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  FormGroup,
  FormControl,
  Button,
  Nav,
  NavItem
} from "react-bootstrap";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: null,
      term: "react",
      searchTerm: "",
      cartItems: []
    };
  }

  addToCart = book => {
    let newCartItems = [...this.state.cartItems, book];
    this.setState({
      cartItems: newCartItems
    });
  };

  async componentDidMount() {
    await this.setTerm(this.state.term);
  }

  setTerm = async term => {
    const response = await axios.get("/api/1.0/search/" + term);
    this.setState({
      books: response.data,
      term: term
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.showNavbar()}
          <Grid>
            <Row>
              <Col xs={12} md={2}>
                {this.showLeftMenu()}
              </Col>
              <Col xs={12} md={10}>
                {this.showContent()}
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
  selectBooks = key => {
    this.setTerm(key);
  };
  showLeftMenu = () => {
    return (
      <Nav
        bsStyle="pills"
        stacked
        activeKey={this.state.term}
        onSelect={this.selectBooks}
      >
        <NavItem componentClass={Link} to="/" href="/" eventKey={"react"}>
          React JS
        </NavItem>
        <NavItem componentClass={Link} to="/" href="/" eventKey={"javascript"}>
          Java Script
        </NavItem>
      </Nav>
    );
  };

  changeSearchTerm = event => {
    this.setState({
      searchTerm: event.currentTarget.value
    });
  };
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
              <FormControl
                onChange={e => this.changeSearchTerm(e)}
                value={this.state.searchTerm}
                type="text"
                placeholder="Search"
              />
            </FormGroup>{" "}
            <Button
              onClick={() => this.setTerm(this.state.searchTerm)}
              type="submit"
            >
              Search
            </Button>
          </Navbar.Form>
          <Navbar.Text>
            Hello user: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <span className="icon-wrapper">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <span className="badge">{this.state.cartItems.length}</span>
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  showContent = () => {
    if (!this.state.books) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Switch>
          <Route
            path="/book/:id"
            component={props => (
              <BookDetails {...props} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/cart"
            component={props => (
              <Cart {...props} cartItems={this.state.cartItems} />
            )}
          />
          <Route
            component={() => <BookList books={this.state.books.books} />}
          />
        </Switch>
      </div>
    );
  };
}

export default App;
