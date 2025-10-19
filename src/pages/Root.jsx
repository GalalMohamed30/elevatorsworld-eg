import React from "react";
import Navebar from "../components/Nav/Navebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <div>
      <Navebar />
      <Outlet />
      <Footer />
    </div>
  );
}
