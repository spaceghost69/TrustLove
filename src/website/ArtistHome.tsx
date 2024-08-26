import { Fade } from "react-awesome-reveal";
import {
  Badge,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import Shopify from "../components/Shopify";

/**
 *
 *  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted'
 */
function ArtistHome() {
  return (
    <Container fluid className="App p-3">
      <div className="text-center py-5">
        <Fade cascade>
          <img src="src/assets/TRUSTLOVE_LOGO_LARGE.png" width="80%" />

          <br />

          <h4>
            Welcome to the home page of TRUSTLOVE
            <br />
            American EDM producer and musician
          </h4>
        </Fade>
      </div>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Carousel style={{ height: "300px" }} interval={3000}>
          <Carousel.Item key={1}>
            <div className="d-flex justify-content-center">
              <Fade direction="left">
                <Row>
                  <Col md={4}>
                    <h2>TrustLove: the Artist</h2>
                  </Col>
                  <Col md={4}>
                    <Image
                      className="image"
                      src="src/assets/images/John_TL.jpeg"
                      fluid
                    />
                  </Col>
                  <Col md={4}>
                    <p>
                      John loves to connect with his fans, share his life
                      stories, and try to inspire others to live their best
                      lives while being loving to yourself and those around you.
                    </p>
                    <button>Learn More</button>
                  </Col>
                </Row>
              </Fade>
            </div>
          </Carousel.Item>

          <Carousel.Item key={2}>
            <div className="d-flex justify-content-center">
              <Fade direction="right">
                <h2>TrustLove: the Community</h2>
                <p>
                  Join a vibrant community of musicians across all genres and
                  cultures. Discover new sounds, find your next bandmate, or
                  simply get inspired by the diversity of our users.
                </p>
                <button>Free Sign Up</button>
              </Fade>
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Row>
          <Col md={4}>
            <Fade direction="left" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="primary">NEW!</Badge>
                <iframe
                  src="https://open.spotify.com/embed/album/4jsKR8bVcxV0nmfQfJ7a2K"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  allow="autoplay *; encrypted-media *;"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/never-the-same-single/1760664124"
                ></iframe>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade direction="down" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="info">Chill</Badge>
                <iframe
                  src="https://open.spotify.com/embed/album/3z824Sw8cRa4aYKJXQVF3r"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade direction="right" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="warning">High Energy</Badge>
                <iframe
                  src="https://open.spotify.com/embed/album/71Boqm781Tl2V28RiKVBul"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/ride-or-die-special-version-single/1754866282"
                ></iframe>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Card>

      <br/><br/>
      <Card bg="secondary" text="white" className="text-center py-5">
      

      <Fade direction="right">
                <h2>TrustLove: the SoundCloud Archives</h2>
                <p>
                  Discover John's music before he was TrustLove. Join the journey!
                </p>
                <a href="https://soundcloud.com/trustl0v3" >Visit TrustLove on SoundCloud</a>
      
              </Fade>
      
      </Card>
      <div className="text-center py-5">
        <Shopify />
      </div>

      <br />
      <br />

      <Container fluid className="cta-final text-center py-5">
        <Fade>
          <h4>Ready to Elevate Your Music Journey?</h4>
          <p>
            Join the TrustLove community today, get updates and exclusive
            content, and help spread love and the trust in the world.
          </p>
          <button>Subscribe Now</button>
        </Fade>
      </Container>
    </Container>
  );
}

export default ArtistHome;
