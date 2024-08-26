import { Col, Container } from "react-bootstrap";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      
      

        <div className="justify-content-center mt-5">
          <Col md={12} className="text-center">
            <h4>Follow <img src="src/assets/TRUSTLOVE_LOGO_LARGE.png" width="25%" /></h4>
            <Container className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=61561425107918"
                className="me-3"
              >
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/trust.l0v3" className="me-3">
                <FaInstagram />
              </a>

              <a href="mailto:john@trustlove.io">
                <FaEnvelope />
              </a>
            </Container>
          </Col>
        </div>
      
      <br/><br/>
        <footer>
      ©️ TrustLove&trade; {new Date().getFullYear()}</footer>
    
      
      
    </div>
  );
}
export default Footer;
