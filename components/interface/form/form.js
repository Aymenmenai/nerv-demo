import Logo from "@/components/design/svgs/logo";
import React from "react";

const Form = ({ children }) => {
  return (
    <div className="border w-[25svw] h-[60svh] backdrop-blur-md rounded-lg p-4 z-30 bg-white/20 flex justify-between items-center flex-col">
      <div className="p-5">
        <Logo />
        <p className="text-sm text-white">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`}
        </p>
      </div>
      <div className=" flex flex-col gap-5 justify-start flex-1 w-full ">
      <input className="text-white bg-white/40 w-full h-12 rounded p-4"/>
      <input className="text-white bg-white/40 w-full h-12 rounded p-4"/>
      <textarea className="text-white bg-white/40 w-full h-full rounded p-4"/>
      <div className="bg-white text-pink-400 py-3 text-center rounded cursor-pointer">MAIN</div>
      </div>
    </div>
  );
};

export default Form;
