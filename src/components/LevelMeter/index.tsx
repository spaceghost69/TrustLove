import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import { Card } from "react-bootstrap";
import "./index.css";

export const LevelMeter = (props) => {
  return (
    <Card 
      style={{
        marginLeft: "-40px", 
        width:"40px",
        padding:"3px",
        height: "200px"
      }}
    >
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Meter position={[-.6, -3, 0]} level={props.leftLevel}/>
        <Meter position={[.6, -3, 0]} level={props.rightLevel}/>
      </Canvas>
    </Card>
  );
};

export const Meter = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref:any = useRef();

  let textRef = useRef();
  if (textRef !== null) {
    /* useFrame(
      (state) =>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    ); */
  }

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

// causes error try again?
   useFrame((state, delta) => (ref.current.rotation.x += delta));
  

// Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 2, ( props.level / 10)]} />

      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
