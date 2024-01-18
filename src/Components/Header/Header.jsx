import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navArray from "../../navArray";
import logo from "../../images/icons/logo.png";
import searchIcon from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navStyle">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#" className="mr-0">
            <img src={logo} alt="apple-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="ml-0" id="basic-navbar-nav">
            <Nav className="me-auto mx-auto navItem mr-3 ">
              {navArray.map((item) => (
                <Nav.Link href="#" className="text-light navLinks" key={item}>
                  {item}
                </Nav.Link>
              ))}
              <Nav.Link href="#" className="text-light mr-3">
                <img src={searchIcon} alt="apple-logosearchIcon" />
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                <img src={cart} alt="apple-cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="apple-introinfo-wrapper">
        <div class="intro-info">
          We look forward to welcoming you to our stores. Whether you shop in a
          store or <a href="##">shop&nbsp;online </a>, our Specialists can help
          you buy the products you love.
        </div>
      </div>
    </div>
  );
}

export default Header;
