import React, { Component } from "react";
import { Panel, Image } from "react-bootstrap";

class Book extends Component {
  state = {};
  render() {
    return (
      <Panel>
        <Panel.Heading>{this.props.book.title}</Panel.Heading>
        <Panel.Body>
          <Image
            className="center-block"
            src={this.props.book.image}
            responsive
          />
          {this.props.book.subtitle}
        </Panel.Body>
      </Panel>
    );
  }
}

export default Book;
