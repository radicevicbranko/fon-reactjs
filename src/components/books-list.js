import React, { Component } from "react";
import Book from "./book";

class BookList extends Component {
  render() {
    return <div>{this.props.books.map(x => <Book book={x} />)}</div>;
  }

  //x => <Book book={x} />
//   function(x) {
//     return <Book book={x} />;
//   }
}

export default BookList;
