import React from "react";

import career from "../assets/img/career.jpg";
import Login from "./Login";
import Tech from "./Tech";
import Footer from "./Footer";
import ChatBot from "./ChatBox";

const Career = () => {
  return (
    <div className="overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center p-4 md:p-8 w-full h-full">
        <div className="grid grid-cols-1 w-full h-full  md:grid-cols-2  rounded-xl py-8 p-4 bg-blue-300/50">
          <div data-aos="fade-right" className="col-span-2">
            <img
              src={career}
              className="rounded-xl h-full w-full  "
              alt="career_logo"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center items-center col-span-2 md:p-6 p-3"
          >
            <h1 className="text-2xl text-center md:text-6xl hover:underline">
              Career
            </h1>
            <p className="text-lg text-justify mt-4">
              nebula's career page shares a clear mission statement that
              inspires. It explicitly defines the type of employees they're
              seeking, while also intriguing great applicants with quotes from
              regular fireside chats with well-known innovators.
            </p>
          </div>
        </div>
        <div className="bg-blue-300/50 rounded-md p-4 md:p-8 ">
          <Login />
        </div>
      </div>
      <Tech />
      <ChatBot></ChatBot>
      <Footer />
    </div>
  );
};

export default Career;
