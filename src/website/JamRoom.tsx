import { Fade } from "react-awesome-reveal"; // Import Fade for animations
import { Card, Container } from "react-bootstrap";

import VideoPlayer from "../components/VideoPlayer";

function JamRoom() {
  return (
    <Container
      fluid
      className="App p-3"
      style={{ backgroundColor: "#333", color: "white" }}
    >

      <Fade cascade>
      
      
      { true && /* how we comment out JSX */
      <VideoPlayer 
            isVideoMute={false} 
            isAudioMute={false} />
      }

             
      </Fade>


      
    </Container>
  );
}

export default JamRoom;
