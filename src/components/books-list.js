import React, { Component } from "react";
import Book from "./book";
import BookDetails from "./book-details";
import { Grid, Row, Col } from "react-bootstrap";
class BookList extends Component {
  constructor() {
    super();
    this.state = {
      selectedBookId: null
    };
  }
  render() {
    return this.renderContent();
  }

  renderContent = () => {
    if (this.state.selectedBookId) {
      return (
        <BookDetails
          selectBook={this.selectBook}
          id={this.state.selectedBookId}
        />
      );
    }

    return (
      <Grid>
        <Row className="show-grid">
          {this.props.books.map(x => (
            <Col xs={12} md={6} lg={4}>
              <Book selectBook={this.selectBook} book={x} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  };

  selectBook = id => {
    this.setState({
      selectedBookId: id
    });
  };

  //x => <Book book={x} />
  //   function(x) {
  //     return <Book book={x} />;
  //   }
}

export default BookList;
