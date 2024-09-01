import { Fade } from "react-awesome-reveal"; // For smooth fading transitions
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <Container className="App my-5">
      <Fade cascade={true}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h4>
              CONTACT &nbsp; 
              <Image src={require("../assets/TRUSTLOVE_LOGO_LARGE.png")} width="50%" />
            </h4>
            <p>
              Got a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <h2>Please use the social media or email links to contact us directly:</h2>

            <div className="justify-content-center mt-5">
              <Col md={12} className="text-center">
                <Container className="social-links">
                  <a
                    href="https://www.facebook.com/profile.php?id=61561425107918"
                    className="me-3"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/trust.l0v3"
                    className="me-3"
                  >
                    <FaInstagram />
                  </a>

                  <a href="mailto:john@trustlove.io">
                    <FaEnvelope />
                  </a>
                </Container>
              </Col>
            </div>
          </Col>
        </Row>
      </Fade>

      {false && (
        <Fade cascade>
          <Row className="justify-content-center my-4">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <button type="submit">Submit</button>
              </Form>
            </Col>
          </Row>
        </Fade>
      )}
    </Container>
  );
}

export default ContactUs;
