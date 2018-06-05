import React, { Component } from "react";
import "./App.css";
import BookList from "./components/books-list";
import BookDetails from "./components/book-details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      searchTerm: "",
      currentBookId: null,
      books: null,
      term: "react"
    };
  }

  async componentDidMount() {
    await this.setTerm(this.state.term);
  }

  setTerm = async term => {
    term = term || "react";
    const response = await axios.get("/api/1.0/search/" + term);
    this.setState({
      books: response.data,
      term: term
    });
  };

  render() {
    return (
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
        <NavItem eventKey={"react"}>React JS</NavItem>
        <NavItem eventKey={"javascript"}>Java Script</NavItem>
      </Nav>
    );
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
                type="text"
                name="searchTerm"
                value={this.state.searchTerm}
                onChange={e => this.setState({ searchTerm: e.target.value })}
                placeholder="Search"
              />
            </FormGroup>{" "}
            <Button
              type="submit"
              onClick={() => this.setTerm(this.state.searchTerm)}
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
              <span className="badge">2</span>
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
      <Router>
        <div>
          <Switch>
            <Route
              path="/book/:id"
              component={props => <BookDetails {...props} />}
            />
            <Route
              component={() => <BookList books={this.state.books.books} />}
            />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
