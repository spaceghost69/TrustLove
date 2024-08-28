import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';

extend({ Stats });

const PointCloud = () => {

  const listener = new THREE.AudioListener();
  const analyserRefs:any = useRef([]);
  const sphereGeometry = new THREE.SphereGeometry(10, 32, 16);

  const { scene, camera, gl } = useThree();
  const [pointclouds, setPointclouds] = useState([]);
  const [spheres, setSpheres] = useState([]);
  const spheresIndexRef = useRef(0);
  const toggleRef = useRef(0);
  const pointerRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());
  const clockRef = useRef(new THREE.Clock());
  const rotateY = new THREE.Matrix4().makeRotationY(.0025);
  const rotateX = new THREE.Matrix4().makeRotationX(.0025);


  const generatePointCloudGeometry = (color, width, length) => {
    const geometry = new THREE.BufferGeometry();
    const numPoints = width * length;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    let k = 0;
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < length; j++) {
        const u = i / width;
        const v = j / length;
        const x = u - .5;
        const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 100;
        const z = v - 0.5
        positions[3 * k] = x;
        positions[3 * k + 1] = y;
        positions[3 * k + 2] = z;

        let intensity = (y * 2) * 3;
        colors[2 * k + 1] = color.r * intensity;
        colors[2 * k + 2] = color.g * intensity;
        colors[2 * k + 3] = color.b * intensity;


        intensity = (y * 2) * 4;
        colors[3 * k + 1] = color.r * intensity;
        colors[3 * k + 2] = color.g * intensity;
        colors[3 * k + 3] = color.b * intensity;

        k++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeBoundingBox();

    return geometry;
  };

  const generatePointcloud = (color, width, length) => {
    const geometry = generatePointCloudGeometry(color, width, length);
    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
    });
    return new THREE.Points(geometry, material);
  };

  useEffect(() => {
    const width = 50;
    const length = 50;

    const pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), width, length);
    pcBuffer.scale.set(5, 10, 10);
    pcBuffer.position.set(-5, 0, 0);
    scene.add(pcBuffer);

    const pcIndexed = generatePointcloud(new THREE.Color(0, 1, 0), width, length);
    pcIndexed.scale.set(5, 10, 10);
    pcIndexed.position.set(0, 0, 0);
    scene.add(pcIndexed);

    const pcIndexedOffset = generatePointcloud(new THREE.Color(0, 1, 1), width, length);
    pcIndexedOffset.scale.set(5, 10, 10);
    pcIndexedOffset.position.set(5, 0, 0);
    scene.add(pcIndexedOffset);

    setPointclouds([pcBuffer, pcIndexed, pcIndexedOffset]);

    const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const spheresArray = [];
    for (let i = 0; i < 50; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);
      spheresArray.push(sphere);
    }
    setSpheres(spheresArray);

    raycasterRef.current.params.Points.threshold = 0.1;

    const handlePointerMove = (event) => {
      pointerRef.current.x = -1; // (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -1; // -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleWindowResize = () => {
     // camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleWindowResize);


    

    const addAudioSphere = (url) => {
      
      
      const color = new THREE.Color(`hsl(${2 * 60}, 100%, 50%)`);
      const material = new THREE.MeshPhongMaterial({ color });
      const mesh = new THREE.Mesh(sphereGeometry, material);
      
      mesh.name = `AudioSphere${2}`;
      scene.add(mesh);
  
      const sound = new THREE.PositionalAudio(listener);
  
      if (url) {
        const mediaElement = new Audio(url);
        mediaElement.crossOrigin = "anonymous"; // Ensure cross-origin issues are handled
  
        mediaElement.addEventListener(
          "canplaythrough",
          () => {
            sound.setMediaElementSource(mediaElement);
            sound.setRefDistance(10);
            if(false){
            }else{
              sound.setVolume(10);
            }
            
            // TODO ENABLE THIS
            // mediaElement.play();


          },
          { once: true }
        );
      } 
      mesh.add(sound);
  
      analyserRefs.current[2] = new THREE.AudioAnalyser(sound, 32);
    };


    // beethoven
    addAudioSphere('https://ia601608.us.archive.org/5/items/beethoven-violinkonzert-d-dur-op.-61-klavierfassung-olli-mustonen-klavier-hr-sin/BEETHOVEN%20%20Violinkonzert%20D-Dur%20op.%2061%20%28Klavierfassung%29%20-%20Olli%20Mustonen%20%28Klavier%29%20-%20hr-Sinfonieorchester%2C%20Paavo%20Järvi%20-%20Frankfurt%2C%207.%203.%202011.mp3');

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [scene, camera, gl]);

  useFrame(() => {
    camera.applyMatrix4(rotateY);
    camera.applyMatrix4(rotateX);
    camera.updateMatrixWorld();

    raycasterRef.current.setFromCamera(pointerRef.current, camera);
    const intersections = raycasterRef.current.intersectObjects(pointclouds, false);
    const intersection = intersections.length > 0 ? intersections[0] : null;

    if (toggleRef.current > 0.02 && intersection !== null) {
      spheres[spheresIndexRef.current].position.copy(intersection.point);
      spheres[spheresIndexRef.current].scale.set(1, 1, 1);
      spheresIndexRef.current = (spheresIndexRef.current + 1) % spheres.length;
      toggleRef.current = 0;
    }

    for (const element of spheres) {
      const sphere = element;
      sphere.scale.multiplyScalar(0.92);
      sphere.scale.clampScalar(0.01, 1);
    }

    toggleRef.current += clockRef.current.getDelta();
  });

  return null;
};

const RayCastWaves = () => (
  <Canvas
    
  >
    
    <PointCloud />
  </Canvas>
);

export default RayCastWaves;
