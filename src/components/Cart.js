import React, { Component } from "react";
import { Panel, Table, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    if (cartItems.length > 0) {
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
                {cartItems.map((book, index) => {
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
                onClick={this.props.placeOrder}
                bsStyle="primary"
              >
                Place Order
              </Button>
            </ButtonToolbar>
          </Panel.Footer>
        </Panel>
      )
    }
    return <div>Your cart is empty.</div>
  }
}

export default Cart
