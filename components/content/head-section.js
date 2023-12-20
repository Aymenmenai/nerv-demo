import React from "react";
import Page from "../layouts/containers/page";
import ArrowDown from "../design/icons/arrow-down";
import Can from "../design/animations/can/can";
import { useState } from "react";

const HeadSection = ({ func }) => {
  const [open, setOpen] = useState(false);
  const data = [
    "Lower engery ?",
    "Open the can",
    "Free, Smooth, Energy ,Power, Neurv",
  ];

  // FUNC
  const mainFunction = () => {
    setOpen(!open);
    func();
  };
  return (
    <Page>
      <div
        className={`${
          open ? "" : ""
        } flex-col w-full h-full flex justify-center items-center bg-gradient-to-b from-orange-400 to-transparent `}
      >
        <div className=" flex justify-center items-center text-9xl font-extralight uppercase">
          {data[0]}
        </div>
        <div className="bg-red-100/0 text-[#00a66fff] w-full text-center items-center  flex flex-col gap-1">
          <div className="text-center w-full">{data[1]}</div>
          <div
            onClick={mainFunction}
            className="animate-bounce cursor-pointer z-10"
          >
            <div className="z-10">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={` bg-green-400/0 w-[100svw]  absolute h-[100svh] transition-all ease-in-out duration-300 `}>
        <Can condition={open} />
      </div> */}
    </Page>
  );
};

export default HeadSection;
