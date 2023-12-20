import React from "react";

const Slider = ({ func, state }) => {
  return (
    <div className="fixed z-50 right-5 bg-red-300/0 flex flex-col h-screen justify-center gap-10 items-center">
      {[...Array(3).keys()].map((el, index) => {
        return (
          <div
            onClick={() => func(index)}
            key={index}
            className={`${
              state === index ? " scale-125 ring-4 " : ""
            } ring-2 w-4 h-4 rounded-full ring-green-900 cursor-pointer `}
          ></div>
        );
      })}
    </div>
  );
};


export default Slider;
