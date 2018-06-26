import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class LeftMenu extends Component {
  render() {
    return (
      <Nav
        bsStyle="pills"
        stacked
        activeKey={this.props.searchTerm}
        onSelect={this.props.loadBooks}
      >
        <NavItem eventKey={"react"} componentClass={Link} to="/" href="/">
          React JS
        </NavItem>
        <NavItem eventKey={"javascript"} componentClass={Link} to="/" href="/">
          Java Script
        </NavItem>
      </Nav>
    );
  }
}

export default LeftMenu;
