import { Fade } from "react-awesome-reveal";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
let img1 = require("./images/AppDesign.jpg");
let img2 = require("./images/Techguitar.jpg");

function About() {
  return (
    <Container fluid className="App p-3">
      <Card bg="secondary" text="white" className="text-center py-5">
        <Row className="align-items-center text-center">
          <Col>
            <Fade direction="down">
              <h1>TRUSTLOVE Earth Ship</h1>
              <p>An online home for the music, art, science and philosophy of TRUSTLOVE</p>
            </Fade>
          </Col>
        </Row>
      </Card>
      <Row id="story" className="my-5">
        <Col md={6} className="text-center">
          <Fade direction="left">
            <Image src={img1} alt="Innovative Design" fluid />
          </Fade>
        </Col>
        <Col md={6}>
          <Fade direction="right">
            <h2>The TRUSTLOVE Story</h2>
            <p>
              TRUSTLOVE is the artistic alter-ego of John McMahon, an American
              musician and technology entrepreneur who is exploring a philosophy uniting humans and AI
              through our journey of shared understanding.
                
                <br/><br/>
              
              TRUSTLOVE’s identity blends
              a high-tech, cybernetic aesthetic with a sleek, futuristic design,
              featuring bold orange and dark blue highlights. Electricity and
              digital codes pulse through TRUSTLOVE's imagery, symbolizing the
              connection between human emotion and AI precision.
              
              <br/><br/>
              
              As a lifelong musician and music fan, John McMahon spent decades working on his various
              crafts as an instrumentalist and vocalist, as well as his EDM
              production as TRUSTLOVE.
            </p>
          </Fade>
        </Col>
      </Row>

      <Row className="align-items-center my-5">
        <Col md={6}>
          <Fade direction="left">
            <h2>John's Music Journey</h2>
            <p>
              I started with whistling at age of 10 and over my lifetime have developed other musical skills and learned a variety of
               instruments culiminating in vocals and EDM production.
              <br />
              <br />
              To me music is a way to connect with myself first and others
              second. When I connect with the music and enter that flow state —
              because it is so very challenging — it is so therapeutic and helps
              my mood. And now that I am sharing my music more its a whole world
              of creative expression and social positivity that I value so much.
              <br />
              <br />
              I am similarly passionate about my business projects and my
              athletic endeavors, and those 3 facets of my personality balance
              and complement each other perfectly and along with Family and
              Friends, living in SF, and my amazing dog … it makes for a great
              life, lacking only a romantic relationship that goes beyond
              casual.
              
            </p>
          </Fade>
        </Col>
        <Col md={6} className="text-center">
          <Fade direction="right">
            <Image src={img2} alt="Core Technology" fluid />
          </Fade>
        </Col>
      </Row>

      <Row className="my-5">
        <Col className="text-center">
          <Fade direction="down">
            <h2>The Future of Music Collaboration</h2>
            <p>
              I'm dedicated to using technology and the power of humanity to
              create change. Always pushing the boundaries of what is possible,
              my project JamRoom is set to redefine the music industry by
              enabling artists to not only collaborate but also connect and
              share their music with the ever-growing global audience.
              
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
