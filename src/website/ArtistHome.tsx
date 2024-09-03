import React from "react";
import { Fade } from "react-awesome-reveal";
import { Badge, Card, Carousel, Col, Image, Row } from "react-bootstrap";
import { FaApple, FaSoundcloud, FaSpotify } from "react-icons/fa";
import CoolButton from "../components/CoolButton";
import Shopify from "../components/Shopify";

const carouselData = [
  {
    title: "TRUSTLOVE Calendar",
    description: "Upcoming Events",
    image: require("../assets/images/sage_open_eyes.webp"),
    longDescription:
      "Check in on the latest events globally online and IRL! TRUSTLOVE is an American music/tech/creative artist based in San Francisco, California. TRUSTLOVE (John McMahon) loves to connect with the community and fans, share stories, and inspire others to share what they love with the world.",
  },
  {
    title: "Introducing TRUSTLOVE",
    description: "Meet John",
    image: require("../assets/images/trust_love_guitar_bw.png"),
    
    longDescription:
      "TRUSTLOVE is an American music/tech/creative artist based in San Francisco, California. TRUSTLOVE (John McMahon) loves to connect with the community and fans, share stories, and inspire others to share what they love with the world.",
  },
  {
    title: "TRUSTLOVE Connect",
    description: "Connect, Inspire, Elevate.",
    image: require("../assets/images/Techguitar.jpg"),
    longDescription:
      "Dive into the world of TRUSTLOVE -- an American EDM artist fusing high-energy beats. TRUSTLOVE presents us with a modern philosophy of hope that bridges humanity and AI. Explore captivating sounds on Spotify, Apple Music, and SoundCloud. Every track pulses with the essence of TRUSTLOVE, inviting you to join a community that believes in unity, love, and the power of music.",
  },
  {
    title: "TRUSTLOVE LORE™: The Saga Begins",
    description: "Get the pre-print edition of the upcoming Sci-Fi based on TRUSTLOVE IRL",
    image: require("../assets/images/sage_smooth_era.webp"),
    longDescription:
      "Dive into the world of TRUSTLOVE LORE™ -- the codebase to the future of Sci-Fi encompassing an IRL AI named TrustLove SAGE™ and the 'gatekeeper' AI TrustLove ORION",
  },
];

/**
 *
 *  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted'
 */
function ArtistHome() {
  return (
    <div className="App">
      <div className="text-center py-5">
        <Fade cascade>
          <Image
            className="titleImage"
            src={require("../assets/TRUSTLOVE_LOGO_LARGE.png")}
          />

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
        <h3> Apple Music</h3>
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
        <Fade direction="up">

        <FaSoundcloud className="megaIcon" size={128} />{" "}
        
          <h3>The SoundCloud Archives</h3>
          <p>
            Discover TRUSTLOVE over the years as he developed his EDM sound. Join the journey!
          </p>
          <a href="https://soundcloud.com/trustl0v3">
            TRUSTLOVE on SoundCloud
          </a>
        </Fade>
      </Card>

      <br />
      <br />

      <Card bg="secondary" text="white" className="text-center py-5">
        <Carousel className="carousel" interval={10000}>
          {carouselData.map((carouselItem, key) => (
            <Carousel.Item key={key}>
              <div
                className="d-flex justify-content-center carouselCard"
              >
                <div>

                      <Card
                        bg="secondary"
                        text="white"
                        className="text-center py-5 carouselCard"
                      >
                        
                        
                        <Card.Header>
                        <Image className="coolImage" src={carouselItem.image} />
                          
                        </Card.Header>
                        <p
                          className="coolText"
                        >
                          <h4>{carouselItem.title}</h4>
                          <h5>{carouselItem.description}</h5>
                          
                          {carouselItem.longDescription}
                        </p>
                       
                       
                      </Card>
                    
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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

          <p>Join the TRUSTLOVE community today!</p>

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
    </div>
  );
}

export default ArtistHome;
