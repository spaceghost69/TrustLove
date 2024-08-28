import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaInfoCircle, FaMailBulk, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar
      collapseOnSelect={true}
      fixed="top"
      expand="sm"
      bg="transparent"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="src/assets/TRUSTLOVE_LOGO_LARGE.png" width="50%" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <a
                className="nav-link"
                href="https://github.com/spaceghost69/TrustLove?tab=readme-ov-file"
              >
                <FaGithub size={32} /> 
              </a>
            </Nav>

            <Nav.Link>
              <Link to="all-members">
              <FaUser size={32} /> 
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="about">
                <FaInfoCircle size={32} /> 
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
            <Link to="contact-us"> 
            <FaMailBulk size={32} /> 
                
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
