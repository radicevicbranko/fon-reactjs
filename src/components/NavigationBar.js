import React, { Component } from "react"
import {
    Navbar,
    FormGroup,
    FormControl,
    Button
} from "react-bootstrap"
import { Link } from "react-router-dom"

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">My first awesome App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl
                                type="text"
                                name="searchTerm"
                                onChange={e => this.setState({ searchTerm: e.target.value })}
                                placeholder="Search"
                            />
                        </FormGroup>{" "}
                        <Link to="/">
                            <Button
                                type="submit"
                                disabled={!this.state.searchTerm}
                                onClick={() => this.props.loadBooks(this.state.searchTerm)}
                            >
                                Search
                            </Button>
                        </Link>
                    </Navbar.Form>
                    <Navbar.Text>
                        Hello user: <Navbar.Link href="#">Mark Otto</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullRight>
                        <Link className="icon-wrapper" to="/cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true" />
                            <span className="badge">{this.props.cartItems.length}</span>
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar