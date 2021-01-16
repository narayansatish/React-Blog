import React from "react";
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams,
} from "react-router-dom";
import {
        Navbar,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button,
        Image,
        Row,
        Col,
} from "react-bootstrap";
import Home from "./Home";

function NavBar() {
        let nav = (
                <div>
                        <Row className="nav-wrapper red ">
                                <Col >
                                        <Navbar
                                                bg="danger"
                                                variant="light"
                                                expand="lg"
                                                sticky="top"
                                        >
                                                <Navbar.Brand>
                                                        <Link
                                                                to="/"
                                                                className=" text-light"

                                                        >
                                                                React-Blog
                                                        </Link>
                                                </Navbar.Brand>

                                                <Nav className="ml-auto text-light">
                                                        <Nav.Item className="px-2">
                                                                <Link
                                                                        to="/MyCart"
                                                                        className="text-light lg"
                                                                >
                                                                        React
                                                                </Link>
                                                        </Nav.Item>
                                                        <Nav.Item className="px-2 text-light">
                                                                <Link
                                                                        to="/Add_Item"
                                                                        className="text-light"
                                                                >
                                                                        Redux
                                                                </Link>
                                                        </Nav.Item>
                                                        <Nav.Item className="px-2 text-light">
                                                                <Link
                                                                        to="/Item_List"
                                                                        className="text-light"
                                                                >
                                                                        Udacity
                                                                </Link>
                                                        </Nav.Item>
                                                </Nav>
                                        </Navbar>
                                </Col>
                        </Row>


                </div>
        );
        return nav;
}
export default NavBar;
