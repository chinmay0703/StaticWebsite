import React from "react";

import garage from "../assets/clients/garage_on_the_wheel _1.jpg";

import lauro from "../assets/clients/lauro.jpg";
import mahadev_clg from "../assets/clients/mahadev_clg.jpg";
import tarasa from "../assets/clients/tarasa.png";
import tech_mahindra from "../assets/clients/tech_mahindra.png";

import "../App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Clients = () => {
  return (
    <div className="overflow-hidden w-full h-full bg-try/20  flex flex-col flex-wrap items-center justify-around p-8  ">
      <h1 className="  font-bold font-serif text-5xl my-8  md:my-12 text-cyan-100">
        {" "}
        Our Clients{" "}
      </h1>

      <div className=" grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-auto h-auto  ">
        <div className="w-auto h-60 p-2 ">
          <img
            src={tech_mahindra}
            alt="infosys"
            className="w-full h-full rounded-lg object-center  hover:scale-125 duration-500"
          />
        </div>
        <div className="w-auto h-60 p-2 ">
          <img
            src={tarasa}
            alt="itsupport"
            className="w-full h-full rounded-lg  hover:scale-125 duration-500"
          />
        </div>
        <div className="w-auto h-60 p-2 ">
          <img
            src={garage}
            alt="digital_matrix"
            className="w-full h-full  rounded-lg hover:scale-125 duration-500"
          />
        </div>
        <div  className="w-auto h-60 p-2 ">
          <img
            src={mahadev_clg}
            alt="pursho"
            className="w-full h-full object-center  rounded-lg hover:scale-125 duration-500"
          />
        </div>
        <div  className="w-auto h-60 p-2 ">
          <img
            src={lauro}
            alt="pursho"
            className="w-full h-full object-center rounded-lg  hover:scale-125 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
