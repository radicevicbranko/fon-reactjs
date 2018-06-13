import React, { Component } from "react";
import { Panel, Table, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends Component {
  render() {
    if (this.props.cartItems.length > 0) {
      return (
        <Panel>
          <Panel.Heading>Cart</Panel.Heading>
          <Panel.Body>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map((book, index) => {
                  return (
                    <tr key={book.isbn13}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Panel.Body>
          <Panel.Footer>
            <ButtonToolbar>
              <Link to="/">
                <Button>Continue shopping</Button>
              </Link>
              <Button
                className="pull-right"
                onClick={this.placeOrder}
                bsStyle="primary"
              >
                Place Order
              </Button>
            </ButtonToolbar>
          </Panel.Footer>
        </Panel>
      );
    }
    return <div>Your cart is empty.</div>;
  }

  placeOrder = async () => {
    const result = await axios.post("/place-order", this.props.cartItems);
    if (result.status === 200) {
      this.props.clearCart();
    }
  };
}

export default Cart;
