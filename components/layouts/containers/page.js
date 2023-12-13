import React from "react";

const Page = ({ children }) => {
  return (
    <div className=" w-[100svw] h-[100svh] flex flex-col justify-center items-center ">
      {children}
    </div>
  );
};

export default Page;
