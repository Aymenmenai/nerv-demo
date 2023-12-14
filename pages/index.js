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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const
  const style = [
    "-z-10  top-0",
    " z-10 -bottom-[100svh]",
    " z-10 -bottom-[200svh]",
  ];
  const position = [
    // INITIAL
    { x: 0, y: -20, z: 5 },
    { x: 0, y: 24, z: -5 },
    { x: -40, y: 0, z: -5 },
    // REAL POSITION
    { x: 0, y: -10, z: 5 },
    { x: 0, y: 0, z: -5 },
    { x: 10, y: 0, z: 0 },
  ];
  const rotation = [
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: -Math.PI / 3 },
  ];
  const [mouse, setMouse] = useState(0);
  const [currPosition, setCurrPosition] = useState(position[0]);
  const [currRotation, setCurrRotation] = useState(rotation[0]);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const [display, setDisplay] = useState(false);

  // FUNCTIONS
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const base = scrollY / window.innerHeight;
    const scrollDirection = scrollY > prevScrollY ? "down" : "up";
    // console.log(base, scrollDirection, scrollY , prevScrollY);
    if (
      (scrollDirection === "down" && base < 0.99) ||
      (scrollDirection === "up" && base < 0.093)
    ) {
      setMouse(0);
    } else if (
      (scrollDirection === "down" && base < 1.068) ||
      (scrollDirection === "up" && base < 1.093)
    ) {
      setMouse(1);
    } else if (
      (scrollDirection === "down" && base >= 1.9) ||
      (scrollDirection === "up" && base >= 1.093)
    ) {
      setMouse(2);
    }

    // console.log('Current Section Index:', setMouse, 'Scroll Direction:', scrollDirection);

    // Update the previous scroll position
    setPrevScrollY(scrollY);
  };
  // USEEFFERCT

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // console.log(mouse);
    setDisplay(true);
    setCurrRotation(rotation[mouse]);
    setCurrPosition(position[mouse]);
    setTimeout(() => {
      setDisplay(false);
      setCurrPosition(position[mouse + 3]);
      setCurrRotation(rotation[mouse + 3]);
    }, 1000);

    // console.log("jjjj");
  }, [mouse]);

  // console.log(prevScrollY);
  const language = [];
  return (
    <>
      <main className="">
        <div
          className={`${display ? "hidden" : "absolute"} ${
            style[mouse]
          }  w-full h-full bg-red-50/0 `}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <Environment preset="city" />
            {/* {mouse === 1 ? <OrbitControls enableZoom={false} /> : <></>} */}
            <Model position={currPosition} rotation={currRotation} />
          </Canvas>
        </div>
        <HeadSection />
        <MiddleSection />
        <LastSection />
      </main>
    </>
  );
}
