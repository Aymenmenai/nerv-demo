import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

const Model = ({ condition }) => {
  const gltf = useGLTF("/can.glb");
  const modelRef = useRef();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (condition) {
      // Set animated to true when the condition becomes true
      setAnimated(true);
    }
  }, [condition]);

  useFrame(({ clock, mouse }) => {
    if (animated) {
      // GSAP animation for smooth transition to the initial position
      gsap.to(modelRef.current.rotation, {
        y: -Math.PI / 1.1,
        z: Math.PI / 3,
        // duration: 1,
        // ease: "power1.inOut",
      });

      gsap.to(modelRef.current.position, {
        x: 10,
        y: 1.2,
        z: -1,
        // duration: 1,
        // ease: "power1.inOut",
        
      
      });
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      rotation={[0, (4.1 * -Math.PI) / 5, 0]}
      position={[0, -8, 4]}
    />
  );
};

const Can = ({ condition}) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 15]} />
      <Environment preset="city" />
      <Model condition={condition} />
    </Canvas>
  );
};

export default Can;
