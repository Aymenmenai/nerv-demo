import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";

const { useGLTF } = require("@react-three/drei");

const Model = ({
  position = { x: 0, y: -10, z: 0 },
  rotation = { x: 0, y: 0, z: 0 },
}) => {
  const modelRef = useRef(null);
  const gltf = useGLTF("/can.glb");

  useFrame(() => {
    // POSITION
    gsap.to(modelRef.current.position, {
      x: position.x,
      y: position.y,
      z: position.z,
    });
    // ROTATION
    gsap.to(modelRef.current.rotation, {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
    });
  });
  return (
  <>
  <primitive 
  ref={modelRef} 
  object={gltf.scene} position={[0,-20,0]}/>;
  </>)
};

export default Model;
