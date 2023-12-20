"user client";
import { Inter } from "next/font/google";
import HeadSection from "@/components/content/head-section";
import MiddleSection from "@/components/content/middle-section";
import LastSection from "@/components/content/last-section";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "@/components/design/animations/can/model";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Slider from "@/components/interface/sliders/slider";
import { MainCanvas } from "@/components/design/animations/canvas/canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const scrollContainerRef = useRef(null);

  // const
  const style = ["-z-10  top-0", " z-10 ", " z-10"];
  const position = [
    // INITIAL
    { x: 0, y: -20, z: 5 },
    { x: 0, y: 24, z: -5 },
    { x: -40, y: 0, z: -5 },
    // REAL POSITION
    { x: 0, y: -10, z: 5 },
    { x: 0, y: 2, z: -5 },
    { x: 10, y: 0, z: 0 },
  ];
  const rotation = [
    { x: 0, y: 6, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: Math.PI / 2, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: -Math.PI / 3 },
  ];
  const [mouse, setMouse] = useState(0);
  const [currPosition, setCurrPosition] = useState(position[0]);
  const [currRotation, setCurrRotation] = useState(rotation[0]);

  const [display, setDisplay] = useState(false);

  // FUNCTION
  // FIRST SECTION
  const openCanHandler = () => {
    setCurrPosition({ x: 0, y: 0, z: -4 });
    setCurrRotation({ x: 0, y: Math.PI / 4, z: -Math.PI / 3 });
  };
  // SECOND SECTION
  const rotationHandler = () => {
    setCurrRotation({ x: 0, y: -2 * Math.PI + currRotation.y, z: 0 });
  };

  // USEEFFECT
  useEffect(() => {
    // console.log(mouse);
    setDisplay(true);
    setCurrRotation(rotation[mouse]);
    setCurrPosition(position[mouse]);
    // SCROLL
    scrollContainerRef.current.scrollTo({
      top: window.innerHeight * mouse,
      behavior: "smooth",
    });
    setTimeout(() => {
      setDisplay(false);
      setCurrPosition(position[mouse + 3]);
      setCurrRotation(rotation[mouse + 3]);
    }, 900);
  }, [mouse]);

  // console.log(mouse);
  const language = [];
  return (
    <>
      <main className="h-screen overflow-hidden">
        <Slider func={setMouse} state={mouse} />
        <div ref={scrollContainerRef} className="overflow-hidden h-[100svh]">
          <MainCanvas
            // currPosition={{ x: 0, y: 0, z: 5 }}
            // currRotation={{ x: 0, y: 1, z: 6 }}
            currPosition={currPosition}
            currRotation={currRotation}
            state={display}
            style={style}
          />
          <HeadSection func={openCanHandler} />
          <MiddleSection func={rotationHandler} />
          <LastSection />
        </div>
      </main>
    </>
  );
}
