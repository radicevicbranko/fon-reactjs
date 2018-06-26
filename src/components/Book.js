import React, { Component } from "react";
import { Panel, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link to={"/book/" + this.props.book.isbn13}>
            <Button bsStyle="primary">View details</Button>
          </Link>
        </Panel.Footer>
      </Panel>
    );
  }
}

export default Book;
