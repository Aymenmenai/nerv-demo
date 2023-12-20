import React, { useState } from "react";
import Page from "../layouts/containers/page";
import Tastes from "../design/animations/can/middle/tastes";
import FruitRender from "../logic/fruit-render";

const MiddleSection = ({ func }) => {
  const taste = [
    {
      name: "Sour & Fresh",
      icon: ["lime", "mint"],
      color: "#32CD32",
    },
    { name: "Purple", icon: ["blueberry", "grape"], color: "#702963" },
    { name: "Haweii", icon: ["pineapple", "kiwi"], color: "#FCF55F" },
    { name: "Cherry x Gum", icon: ["cherry", ""], color: "#E0115F" },
    { name: "Berries", icon: ["strawberry", "raspberry"], color: "#40E0D0" },
    { name: "Mango", icon: ["peach", "mango"], color: "#FF5F1F" },
    {
      name: "Exotic fruits",
      icon: ["passion-fruit", "dragon-fruit"],
      color: "#00FFC3",
    },
  ];
  const [main, setMain] = useState(taste[0]);

  // CHANGE TATSE
  const tasteHandler = (el) => {
    setMain(el);
    func();
  };
  return (
    <Page>
      <div
        style={{
          backgroundColor: main.color,
          transition: "600ms all ease-in-out",
        }}
        className="w-full h-full flex p-10 absolute justify-around items-center flex-col overflow-hidden"
      >
        <div className="z-10 text-9xl flex-1 absolute opacity-70 uppercase flex justify-center items-center font-light">
          CHOOSE YOUR TASTE
        </div>
        <div className=" w-full z-0 h-full absolute top-0 left-0 grid grid-cols-10 gap-10">
          {[...Array(50).keys()].map((el, index) => {
            return (
              <div
                key={index}
                className="w-full h-full flex justify-center items-center opacity-40 p-10"
              >
                <FruitRender iconName={main.icon[index % 2]} />
              </div>
            );
          })}
        </div>

        <div className="text-9xl flex-1 text-white uppercase z-10 flex justify-center items-center font-extrabold">
          {main.name}
        </div>
        {/* <div className="bg-yellow-300 absolute h-full w-1/4">
          {/* <Tastes condition={main} />
        </div> */}
        <div className="flex justify-around flex-wrap w-[60svw] z-10 backdrop-blur-md border border-white p-3 rounded-2xl">
          {taste.map((el, index) => {
            return (
              <div
                onClick={() => tasteHandler(el)}
                key={index}
                className={`${
                  main.name === el.name
                    ? "scale-125"
                    : "hover:scale-75 hover:bg-black/5"
                } grid gap-2 text-center cursor-pointer  transition-all ease-in-out`}
              >
                <div
                  className={` rounded w-32 h-32  fill-white ring-white flex justify-center items-center overflow-hidden p-6`}
                >
                  <FruitRender iconName={el.icon[1]} />
                </div>
                {/* <div>{el.name}</div> */}
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default MiddleSection;
