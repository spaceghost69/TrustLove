import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";
import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useUpdateTrackMutation } from "../../redux/services/TrackApi";
import { Track, TrackStatusEnum } from "../../thor/model/Track";
import CoolButton from "../CoolButton";
import { LevelMeter } from "../LevelMeter";
import "./index.css";

/*

primary'
'secondary'
'success'
'danger'
'warning'
'info'
'light'
'dark'

*/
interface AudioTrackComponentProps {
  track: Track;
}

const AudioTrack: React.FC<AudioTrackComponentProps> = ({ track }) => {
  const [
    updateTrack, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useUpdateTrackMutation({ fixedCacheKey: "shared-update-track" });

  const onSliderChange = (level) => {
    let upd = {
      ...track,
    };
    upd.inputGainDB = level;
    return updateTrack(upd);
  };

  const onMuteToggle = () => {
    let upd = {
      ...track,
    };
    upd.muted = !track.muted;
    return updateTrack(upd);
  };

  const onSoloToggle = () => {
    let upd = {
      ...track,
    };
    upd.solo = !track.solo;
    return updateTrack(upd);
  };

  const onRecordToggle = () => {
    let upd = {
      ...track,
    };

    if (track.status === TrackStatusEnum.Recording) {
      upd.status = TrackStatusEnum.Ready;
    } else {
      upd.status = TrackStatusEnum.Recording;
    }

    return updateTrack(track);
  };

  return (
    <>
      <Container
        className={
          "trackCard " + track.status + " " + (isUpdating ? " connect" : "")
        }
      >
        <Table className="trackTable">
          <Row>
            <Col md={12}>
              <Card>
                <Card.Title
                  style={{
                    minHeight: "50px",
                    maxHeight: "50px",
                    maxWidth: "80px",
                    overflow: "hidden",
                  }}
                >
                  {track.name}
                </Card.Title>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>----------</Col>
          </Row>

          <Row>
            <Col md={12}>
              <CoolButton
                variant={track.muted ? "muted" : "info"}
                onClick={() => onMuteToggle()}
              >
                m
              </CoolButton>

              <CoolButton
                variant={track.solo ? "solo" : "info"}
                onClick={() => onSoloToggle()}
              >
                s
              </CoolButton>
            </Col>
          </Row>
          <Row>
            <Col md={12}>----------</Col>
          </Row>
          <Row>
            <Col>
              <Form.Range
                style={{
                  backgroundColor: "#222",
                  borderColor: "#ddd",
                }}
              />
            </Col>
          </Row>

          <Row style={{ minHeight: "230px", padding: "5px" }}>
            <Col>
              <Slider
                vertical
                dots
                style={{
                  marginRight: "25px",
                  height: "190px",
                }}
                onChange={(e) => onSliderChange(e)}
                min={0}
                max={100}
                value={track.inputGainDB}
                railStyle={{
                  background: "#222",
                  color: "#ff9900",
                }}
                handleStyle={{
                  borderRadius: 5,
                  height: 15,
                  width: 40,
                  marginLeft: -10,
                  opacity: 1,
                  borderWidth: 3,

                  background: "#222",
                  borderColor: "#ddd",
                }}
                trackStyle={{
                  width: "50px",
                  background: "#ff9900",
                  color: "#ff9900",
                }}
              />
            </Col>
            <Col>
              <LevelMeter
                leftLevel={track.inputGainDB}
                rightLevel={track.inputGainDB}
              />
            </Col>
          </Row>

          <Row>
            <Col>Level: {track.inputGainDB}</Col>
          </Row>

          <Row>
            <Col>
              <CoolButton
                onClick={() => onRecordToggle()}
                variant={
                  track.status === TrackStatusEnum.Ready ? "dark" : "danger"
                }
              >
                REC
              </CoolButton>
            </Col>
          </Row>

          <Row>
            <Col md={12}>----------</Col>
          </Row>
        </Table>
      </Container>
    </>
  );
};

export default AudioTrack;
