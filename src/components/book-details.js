import React, { Component } from "react";
import {
  Panel,
  Table,
  Image,
  Button,
  Row,
  Col,
  ButtonToolbar
} from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
class BookDetails extends Component {

  componentDidMount() {
    this.props.getBookDetails(this.props.match.params.id)
  }

  render() {
    const { currentBook, fetching } = this.props
    if (!fetching) {
      return (
        <Panel>
          <Panel.Heading>{currentBook.title}</Panel.Heading>
          <Panel.Body>
            <Row>
              <Col xs={12} md={5}>
                <Image src={currentBook.image} />
              </Col>
              <Col xs={12} md={7}>
                <Table striped bordered condensed hover>
                  <tbody>
                    <tr>
                      <td>Price</td>
                      <td>{currentBook.price}</td>
                    </tr>
                    <tr>
                      <td>Authors</td>
                      <td>{currentBook.authors}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>
                        <Rating
                          readonly
                          emptySymbol="fa fa-star-o fa-2x"
                          fullSymbol="fa fa-star fa-2x"
                          initialRating={parseInt(currentBook.rating, 10)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{currentBook.desc}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Panel.Body>
          <Panel.Footer>
            <ButtonToolbar>
              <Link to="/">
                <Button>Go Back</Button>
              </Link>
              <Link to="/cart">
                <Button
                  bsStyle="primary"
                  className="pull-right"
                  onClick={() => {
                    this.props.addToCart(currentBook)
                  }}
                >
                  Add to Cart
                </Button>
              </Link>
            </ButtonToolbar>
          </Panel.Footer>
        </Panel>
      )
    }
    return <div>Loading...</div>
  }
}

export default BookDetails
