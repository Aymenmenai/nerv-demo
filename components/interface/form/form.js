import React from "react";

const Form = ({ children }) => {
  return <div className="border w-[25svw] h-[60svh] backdrop-blur-md rounded-lg p-4 z-30">{children}</div>;
};

export default Form;
