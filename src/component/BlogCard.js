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

const BlogCard = () => {
    return (
        <Row>
            <Col sm={{ span: 6, offset: 3 }}>
                <Accordion>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>
                                        Post
                                        Title
                                                                        </Card.Title>
                                </Col>
                                <Col className="ml-auto">
                                    React,Udacity,Redux
                                                                </Col>
                            </Row>
                            <Card.Text>
                                Satish Narayan
                                With supporting
                                text below as a
                                natural lead-in
                                to additional
                                content.
                                                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Row>
                            <Col sm={{ span: 2 }}>
                                <Accordion.Toggle
                                    as={
                                        Button
                                    }
                                    variant="link"
                                    eventKey="0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="green"
                                        class="bi bi-chat-right-text-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                    </svg>
                                </Accordion.Toggle>
                            </Col>

                            <Col sm={{ offset: 6 }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="black"
                                    class="bi bi-pencil-square"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                </svg>
                            </Col>
                            <Col sm={{ span: 2 }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="red"
                                    class="bi bi-trash"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    />
                                </svg>
                            </Col>
                        </Row>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Comment"
                                        />
                                    </Form.Group>
                                    <Row>
                                        <Col
                                            sm={{

                                            }}
                                        >
                                            <Button
                                                variant="danger"
                                                type="submit"
                                            >
                                                Cancel
                                                                                        </Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Comment
                                                                                        </Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    Previous Comments
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
    );
};
export default BlogCard;
