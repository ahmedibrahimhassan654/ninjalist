import React from "react";
import Fotter from "./Fotter";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Fotter />
    </div>
  );
};

export default Layout;
