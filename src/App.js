import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BooksListContainer";
import BookDetails from "./containers/BookDetailsContainer";
import Cart from "./containers/CartContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  FormGroup,
  FormControl,
  Button,
  Nav,
  NavItem
} from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends Component {
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

  showLeftMenu = () => {
    return (
      <Nav
        bsStyle="pills"
        stacked
        activeKey={'react'}
        onSelect={this.selectBooks}
      >
        <NavItem eventKey={"react"} componentClass={Link} to="/" href="/">
          React JS
        </NavItem>
        <NavItem eventKey={"javascript"} componentClass={Link} to="/" href="/">
          Java Script
        </NavItem>
      </Nav>
    )
  };

  showNavbar = () => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My first awesome App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl
                type="text"
                name="searchTerm"
                value={''}
                onChange={e => this.setState({ searchTerm: e.target.value })}
                placeholder="Search"
              />
            </FormGroup>{" "}
            <Link to="/">
              <Button
                type="submit"
                onClick={() => this.setTerm('')}
              >
                Search
              </Button>
            </Link>
          </Navbar.Form>
          <Navbar.Text>
            Hello user: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <Link className="icon-wrapper" to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <span className="badge">{''}</span>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  showContent = () => {
    return (
      <div>
        <Switch>
          <Route
            path="/book/:id"
            component={BookDetails}
          />
          <Route
            path="/cart"
            component={Cart}
          />
          <Route
            component={BookList}
          />
        </Switch>
      </div>
    )
  }
}

export default App
