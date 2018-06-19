import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BooksListContainer";
import BookDetails from "./containers/BookDetailsContainer";
import Cart from "./containers/CartContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Grid, Row, Col } from "react-bootstrap"
import NavigationBar from "./containers/NavigationBarContainer"
import LeftMenu from "./containers/LeftMenuContainer"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Grid>
            <Row>
              <Col xs={12} md={2}>
                <LeftMenu />
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
