import React from "react";
import Page from "../layouts/containers/page";
import Form from "../interface/form/form";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Plane } from "@react-three/drei";

const LastSection = () => {
  return (
    <Page>
      <div className="bg-gradient-to-br from-orange-500 to-pink-400 flex justify-around items-center w-full h-full">
        <Form/>
        <div></div>
      </div>
      <div className="absolute bg-yellow-900 top-0 left-0 w-full h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0,0,1]}/>
          <Plane args={[2,1,1]}/>
        </Canvas>
      </div>
    </Page>
  );
};

export default LastSection;
