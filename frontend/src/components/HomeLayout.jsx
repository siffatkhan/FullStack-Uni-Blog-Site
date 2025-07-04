import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Home/Header"
import { Outlet } from "react-router-dom";


function HomeLayout(){
  return (
    <>
      <Header/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
export default HomeLayout;

// Made This layout maybe later dsicard it

