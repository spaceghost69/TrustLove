import Fade from "react-awesome-reveal"; // Import Fade for animations
import { Card, Col, Container, Row } from "react-bootstrap";
import LiveStreaming from "../components/LiveStreaming";

function LiveStreams() {
  return (
    <Container
      fluid
      className="App p-3"
      style={{ backgroundColor: "#333", color: "white" }}
    >
      <Fade cascade>
        <Container className="jumbotron text-center">
          <h1>Live Music Streams</h1>
          <p>
            Explore the best live music streams from around the world and
            connect with music as it happens in real time.
          </p>
          <button >
            Explore Streams
          </button>
        </Container>
      </Fade>

      <Fade cascade>
        <LiveStreaming />
      </Fade>
      <Row className="my-4">
        <Col md={4}>
          <Fade >
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?concert"
              />
              <Card.Body>
                <Card.Title>Pop Concerts</Card.Title>
                <Card.Text>
                  Catch the latest live pop concerts streaming directly to your
                  device, featuring top charting artists.
                </Card.Text>
                <LiveStreaming />
                <button>Watch Now</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade >
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?jazz"
              />
              <Card.Body>
                <Card.Title>Jazz Sessions</Card.Title>
                <Card.Text>
                  Enjoy live jazz sessions with artists from around the globe,
                  from smooth jazz to bebop.
                </Card.Text>
                <LiveStreaming />
                <button >Join Session</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade >
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?rock-concert"
              />
              <Card.Body>
                <Card.Title>Rock and Roll</Card.Title>
                <Card.Text>
                  Dive into live rock concerts, experience the energy and the
                  pulsating rhythm of live rock bands.
                </Card.Text>
                <LiveStreaming />
                <button >Rock On</button>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default LiveStreams;
