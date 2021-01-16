import React, { useState } from "react";
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
function NewBlog() {
        let [title, setTitle] = useState("");
        let [author, setAuthor] = useState("");
        let [category, setCategory] = useState("");
        let [content, setContent] = useState("");
        const publishNow = () => {
                console.log(title);
                console.log(author);
                console.log(category);
                console.log(content);
                let post = {
                        title: title,
                        author: author,
                        category: category,
                        content: content,
                        date: new Date().toLocaleDateString(),
                };
                post = JSON.stringify(post);
                console.log(post);

                setTitle("");
                setAuthor("");
                setCategory("");
                setContent("");
        };
        let element = (
                <>
                        <Row className="mt-5">
                                <Col xs={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 4 }}>
                                        <span >
                                                <Form className="p-4 ">
                                                        <Form.Group controlId="exampleForm.ControlInput1">
                                                                <Form.Label>
                                                                        Title
                                                                </Form.Label>
                                                                <Form.Control
                                                                        type="text"
                                                                        placeholder="Title"
                                                                        value={
                                                                                title
                                                                        }
                                                                        onChange={(
                                                                                e
                                                                        ) => {
                                                                                setTitle(
                                                                                        e
                                                                                                .target
                                                                                                .value
                                                                                );
                                                                        }}
                                                                />
                                                        </Form.Group>
                                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                                <Row>
                                                                        <Col>
                                                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                                                        <Form.Label>
                                                                                                Author
                                                                                        </Form.Label>
                                                                                        <Form.Control
                                                                                                type="text"
                                                                                                placeholder="Post Author"
                                                                                                value={
                                                                                                        author
                                                                                                }
                                                                                                onChange={(
                                                                                                        e
                                                                                                ) => {
                                                                                                        setAuthor(
                                                                                                                e
                                                                                                                        .target
                                                                                                                        .value
                                                                                                        );
                                                                                                }}
                                                                                        />
                                                                                </Form.Group>
                                                                        </Col>
                                                                        <Col>
                                                                                <Form.Label>
                                                                                        Category
                                                                                </Form.Label>
                                                                                <Form.Control
                                                                                        as="select"
                                                                                        value={
                                                                                                category
                                                                                        }
                                                                                        onChange={(
                                                                                                e
                                                                                        ) => {
                                                                                                setCategory(
                                                                                                        e
                                                                                                                .target
                                                                                                                .value
                                                                                                );
                                                                                        }}
                                                                                >
                                                                                        <option>
                                                                                                Redux
                                                                                        </option>
                                                                                        <option>
                                                                                                React
                                                                                        </option>
                                                                                        <option>
                                                                                                Udacity
                                                                                        </option>
                                                                                </Form.Control>
                                                                        </Col>
                                                                </Row>
                                                        </Form.Group>

                                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                                                <Form.Label>
                                                                        Post
                                                                        Content
                                                                </Form.Label>
                                                                <Form.Control
                                                                        as="textarea"
                                                                        rows={3}
                                                                        value={
                                                                                content
                                                                        }
                                                                        onChange={(
                                                                                e
                                                                        ) => {
                                                                                setContent(
                                                                                        e
                                                                                                .target
                                                                                                .value
                                                                                );
                                                                        }}
                                                                />
                                                        </Form.Group>
                                                        <Button
                                                                variant="primary"
                                                                onClick={
                                                                        publishNow
                                                                }
                                                        >
                                                                Publish Now
                                                        </Button>
                                                </Form>
                                        </span>
                                </Col>
                        </Row>
                        <Row className="mb-5 mt-5 fixed-bottom ">
                                <Col xs={{ span: 1, offset: 10 }} sm={{ span: 1, offset: 10 }} md={{ span: 1, offset: 10 }} lg={{ span: 1, offset: 11 }}>
                                        <Link to="/">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
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
                                                        fill="red"
                                                        class="bi bi-house-fill"
                                                        viewBox="0 0 16 16"
                                                >
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                                        />
                                                        <path
                                                                fill-rule="evenodd"
                                                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                                        />
                                                </svg>
                                        </Link>
                                </Col>
                        </Row>
                </>
        );
        return element;
}
export default NewBlog;
