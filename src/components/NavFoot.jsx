import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const NavFoot = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow bg-slate-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
