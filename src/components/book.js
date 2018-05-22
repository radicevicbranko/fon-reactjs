import React, { Component } from "react";
import { Panel, Image, Button } from "react-bootstrap";

class Book extends Component {
  render() {
    return (
      <Panel className="book">
        <Panel.Heading className="book-header">
          {this.props.book.title}
        </Panel.Heading>
        <Image src={this.props.book.image} />
        <Panel.Body className="book-description">
          {this.props.book.subtitle}
        </Panel.Body>
        <Panel.Footer>
          <Button
            bsStyle="primary"
            onClick={() => this.props.onViewDetails(this.props.book)}
          >
            View details
          </Button>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default Book;
