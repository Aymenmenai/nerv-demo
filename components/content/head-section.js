import React from "react";
import Page from "../layouts/containers/page";
import ArrowDown from "../design/icons/arrow-down";
import Can from "../design/animations/can/can";

const HeadSection = () => {
  const data = ["Lower engery ?", "Open the can"];
  return (
    <Page>
      <div className="flex-1 flex justify-center items-center text-6xl font-bold uppercase">
        {data[0]}
      </div>
      <div className="bg-red-100/0 text-[#00a66fff] w-full text-center items-center  flex flex-col gap-1">
        <div className="text-center w-full flex01">{data[1]}</div>
        <div className="animate-bounce cursor-pointer">
          <div className="">
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="bg-green-400/0 w-full h-64 ">
        {/* <Can /> */}
      </div>
    </Page>
  );
};

export default HeadSection;
