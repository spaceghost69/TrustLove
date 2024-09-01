

import { useState } from "react";
import { Container } from "react-bootstrap";
import { LevelMeter } from "../components/LevelMeter";

interface LevelMeterProps {

}

/**
 * Primary UI component for user interaction
 */
export const LevelMeterComponent = () => {

  const [level, setValue] = useState(0);
  const onLevelMeterChange = (level) => {
    console.log(++level);
    setValue(level);
  };
  return (
    <Container className="App">
    <p>Current value: {level}</p>
    
      <LevelMeter
        vertical
        style={{
          height: "100px"
        }}
        onClick={onLevelMeterChange}
        startPoint={50}
        min={0}
        max={100}
        value={level}
      />
    
  </Container>
  );
};
