import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { useGetTracksQuery } from "../../redux/services/TrackApi";
import { Track } from "../../thor/model";

/**
 * SpatialAudio Component
 *
 * This component presents a 3D audio environment
 *
 * For testing we grab some nice music from:
 * https://guides.lib.uw.edu/research/openresources/music
 *
 * Copyright 2024 John McMahon
 *
 *
 */

extend({
  SphereGeometry: THREE.SphereGeometry,
  PositionalAudio: THREE.PositionalAudio,
});
let mirrorSphereCamera;

const AudioSpheres = () => {
  const { scene, camera, gl } = useThree();
  const controls:any = useRef();
  const clock = new THREE.Clock();
  const listener = new THREE.AudioListener();
  const analyserRefs:any = useRef([]);
  const oscillatorRef:any = useRef();
  const [materials, setMaterials] = useState({});
  const [initialized, setInitialized] = useState(false); // Flag to track initialization


  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } =  useGetTracksQuery()

  
  if (isLoading) {
    return "Loading..."
  }


  if (typeof (data) === 'undefined' || data.length === 0) {
    return "No tracks :("
  }

  if(error){
    return 'ERROR:' + error;
  }

  if (!data) {
    return "No tracks :("
  }
  
  useEffect(() => {
    if (!initialized) {
      init();
      setInitialized(true);
    } else {
      updateVolumes();
    }
  }, [data]);

  const init = () => {
    camera.add(listener);
    scene.fog = new THREE.FogExp2(0x000000, 0.0025);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(0, 0.5, 1).normalize();
    scene.add(light);

    const sphereGeometry = new THREE.SphereGeometry(10, 32, 16);


// mirror sphere cube-camera
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 1024 );
mirrorSphereCamera = new THREE.CubeCamera( 0.05, 50, cubeRenderTarget );
scene.add( mirrorSphereCamera );
const mirrorSphereMaterial = new THREE.MeshBasicMaterial( { envMap: cubeRenderTarget.texture } );


    data?.map((track, index) => {
      const color = new THREE.Color(`hsl(${index * 60}, 100%, 50%)`);
      const material = new THREE.MeshPhongMaterial({ color });
      addAudioSphere(
        sphereGeometry, 
        material, 
        listener, 
        Math.random() * 300, 
        track, 
        index);
      materials[`material${index}`] = material;
    });

    setMaterials(materials);

    const helper = new THREE.GridHelper(10, 10, 0xff9900, 0x888888);
    helper.position.y = 0.0;
    scene.add(helper);

    const gui = new GUI();
    setupGUI(gui, listener);
    updateVolumes();
    gl.setAnimationLoop(animate);
  };

  const addAudioSphere = (geometry, material, listener, x, audioSrc:Track, index) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      index % 1 === 0 ? x * (Math.random() * 1) : x * (Math.random() * -1),
      index % 2 === 0 ? x * (Math.random() * 2) : x * (Math.random() * -2),
      index % 3 === 0 ? x * (Math.random() * 3) : x * (Math.random() * -3)
    );
    mesh.name = `AudioSphere${index}`;
    scene.add(mesh);

    const sound = new THREE.PositionalAudio(listener);

    if (audioSrc) {
      const mediaElement = new Audio(audioSrc.url);
      mediaElement.crossOrigin = "anonymous"; // Ensure cross-origin issues are handled

      mediaElement.addEventListener(
        "canplaythrough",
        () => {
          sound.setMediaElementSource(mediaElement);
          sound.setRefDistance(10);
          if(audioSrc.muted){
            sound.setVolume(0);
          }else{
            sound.setVolume(audioSrc.inputGainDB/100);
          }
          mediaElement.play();
        },
        { once: true }
      );
    } else {
      const oscillator = listener.context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, sound.context.currentTime); // A4 note
      oscillator.start(0);
      sound.setNodeSource(oscillator);
      sound.setRefDistance(1);
      sound.setVolume(0.015);
      oscillatorRef.current = oscillator;
    }

    mesh.add(sound);

    analyserRefs.current[index] = new THREE.AudioAnalyser(sound, 32);
  };

  const setupGUI = (gui, listener) => {
    const SoundControls = function () {
      this.master = listener.getMasterVolume();
    };

    const GeneratorControls = function () {
      this.frequency = 50;
      this.type = "triangle";
    };

    const soundControls = new SoundControls();
    const generatorControls = new GeneratorControls();

    const volumeFolder = gui.addFolder("sound volume");
    volumeFolder
      .add(soundControls, "master")
      .min(0.0)
      .max(1.0)
      .step(0.01)
      .onChange((value) => listener.setMasterVolume(value));
    volumeFolder.open();

    const generatorFolder = gui.addFolder("sound generator");
    generatorFolder
      .add(generatorControls, "frequency")
      .min(20.0)
      .max(20000.0)
      .step(1.0)
      .onChange((value) => {
        if (oscillatorRef.current) {
          oscillatorRef.current.frequency.setValueAtTime(
            value,
            listener.context.currentTime
          );
        }
      });
    generatorFolder
      .add(generatorControls, "type", ["sine", "square", "sawtooth", "triangle"])
      .onChange((value) => {
        if (oscillatorRef.current) {
          oscillatorRef.current.type = value;
        }
      });
    generatorFolder.open();
  };

  const updateVolumes = () => {
    try{
    data.forEach((track, index) => {
      const sound:any = scene.getObjectByName(`AudioSphere${index}`).children[0];
      if (track.solo) {
        sound.setVolume(track.muted ? 0 : track.inputGainDB / 100);
      } else if (data.some(t => t.solo)) {
        sound.setVolume(0);
      } else {
        sound.setVolume(track.muted ? 0 : track.inputGainDB / 100);
      }
    });
  }catch(e){
    console.warn("Updating Sphere Volumes failed: " + JSON.stringify(e));
  }
  };

  const animate = () => {
    const delta = clock.getDelta();
    controls.current.update(delta);

    data.forEach((track, index) => {
      const analyser = analyserRefs.current[index];
      const material = materials[`material${index}`];

      if (analyser && material) {
        const averageFrequency = analyser.getAverageFrequency();
        material.emissive.b = averageFrequency / 400;
        material.emissive.r = averageFrequency / 400;
        material.emissive.g = averageFrequency / 400;
      }
    });

    gl.render(scene, camera);
  };
  
  return (
    <>
      <OrbitControls
        ref={controls}
        enableDamping={true}
        enableZoom={true}
        enablePan={true}
      />
      <mesh>
        <sphereGeometry />
        <meshPhongMaterial color={0xff9900} />
      </mesh>
    </>
  );
};

const SpatialAudio = () => (
  <Canvas style={{ height: "500px" }}>
    <AudioSpheres />
  </Canvas>
);

export default SpatialAudio;
