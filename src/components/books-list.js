import React, { Component } from "react";
import Book from "./book";
import { Row, Col } from "react-bootstrap";

class BookList extends Component {
  render() {
    return <Row>{this.props.books.map(x => this.renderBook(x))}</Row>;
  }

  renderBook = book => {
    return (
      <Col key={book.isbn13} xs={12} sm={6} lg={4}>
        <Book onViewDetails={this.props.onViewDetails} book={book} />
      </Col>
    );
  };

  //x => <Book book={x} />
  //   function(x) {
  //     return <Book book={x} />;
  //   }
}

export default BookList;
