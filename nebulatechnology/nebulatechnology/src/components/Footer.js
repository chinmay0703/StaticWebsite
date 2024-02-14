import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/NebulaWhite.png";
import ChatBot from "./ChatBox";

const Footer = ({ isShow }) => {
  const PhoneIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    );
  };

  const EmailIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    );
  };
  return (
    <div className="bg-gray-500"><div className="flex flex-col  text-cyan-50 bg-gradient-to-r from-try to-info text-1xl ">
      <ChatBot></ChatBot>
      <div className="flex flex-col md:flex-row items-start  md:items-center justify-around space-y-8 px-10 py-10">
        <div className="w-full md:w-3/4">
          <div className="w-full text-slate-100 md:w-3/4">
            <Link to="/">
              <img
                className=" h-[70px] mb-4 left-0 object-contain "
                src={logo}
                alt="logo"
              />{" "}
            </Link>
            <div
      
              className="  w-full shadow-lg  shadow-slate-500/50   bg-black  mt-4 pl-4 md:pl-8 space-y-2 p-2 "
            >
              <h1 className="flex flex-wrap   text-[18px] ">
                {" "}
                <PhoneIcon /> <a href="tel:+918668768612">8668768612</a> ,
                <a href="tel:+918097760688">8097760688</a> ,
                <a type="tel" href="tel:+917507316272">
                  7507316272
                </a>
              </h1>
              <h1 className="flex flex-wrap   text-[18px] ">
                {" "}
                <EmailIcon /> hr@nebula-technology.com
              </h1>
            </div>
            <div className="hover:text-bold shadow-xl shadow-gray w-full rounded-md  bg-black mt-4 pl-4 md:pl-8 space-y-2 p-2 ">
              <h1 className="   text-[18px] ">
                CTS No 349, 3rd floor, Shilavihar Colony,
              </h1>
              <h1 className="   text-[18px]  ">
                Opposite to Durga Mata Mandir,
              </h1>
              <h1 className="   text-[18px] ">Near Paud Phata Bus Stop,</h1>
              <h1 className="   text-[18px] ">Kothrud, Pune 411038</h1>
            </div>
          </div>
        </div>
        <div
         
          className="w-full shadow-lg shadow-slate-500/50"
        >
          <iframe
            title="nebula_technology"
            className=" rounded-md w-full top-0 left-0 relative overflow-hidden cover "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15133.991230574691!2d73.8231593!3d18.5063932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x12d81c9f02199c77!2sNebula%20Technology!5e0!3m2!1sen!2sin!4v1646203735297!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
       
          ></iframe>
        </div>
      </div>

      <div className="flex text-slate-100 text-[1rem] mt-4 py-6 px-4 md:px-0 flex-wrap bg-black  bg-primary/60  items-center justify-around">
        <h4>Copyright © 2022 - All Rights Reserved - Nebula Technology</h4>
        {/* <h1>Developed by Chinmay Vyawahare/Nitin Imade</h1> */}
      </div>
    </div>
    </div>

  );
};

export default Footer;
