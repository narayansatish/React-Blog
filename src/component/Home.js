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
        Card
} from "react-bootstrap";
import BlogCard from "./BlogCard";
function Home() {
        return (
                <div>
                        <Row>
                                <BlogCard />
                        </Row>
                        <Row className="mb-5 fixed-bottom ">
                                <Col
                                        xs={{ span: 1, offset: 10 }}
                                        sm={{ span: 1, offset: 10 }}
                                        md={{ span: 1, offset: 11 }}
                                        lg={{ span: 1, offset: 11 }}
                                >
                                        <Link to="/post/new">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="red"
                                                        className=" bi bi-plus-circle "
                                                        viewBox="0 0 32 32"
                                                        xs={{
                                                                height: 64,
                                                                width: 64,
                                                        }}
                                                        sm={{
                                                                height: 64,
                                                                width: 64,
                                                        }}
                                                        md={{
                                                                height: 64,
                                                                width: 64,
                                                        }}
                                                        lg={{
                                                                height: 40,
                                                                width: 40,
                                                        }}
                                                >
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                        </Link>
                                </Col>
                        </Row>


                </div>
        );
}
export default Home;
