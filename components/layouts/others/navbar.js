import Logo from "@/components/design/svgs/logo";
import DropDown from "@/components/interface/dropdown/dropdown";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute w-full py-8 px-10 flex justify-between items-center z-50">
      <Logo />
      <DropDown><div>Lan</div></DropDown>
    </nav>
  );
};

export default Navbar;
