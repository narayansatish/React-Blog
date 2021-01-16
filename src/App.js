import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Row, Col, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';
import Home from './component/Home';
import NewBlog from './component/NewBlog';
import FullSizeBlog from './component/FullSizeBlog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/post/new" component={NewBlog} exact />
          <Route path="/post/:id" component={FullSizeBlog} exact />
        </Switch>
      </>
    </div>
  );
}

export default App;
