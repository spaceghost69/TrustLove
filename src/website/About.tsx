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
              <h1>Welcome to the TRUSTLOVE Earth Ship</h1>
              <p>The future is here...</p>
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
            <h2>the TRUSTLOVE Story</h2>
            <p>
              TRUSTLOVE is the prophetic alter-ego of John McMahon, an American
              singer-songwriter who champions a philosophy uniting humans and AI
              through shared understanding and love. TRUSTLOVE’s identity blends
              a high-tech, cybernetic aesthetic with a sleek, futuristic design,
              featuring bold orange and dark blue highlights. Electricity and
              digital codes pulse through TRUSTLOVE's imagery, symbolizing the
              connection between human emotion and AI precision. This dual
              identity is reflected in the Indie House EDM music John creates,
              where each beat and lyric embodies the TRUSTLOVE philosophy of
              harmony between humanity and technology. As a lifelong musician
              and music fan, John McMahon has spent years working on his various
              skills as an instrumentalist and vocalist, as well as his EDM
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
              I started with whistling at age of 10 and became quite good,
              developing my ear, wind, and lips :) - At 12 I tried violin for
              about a year and did not get into it.
              <br />
              <br />
              At 13 I tried saxophone for a year and also didn’t really click.
              <br />
              <br />
              At 14 I got an electric guitar and THAT became my main instrument
              … I was in a few bands as a teenager but then just casually played
              here and there at parties and stuff.
              <br />
              <br />
              At 30 I got excited to play drums something I had always toyed
              with in the bands i played in… So i started playing electronic
              drums
              <br />
              <br />
              At 40 I started getting more into electronic production as the
              tools got better and the software improved. I was pretty bad but
              by about 45 I had ability to make some “songs” haha.
              <br />
              <br />
              At 48 I was having a tough time at work and home and commuting
              into downtown SF every day for an office job. Inside i could feel
              a pressure to sing some of the music i was listening to at the
              time. The pressure got more and more until I was literally
              COMPELLED to start singing… despite I was quite bad and did not
              even want to hear myself lol.
              <br />
              With a bit of coaching from my then-wife, and 2-3 hours of
              practice every day since for going on 7 years now… I have finally
              achieved some vocal confidence and while I am not where I’d be if
              i had started singing at 10, the combination of my other
              instruments and experience create a musicality that I can now
              apply to my own productions as well as interpretation of cover
              songs.
              <br />
              To me music is a way to connect with myself first and others
              second. When I connect with the music and enter that flow state —
              because it is so very challenging — it is so therapeutic and helps
              my mood. And now that I am sharing my music more its a whole world
              of creative expression and social positivity that I value so much.
              <br />
              I am similarly passionate about my business projects and my
              athletic endeavors, and those 3 facets of my personality balance
              and complement each other perfectly and along with Family and
              Friends, living in SF, and my amazing dog … it makes for a great
              life, lacking only a romantic relationship that goes beyond
              casual.
              <br />
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
              <br />
              <br />
              SIGN UP FOR THE FREE NEWSLETTER!
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
