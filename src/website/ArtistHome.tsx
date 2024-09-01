import { Fade } from "react-awesome-reveal";
import {
  Badge,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { FaApple, FaSpotify } from "react-icons/fa";
import CoolButton from "../components/CoolButton";
import Shopify from "../components/Shopify";

const carouselData = [
  {
    description: "TRUSTLOVE the Artist",
    image: require("../assets/John_TL.jpg"),
    longDescription: "John loves to connect with his fans, share his life stories, and try to inspire others to live their best lives while being loving to yourself and those around you."
  },
  {
    description: "INTRO THING 2",
    image: require("../assets/Endurance.mp4"),
    longDescription: "VIDEO blah blah."
  },

];

/**
 *
 *  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted'
 */
function ArtistHome() {
  return (
    <Container className="App">
      <div className="text-center py-5">
        <Fade cascade>
          <Image src={require("../assets/TRUSTLOVE_LOGO_LARGE.png")} width="80%" />

          <br />

          <h4>American EDM Producer and Musician</h4>
        </Fade>
      </div>
      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <FaSpotify className="megaIcon" size={128} /> <h3>Spotify</h3>
        <Row>
          <Col md={4}>
            <Fade direction="left" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="primary">NEW!</Badge>
                <iframe
                  title="frame1"
                  src="https://open.spotify.com/embed/album/4jsKR8bVcxV0nmfQfJ7a2K"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade direction="down" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="info">Chill</Badge>
                <iframe
                  title="frame2"
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
                  title="frame3"
                  src="https://open.spotify.com/embed/album/71Boqm781Tl2V28RiKVBul"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <FaApple className="megaIcon" size={128} />{" "}
        <h3> TrustLove on Apple Music</h3>
        <Row>
          <Col md={6}>
            <Fade direction="left" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="primary">NEW!</Badge>

                <iframe
                  title="frame4"
                  allow="autoplay *; encrypted-media *;"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/never-the-same-single/1760664124"
                ></iframe>
              </Card>
            </Fade>
          </Col>

          <Col md={6}>
            <Fade direction="right" delay={500}>
              <Card bg="secondary" text="white">
                <Badge bg="warning">High Energy</Badge>

                <iframe
                  title="frame5"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/ride-or-die-special-version-single/1754866282"
                ></iframe>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Card>

      <br />
      <br />
      <Card bg="secondary" text="white" className="text-center py-5">
        <Carousel style={{ minHeight: "550px" }} interval={10000}>
          {carouselData.map((carouselItem, key) => (
            <Carousel.Item key={key}>
              <div
                style={{ margin: "5%", padding: 10 }}
                className="d-flex justify-content-center"
              >
                <Table>
                  <Row>
                    <Col md={12}>
                      <Fade
                        style={{ backgroundColor: "transparent" }}
                        direction="down"
                      >
                        <h3>{carouselItem.description}</h3>
                      </Fade>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                    <Image className="image" src={carouselItem.image} />
                    </Col>

                    <Col md={6}>
                      <Card
                        bg="secondary"
                        text="white"
                        className="carouselCard text-center py-5"
                      >
                        <p style={{ backgroundColor: "transparent" }}>
                          {carouselItem.longDescription}
                        </p>
                        <CoolButton
                          variant="light"
                          onClick={() => {
                            alert("COMING SOON!");
                          }}
                        >
                          Learn More
                        </CoolButton>
                      </Card>
                    </Col>
                  </Row>
                </Table>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Fade direction="up">
          <h3>TrustLove: the SoundCloud Archives</h3>
          <p>
            Discover John's music before he was TrustLove. Join the journey!
          </p>
          <a href="https://soundcloud.com/trustl0v3">
            Visit TrustLove on SoundCloud
          </a>
        </Fade>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Fade direction="up">
          <Shopify />
        </Fade>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Fade direction="up">
          <h3>Ready to Elevate Your Music Journey?</h3>

          <p>Join the TrustLove community today!</p>

          <CoolButton
            variant="light"
            onClick={() => {
              alert("yo");
            }}
          >
            Subscribe Now
          </CoolButton>
        </Fade>
      </Card>
    </Container>
  );
}

export default ArtistHome;
