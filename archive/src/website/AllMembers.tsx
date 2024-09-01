import { Fade } from "react-awesome-reveal"; // Import Fade for fade animations
import {
  Accordion,
  Badge,
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";

function AllMembers() {
  return (
    <Container className="App p-3">
      <Fade cascade>
        <Card
         bg="secondary" text="white"
          className="jumbotron"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          <h1>Unite and Unleash your Sound</h1>
          <p>
            Join a vibrant platform designed to amplify your music
            career—whether you're teaching, recording, or jamming live.
          </p>
          <button >
            Discover More
          </button>
        </Card>
      </Fade>

      <Row className="my-4">
        <Col md={4}>
          <Fade direction="left">
            <Card bg="secondary" text="white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?music-teacher"
              />
              <Card.Body>
                <Card.Title>
                  Join Your Mates for a Jam <Badge bg="secondary">Trending</Badge>
                </Card.Title>
                <Card.Text>
                  How much fun is it to jam with your friends? A LOT of fun!
                </Card.Text>
                <button>Start Jamming</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade >
            <Card bg="secondary" text="white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?recording-studio"
              />
              <Card.Body>
                <Card.Title>Record with Top Tech</Card.Title>
                <Card.Text>
                  Access state-of-the-art recording tools to produce
                  high-quality music. Collaborate with bands and artists
                  remotely or in-studio.
                </Card.Text>
                <button >Explore Studios</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade direction="right">
            <Card  bg="secondary" text="white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?jam-session"
              />
              <Card.Body>
                <Card.Title>Jam Sessions</Card.Title>
                <Card.Text>
                  Connect and jam in real-time with musicians across the globe.
                  Create music spontaneously with friends or new artists.
                </Card.Text>
                <button >Join a Jam</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>

      <Accordion defaultActiveKey="0" className="my-4">
        <Card bg="secondary" text="white">
          <Accordion.Header>Build Your Music Career</Accordion.Header>
          <Accordion.Collapse eventKey="0">
            <Fade>
              <Card.Body>
                Whether you're just starting or looking to expand your reach,
                get all the tools and insights you need to succeed in the music
                industry.
              </Card.Body>
            </Fade>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="white">
          <Accordion.Header>Real-Time Collaboration</Accordion.Header>
          <Accordion.Collapse eventKey="1">
            <Fade>
              <Card.Body>
                Discover the thrill of live collaboration without leaving your
                home. Our platform's low-latency technology makes real-time
                music creation a breeze.
              </Card.Body>
            </Fade>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Fade >

      </Fade>
    </Container>
  );
}

export default AllMembers;