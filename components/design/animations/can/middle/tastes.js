import gsap from "gsap";
import { useEffect, useRef } from "react";

const {
  useGLTF,
  PerspectiveCamera,
  Environment,
  OrbitControls,
} = require("@react-three/drei");
const { Canvas, useFrame } = require("@react-three/fiber");

const Can = ({ condition }) => {
  const gltfRef = useRef();
  const gltf = useGLTF("/can.glb");
  useFrame(({ clock }) => {
    const degree = clock.getElapsedTime();
    gltfRef.current.position.y = Math.sin(degree) + 2;
  });
  useEffect(() => {
    gsap.to(gltfRef.current.rotation, {
      y: gltfRef.current.rotation.y + Math.PI * 2,
      duration: 0.9,
    });
    gsap.to(gltfRef.current.position, {
      y: 1,
      z: 0.2,
      duration: 0.9,
    });
  }, [condition]);

  return <primitive ref={gltfRef} object={gltf.scene} position={[0, 1, 0.2]} />;
};

const Tastes = ({ condition }) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 25]} />
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <Can condition={condition} />
    </Canvas>
  );
};

export default Tastes;
