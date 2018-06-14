import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

class Cart extends Component {
  state = {};

  placeOrder = async () => {
    const response = await axios.post("/place-order", this.props.cartItems);
    if (response.status === 200) {
    }
  };
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Descripiton</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartItems.map((book, index) => (
              <tr key={book.isbn13}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.subtitle}</td>
                <td>{book.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={() => this.placeOrder()}>Place order</Button>
      </div>
    );
  }
}

export default Cart;
