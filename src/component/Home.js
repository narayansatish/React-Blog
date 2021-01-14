import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Image     ,Row,Col                        } from 'react-bootstrap';
  function Home()
    { let home=<div>
                      <Row className="mb-5 fixed-bottom d-flex">
                                <Col md={{ span: 1, offset: 11 }}>
                                <Link to='/post/new'>
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="64"
                                                height="64"
                                                fill="red"
                                                className=" bi bi-plus-circle "
                                                viewBox="0 0 16 16"
                                        >
                                        
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        
                                        </svg>
                                        </Link>
                                   
                                </Col>
                        </Row>

                </div>;
            return home;


    }
export default Home;