
import Slider from "rc-slider";
import { useState } from "react";
// import "./slider.css";
import "rc-slider/assets/index.css";
import { Container } from "react-bootstrap";
interface SliderProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the slider be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Slider contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SliderComponent = (marks) => {

  const [level, setValue] = useState(0);
  const onSliderChange = (level) => {
    console.log(level);
    setValue(level);
  };
  return (
    <Container className="App">
    <p>Current value: {level}</p>
    <Container className="slider">
      <Slider
        vertical
        style={{
          height: "100px"
        }}
        onChange={onSliderChange}
        startPoint={50}
        min={0}
        max={100}
        value={level}
        railStyle={{
          height: 100
        }}
        handleStyle={{
          height: 18,
          width: 18,
          marginLeft: -7,
          backgroundColor: "#f23b2f",
          border: 0
        }}
        trackStyle={{
          background: "#f23b2f"
        }}
      />
    </Container>
  </Container>
  );
};
