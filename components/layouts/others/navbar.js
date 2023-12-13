import Logo from "@/components/design/svgs/logo";
import React from "react";

const Navbar = () => {
  return <nav className="bg-transparent absolute  w-full py-8 px-10 flex justify-between items-center">
    <Logo/>
    <div>
      Language
    </div>
  </nav>;
};

export default Navbar;
