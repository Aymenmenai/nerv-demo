import React, { useState } from "react";
import Page from "../layouts/containers/page";
import Tastes from "../design/animations/can/middle/tastes";

const MiddleSection = () => {
  const taste = [
    { name: "Lime", icon: "Snake", color: "#32CD32" },
    { name: "Grape", icon: "Eagle", color: "#702963" },
    { name: "Pineapple", icon: "Gazelle", color: "#FCF55F" },
    { name: "Cherry", icon: "Lynx", color: "#E0115F" },
    { name: "Blueberry", icon: "Bear", color: "#40E0D0" },
    { name: "Mango", icon: "Gepard", color: "#FF5F1F" },
    { name: "Special Edition", icon: "DLC", color: "#00FFC3" },
  ];
  const [main, setMain] = useState(taste[0]);

  // CHANGE TATSE
  const tasteHandler = (el) => {
    setMain(el);
  };
  return (
    <Page>
      <div
        style={{
          backgroundColor: main.color,
          transition: "600ms all ease-in-out",
        }}
        className="w-full h-full flex p-10  justify-around items-center flex-col"
      >
        <div className="text-9xl flex-1 flex justify-center items-center">
          CHOOSE YOUR TASTE
        </div>
        <div className="bg-yellow-300/0 absolute h-full w-1/4">
          {/* <Tastes condition={main} /> */}
        </div>
        <div className="flex justify-between flex-wrap w-[50svw] z-10">
          {taste.map((el, index) => {
            return (
              <div
                onClick={() => tasteHandler(el)}
                key={index}
                className="grid gap-2 text-center cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                <div
                  className={`${
                    main.name === el.name ? "border-4" : ""
                  } rounded-full w-32 h-32 border border-white flex justify-center items-center overflow-hidden`}
                >
                  {el.icon}
                </div>
                <div>{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default MiddleSection;
