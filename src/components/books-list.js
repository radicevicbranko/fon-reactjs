import React, { Component } from "react";
import Book from "./book";
import { Grid, Row, Col } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Grid>
        <Row>{this.props.books.map(x => this.renderBook(x))}</Row>
      </Grid>
    );
  }

  renderBook = book => {
    return (
      <Col key={book.isbn13} xs={12} sm={6} md={4}>
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
