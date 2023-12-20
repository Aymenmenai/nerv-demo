import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import Model from "../can/model";

export const MainCanvas = ({ currPosition, currRotation, state, style }) => {
  return (
    <div
      className={`${state ? "hidden" : "absolute"} ${
        style[1]
      }  w-full h-full bg-red-500/0`}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 25]} />
        <Environment preset="city" />
        {/* {mouse === 1 ? <OrbitControls enableZoom={false} /> : <></>} */}
        <Model position={currPosition} rotation={currRotation} />
      </Canvas>
    </div>
  );
};
