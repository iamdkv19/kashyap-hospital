import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import searchIcon from "../../../images/search_icon.png"
import "./Header.scss"
const Header = () => {
  return (
    <div className="header_wrp">
      <Navbar key="md" bg="light" expand="md" className="mb-3 navbar_wrp">
        <Container className="navbar_cantainer">
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md `} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="header_container"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="header_link_container">
              <Nav className="justify-content-center flex-grow-1 pe-3 link_name">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
                <Link className="nav-link" to="/treatment">
                  Treatment
                </Link>
                <Link className="nav-link" to="/about">FAQ's</Link>
                <Link className="nav-link" to="/reviews">
                Reviews
                </Link>
                <Link className="nav-link" to="/about">About Us</Link>
                <Link className="nav-link" to="/about">Contact Us</Link>

               
                 
              </Nav>
              <Form className="search_icon_btn">
                {/* <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                /> */}
                <img src={searchIcon} alt="searchIcon"/>
                <Button> Contact us</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
