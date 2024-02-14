import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/NebulaWhite.png";
import Sidebar from "../components/Sidebar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HomeIcon from "@mui/icons-material/Home";
import "../App.css";

function Navbar() {
  // Define a state variable to track the screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to update the isMobile state when the window size changes
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Add an event listener to handle window size changes
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sticky top-0 z-50 animate-nav flex flex-wrap shadow-lg bg-black from-try to-info shadow-slate-400/20 w-full h-full px-1 md:px-8 items-center justify-between">
          <div className="flex text-sky-50 py-1 items-center justify-start text-1xl flex-1 flex-wrap col">
            <Link to="/">
              <img
                className="z-100 h-[70px] animate-navafter tree"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex justify-around pr-2 col">
            {isMobile ? (
              // Show Sidebar for Mobile View
              <Sidebar />
            ) : (
              // Show "ContactUs" and "Career" for Larger Screens
              <>
               <Link className="my-3  mx-10 gh" to="/">
                  < HomeIcon />
                  Home
                </Link>
                <Link className="my-3 gh" to="/contactus">
                  <PermContactCalendarIcon />
                  ContactUs
                </Link>
                <Link className="my-3 mx-10 gh" to="/career">
                  <DirectionsWalkIcon />
                  Career
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
