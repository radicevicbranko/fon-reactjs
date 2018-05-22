import React, { Component } from "react";
import { Panel, Button, Image } from "react-bootstrap";

class Book extends Component {
  render() {
    return (
      <Panel>
        <Panel.Heading>{this.props.book.title}</Panel.Heading>
        <Panel.Body>
          <Image src={this.props.book.image} responsive />
          {this.props.book.subtitle}
        </Panel.Body>
        <Panel.Footer>
          <Button
            onClick={() => this.props.selectBook(this.props.book.isbn13)}
            bsStyle="primary"
          >
            View details
          </Button>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default Book;
