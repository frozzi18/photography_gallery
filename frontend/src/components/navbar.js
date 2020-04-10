import React, { Component } from "react";
import logo from "../img/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import posed from "react-pose";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
  },
  press: {
    scale: 1.1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
});

export class navbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Box>
          <Navbar.Brand href="#home" className="ml-5 mr-5">
            <img
              alt=""
              src={logo}
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Frozzi
          </Navbar.Brand>
        </Box>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Box>
              <Nav.Link href="#features" className="mr-5">
                About Us
              </Nav.Link>
            </Box>
            <Box>
              <Nav.Link href="#features">Features</Nav.Link>
            </Box>
          </Nav>
          <Nav>
            <Box>
              <Nav.Link href="#features" className="mr-5">
                Contact Us
              </Nav.Link>
            </Box>
            <Box>
              <Nav.Link href="#features" className="mr-5">
                Add Photo
              </Nav.Link>
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default navbar;
