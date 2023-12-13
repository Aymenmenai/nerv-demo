import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

const Header = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Header;
