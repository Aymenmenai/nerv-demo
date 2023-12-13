import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { OrbitControls } from "three/src/cameras/OrthographicCamera";

const Model = () => {
  const gltf = useGLTF("/can.glb");

  return (
    <primitive
      object={gltf.scene}
      // position={[0, 0, 0]}
      // rotation={[0, 0, Math.PI / 4]}
    />
  );
};

const Can = () => {
  const controls = useRef();

  return (
    <Canvas
      camera={{
        position: [0, 1, 5],
      }}
      onCreated={({ gl, camera }) => {
        controls.current = new OrbitControls(camera, gl.domElement);
        controls.current.enableDamping = true;
        controls.current.dampingFactor = 0.25;
      }}
    >
      <Environment preset="city" />

      {/* Directional Light */}
      {/* <directionalLight intensity={1} position={[5, 20, 10]} /> */}

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Can;
