import React, { Component } from "react";
import Book from "./Book";
import { Row, Col } from "react-bootstrap";

class BookList extends Component {
  componentDidMount() {
    if (this.props.books.length === 0) {
      this.props.loadBooks()
    }
  }

  render() {
    const { books, fetching } = this.props;
    return <Row>{
      fetching ?
        'Loading...' :
        books.map(x => this.renderBook(x))
    }</Row>;
  }

  renderBook = book => {
    return (
      <Col key={book.isbn13} xs={12} sm={6} lg={4}>
        <Book book={book} />
      </Col>
    )
  }
}

export default BookList;
