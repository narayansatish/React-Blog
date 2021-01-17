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
                                                <Button className="btn-danger"><i class="lni lni-circle-plus"></i></Button>
                                        </Link>
                                </Col>
                        </Row>


                </div>
        );
}
export default Home;
