import Peer from "peerjs";
import { useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  Table,
  Toast,
} from "react-bootstrap";

import { FaAudible, FaViadeo } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import AudioMixer from "../AudioMixer";
import SpatialAudio from "../SpatialAudio";
import RayCastWaves from "../Visualizations/RayCastWaves";
import { } from "./index.css";
// fixes: src/components/VideoPlayer/index.tsx:103:16 - error TS2339: Property 'localStream' does not exist on type 'Window & typeof globalThis'.
declare global {
  interface Window {
    localStream: any;
  }
}

let connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: 10,
  timeout: 10000,
  transports: ["websocket"],
};

const VideoWindow = ({ srcOb }) => {
  return (
    <Container id="video-grid" className="video-container">
      {/* <Video srcObject={srcObject}/> */}
    </Container>
  );
};

const VideoPlayer = ({ isVideoMute, isAudioMute }) => {
  let myPeer = new Peer({
    config: {
      iceServers: [
        { urls: "stun:35.91.176.184" },
        {
          urls: "turn:35.91.176.184",
          credential: "badpassword",
          username: "web@jamroom.io",
        },
      ],
    } /* Sample servers, please use appropriate ones */,
  });

  const [videoMuted, setVideoMuted] = useState(true);
  const [audioMuted, setAudioMuted] = useState(true);
  const peers = {};
  const [socket, setSocket] = useState(null);
  const { id: videoId } = useParams();
  const videoGrid = document.getElementById("video-grid");

  useEffect(() => {
    const s = io("https://jamroom.online/video-connect", connectionOptions);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  //  myVideoStream;
  const [myVideoStream, setMyVideoStream] = useState(null);
  const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = true;
      //setUnmutebutton();
    } else {
      //setMutebutton();
      myVideoStream.getAudioTracks()[0].enabled = false;
    }
  };

  const playStop = () => {
    //console.log('object')
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
      setVideoMuted(false);
      //setPlayVideo()
    } else {
      //setStopVideo()
      myVideoStream.getVideoTracks()[0].enabled = true;
      setVideoMuted(true);
    }
  };

  useEffect(() => {
    if (myVideoStream) playStop();
  }, [isVideoMute]);
  useEffect(() => {
    if (myVideoStream) muteUnmute();
  }, [isAudioMute]);

  useEffect(() => {
    if (socket == null) return;
    myPeer.on("open", (id) => {
      socket.emit("join-room", videoId, id);
    });
    const myVideo = document.createElement("video");
    myVideo.muted = true;
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        // myVideoStream = stream;
        window.localStream = stream;
        setMyVideoStream(stream);
        console.log(myVideoStream, "myvideostream");
        addVideoStream(myVideo, stream);
        myPeer.on("call", (call) => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            addVideoStream(video, userVideoStream);
          });
        });

        socket.on("user-connected", (userId) => {
          connectToNewUser(userId, stream);
        });

        socket.on("user-disconnected", (userId) => {
          if (peers[userId]) peers[userId].close();
        });
      });
  }, [socket, videoId]);

  function addVideoStream(video, stream) {
    video.srcObject = stream;

    video.addEventListener("loadedmetadata", () => {
      video.play();
    });

    videoGrid.append(video);
  }

  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement("video");

    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
      video.remove();
    });

    peers[userId] = call;
  }

  const [showToast, setShowToast] = useState(true);

  return (
    <>
      <Container className="jumbotron text-center">
        <h2>You are in JamRoom : {"" + Math.round(Math.random() * 1000)}</h2>
      </Container>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Host Video</Accordion.Header>
          <Accordion.Body>
            <ButtonGroup>
              {!videoMuted && (
                <button onClick={() => playStop()}>
                  un-mute <FaViadeo />
                </button>
              )}

              {videoMuted && (
                <button onClick={() => playStop()}>
                  mute <FaViadeo />
                </button>
              )}

              {!audioMuted && (
                <button onClick={() => muteUnmute()}>
                  un-mute <FaAudible />
                </button>
              )}

              {audioMuted && (
                <button onClick={() => muteUnmute()}>
                  mute <FaAudible />
                </button>
              )}

              <button>pause</button>
              <button>share</button>
            </ButtonGroup>
            <Table>
              <Row>
                <Col>
                  <Card id="video-grid">
                    {/* <Video id="video" srcObject={srcObject}/> */}
                  </Card>
                </Col>
                <Col>
                  <Table>
                    <Row>
                      <Col>
                        <Card className="bg-dark">
                          <Card.Body>
                            <Card.Header>
                              <Badge bg="warning">STAFF</Badge> Jim James
                            </Card.Header>

                            {/* <Video id="staff" srcObject={srcObject}/> */}

                            <Card.Title></Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Card className="bg-dark">
                          <Card.Body>
                            <Card.Header>
                              <Badge bg="info">BOSS</Badge> Carla Tan
                            </Card.Header>

                            {/* <Video id="boss" srcObject={srcObject}/> */}

                            <Card.Title>
                              <ButtonGroup>
                                <button>mute audio</button>
                                <button>mute video</button>
                              </ButtonGroup>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Table>
                </Col>
              </Row>
            </Table>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Spatial Audio</Accordion.Header>
          <Accordion.Body>
            <SpatialAudio />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Session Audio Mixer</Accordion.Header>
          <Accordion.Body>
            <Card id="audio-mixer">
              <AudioMixer />
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Visualizations</Accordion.Header>
          <Accordion.Body>
            <RayCastWaves />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Toast
        bg={"warning"}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={10000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>{}</small>
        </Toast.Header>
        <Toast.Body>
          You are now the HOST of JamRoom:{" "}
          {"" + Math.round(Math.random() * 1000)}{" "}
        </Toast.Body>
      </Toast>
    </>
  );
};

export default VideoPlayer;
