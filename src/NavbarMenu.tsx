import { Container, Nav, Navbar } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar
      collapseOnSelect={true}
      fixed="top"
      expand="lg"
      bg="transparent"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="src/assets/TRUSTLOVE_LOGO_LARGE.png" width="30%" />
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
                GitHub
              </a>
            </Nav>

            <Nav.Link>
              <Link to="all-members">members</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="about">
                <FaInfoCircle />
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="contact-us">
                <FaInfoCircle />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
