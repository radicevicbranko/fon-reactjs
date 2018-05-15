import React, { Component } from "react";
import Book from "./book";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
class BookList extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {this.props.books.map(x => {
            return (
              <Col xs={12} sm={6} md={4}>
                <Book book={x} />
                <Clearfix visibleLgBlock />
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default BookList;
