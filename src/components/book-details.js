import React, { Component } from "react";
import { Button } from "react-bootstrap";

class BookDetails extends Component {
  render() {
    return (
      <div>
        <div>{this.props.id}</div>
        <Button
          onClick={() => this.props.selectBook(null)}
          bsStyle="primary"
        >
          Go Back
        </Button>
      </div>
    );
  }
}

export default BookDetails;
