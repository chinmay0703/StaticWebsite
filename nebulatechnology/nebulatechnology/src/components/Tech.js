import React from "react";
import java from "../assets/lngico/java.svg";
import selenium from "../assets/lngico/selenium.svg";
import servicenow from "../assets/lngico/servicenow.png";
import ui from "../assets/lngico/ui.png";

const Tech = () => {
  return (
    <div className="flex items-center bg-transparent justify-center w-screen overflow-hidden">
      <div className="animate-company_logo  grid gap-5 md:gap-0 grid-cols-1 md:grid-cols-4  place-items-center align-bottom   h-full w-full p-8 ">
        <div className="flex   from-purple-500 to-pink-500  bg-blue-500/70  flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            className=" w-20 animate-nav md:w-24 rounded-xl h-auto hover:scale-125   duration-500"
            src={java}
            alt="java"
          />

          <h1 className="text-center text-slate-900 font-sans font-semibold p-2 ">
            J2EE, Spring Framework, Microservices, Hibernate, Android
          </h1>
        </div>
        <div className="flex   from-purple-500 to-pink-500  bg-blue-500/70 flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            className="w-20 md:w-24 h-auto  rounded-xl hover:scale-125  duration-500"
            src={servicenow}
            alt="php"
          />
          <h1 className="text-center text-slate-900 font-sans font-semibold p-2 ">
            Service Level Management, Service Catalog, Service Portal
          </h1>
        </div>

        <div className="flex from-purple-500 to-pink-500  bg-blue-500/70 flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            className="w-20 md:w-24 0 rounded-xl h-auto hover:scale-125  duration-500"
            src={ui}
            alt="javascript"
          />
          <h1 className="text-center text-slate-900 font-sans font-semibold p-2 ">
            React.Js, Angular.Js, Node.Js, HTML5, CSS3, JavaScript
          </h1>
        </div>
        <div className="flex  from-purple-500 to-pink-500  bg-blue-500/70 flex-col p-2 bg-slate-200 shadow-sm shadow-slate-400/50  rounded-md items-center justify-between md:w-[15vw] space-y-2 ">
          <img
            className="w-20 md:w-24  rounded-xl h-auto hover:scale-125  duration-500"
            src={selenium}
            alt="serlenium"
          />
          <h1 className="text-center text-slate-900 font-sans font-semibold p-2 ">
            Manual, Automation, Selenium, Cucumber Testing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Tech;
