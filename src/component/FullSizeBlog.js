import React from "react";
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
    Card,
    Accordion,
} from "react-bootstrap";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import { BlogData } from "./BlogData";
const FullSizeBlog = ({ match }) => {
    let id = match.params.id;
    console.log(id);
    let value = BlogData[id];

    return (
        <div className="container mt-5">
            <Row className="px-2 ">
                <Link to="/">
                    {" "}
                    <Button className="Btn  Btn-danger">
                        Go To All Blog
                                        </Button>
                </Link>
            </Row>
            <Row
                className=" text-justify"
                style={{ fontWeight: "bold" }}
                className="mt-3"
            >
                {value.title}
            </Row>
            <Row className="mt-3 ">
                <article
                    className="float-left lead text-justify"
                    style={{ fontFamily: "lead" }}
                >
                    {value.content}In aliquip deserunt elit
                                        aute quis irure do nisi qui consectetur
                                        eu voluptate deserunt enim. Ipsum fugiat
                                        sunt esse non nisi ad laborum nostrud
                                        aute commodo veniam esse ut. Enim
                                        consectetur ex esse commodo tempor qui
                                        occaecat.Dolore voluptate cillum aliquip
                                        velit est ullamco voluptate mollit
                                        aliqua sit et ad nisi. Veniam nisi id
                                        laboris incididunt veniam in qui cillum
                                        eiusmod sint enim quis non. Occaecat
                                        labore commodo duis laborum tempor in eu
                                        nulla id incididunt proident. Lorem
                                        voluptate consequat pariatur aliqua
                                        eiusmod fugiat exercitation nulla sunt.
                                        Sint ullamco incididunt irure quis
                                        nulla. Aliquip cillum Lorem deserunt
                                        cillum laboris dolore ipsum irure quis.
                                        Aliquip sit culpa aute nisi
                                        sit.Voluptate excepteur esse occaecat
                                        aute. Nisi eiusmod ullamco est minim
                                        consectetur consectetur do sint. Veniam
                                        cillum ullamco culpa dolore. Fugiat do
                                        duis aute sint Lorem occaecat in.
                                        Incididunt ullamco consequat ullamco
                                        laboris proident eu exercitation elit.
                                        Tempor magna sint eu nostrud minim
                                        eiusmod laboris aliquip pariatur eiusmod
                                        ipsum minim reprehenderit.
                                </article>
            </Row>
            <Row
                className="mt-5 border border-primary  container"
                sm="span:12"
            >
                <Col>
                    <Form style={{ display: "block" }}>
                        <Form.Group>
                            <Row className="px-5 pt-2 pb-1 font-weight-bold  ">
                                <Col xs={{
                                    span: 12,
                                }}
                                    className="d-flex justify-content-start">
                                    Leave a Comment
                                    </Col>
                            </Row>
                            <Row>
                                <Col
                                    xs={{
                                        span: 12,
                                    }}
                                >
                                    <Form.Control
                                        className="float-left pb-5 "
                                        as="textarea"
                                        rows={
                                            2
                                        }
                                    />
                                </Col>
                            </Row>
                            <Col
                                xs={{
                                    span: 12,
                                }}

                            >
                                <button
                                    type="button"
                                    className="btn btn-success mt-3 d-flex justify-content-start"
                                >
                                    {" "}
                                                                                Submit
                                                                        </button>
                            </Col>

                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};
export default FullSizeBlog;
