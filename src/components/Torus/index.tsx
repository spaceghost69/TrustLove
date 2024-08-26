import loadFont from "load-bmfont";
import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import * as THREE from "three";
import createGeometry from "three-bmfont-text";
import MSDFShader from "three-bmfont-text/shaders/msdf";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Import your assets and shaders
import fontAtlas from "./assets/NextSphereExtraBold-KVBXy.png";
import fontFile from "./assets/Orbitron-Black.fnt";

import { shaders } from "./shaders.ts";

const TorusComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Three.js
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
    containerRef.current?.appendChild(renderer.domElement);
    rendererRef.current = renderer;
  
    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 180);
    cameraRef.current = camera;
  
    const scene = new THREE.Scene();
    sceneRef.current = scene;
  
    // Correct instantiation of OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
  
    const clock = new THREE.Clock();
    clockRef.current = clock;
  

    // Load font and create text geometry
    loadFont(fontFile, (err, font) => {
      const fontGeometry = createGeometry({
        font,
        text: "TrustLove",
      });

      const loader = new THREE.TextureLoader();
      loader.load(fontAtlas, (texture) => {
        const fontMaterial = new THREE.RawShaderMaterial(
          MSDFShader({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            negate: false,
            color: 0xff9900,
          })
        );

        const rtScene = new THREE.Scene();
        const rtCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        rtCamera.position.z = 2.5;

        const rt = new THREE.WebGLRenderTarget(
          window.innerWidth / 2,
          window.innerHeight / 2
        );

        const textMesh = new THREE.Mesh(fontGeometry, fontMaterial);
        textMesh.position.set(-0.965, -0.525, 0);
        textMesh.rotation.set(Math.PI, 0, 0);
        textMesh.scale.set(0.006, 0.04, 1);
        rtScene.add(textMesh);

        const torusGeometry = new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3);
        const torusMaterial = new THREE.ShaderMaterial({
          vertexShader: shaders.vert,
          fragmentShader: shaders.frag,
          uniforms: {
            uTime: { value: 0 },
            uTexture: { value: rt.texture },
          },
        });

        const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
        scene.add(torusMesh);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);

          controls.update();

          torusMaterial.uniforms.uTime.value = clock.getElapsedTime();

          // Render to the render target
          renderer.setRenderTarget(rt);
          renderer.render(rtScene, rtCamera);
          renderer.setRenderTarget(null);

          // Render the main scene
          renderer.render(scene, camera);
        };

        animate();
      });
    });

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth - 100;
      const height = window.innerHeight - 100;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <Container fluid>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </Container>
  );
};

export default TorusComponent;
