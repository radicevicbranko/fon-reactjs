import React, { Component } from "react";
import { Panel, Table, Image, Button, Grid, Row, Col } from "react-bootstrap";
import axios from "axios";
import Rating from "react-rating";
import { Link } from "react-router-dom";
class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "/api/1.0/books/" + this.props.match.params.id
    );
    this.setState({
      book: response.data
    });
  }

  render() {
    if (this.state.book) {
      return (
        <Panel>
          <Panel.Heading>{this.state.book.title}</Panel.Heading>
          <Panel.Body>
            <Grid>
              <Row>
                <Col xs={12} sm={4}>
                  <Image src={this.state.book.image} />
                </Col>
                <Col xs={12} sm={6}>
                  <Table striped bordered condensed hover>
                    <tbody>
                      <tr>
                        <td>Price</td>
                        <td>{this.state.book.price}</td>
                      </tr>
                      <tr>
                        <td>Authors</td>
                        <td>{this.state.book.authors}</td>
                      </tr>
                      <tr>
                        <td>Rating</td>
                        <td>
                          <Rating
                            readonly
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            initialRating={parseInt(this.state.book.rating, 10)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{this.state.book.desc}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
          <Panel.Footer>
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
          </Panel.Footer>
        </Panel>
      );
    }
    return <div>Loading...</div>;
  }
}

export default BookDetails;
