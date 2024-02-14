import React, { useRef } from "react";
import erp from "../assets/img/1.png";

import product from "../assets/img/4.png";
import digital from "../assets/img/5.png";

import android from "../assets/img/7.png";

import manpower from "../assets/img/9.png";

import mobile from "../assets/img/17.png";
import tech from "../assets/img/15.jpg";
import erpservice from "../assets/img/11.jpg";

import hrsolutions from "../assets/img/hrsolutions.jpg";
import productapp from "../assets/img/product.jpg";

import ClientData from "./ClientData";
import Clients from "./Clients";
import Footer from "./Footer";

const HomeAboutUs = () => {
  const erpRef = useRef(null);
  const productRef = useRef(null);
  const hrRef = useRef(null);
  const mobileRef = useRef(null);
  const digitalRef = useRef(null);

  const Data = [
    {
      id: 1,
      image: erp,
      name: "ERP Service",
      refelement: "erpRef",
      funRef: () => erpRef.current.scrollIntoView(),
    },

    {
      id: 2,
      image: product,
      name: "Product Development",
      refelement: "productRef",
      funRef: () => productRef.current.scrollIntoView(),
    },
    {
      id: 3,
      image: manpower,
      name: "HR Solutions",
      refelement: "hrRef",
      funRef: () => hrRef.current.scrollIntoView(),
    },

    {
      id: 4,
      image: android,
      name: "Mobile Application",
      refelement: "mobileRef",
      funRef: () => mobileRef.current.scrollIntoView(),
    },

    {
      id: 5,
      image: digital,
      name: "Digital Marketing",
      refelement: "digitalRef",
      funRef: () => digitalRef.current.scrollIntoView(),
    },
  ];

  return (
    <div>
      <div
        // style={{ backgroundImage: `url( ${about})` }}
        className="w-screen h-1/6 md:h-1/5 bg-cover no-repeat bg-fixed bg-left flex justify-center items-center "
      >
        <h1 className="  text-center justify-center font-bold font-serif text-5xl my-8  md:my-12 text-cyan-100 ">
          Our Services
        </h1>
      </div>
      <div className="px-10 py-3">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5">
  {Data.map((data, i) => (
    <div
      onClick={data.funRef}
      className="bg-gradient-to-br from-purple-500 to-pink-500 cursor-pointer hover:shadow-xl duration-300 flex flex-col justify-between p-8 rounded-lg"
      key={i}
    >
      <div className="flex flex-col h-[20ch] w-auto justify-center items-center">
        <img
          className="rounded-xl w-auto h-16 fill-slate-900"
          src={data.image}
          alt={data.name}
        />
        <h1 className="text-2xl text-center mt-6 text-slate-900 font-bold">
          {data.name}
        </h1>
      </div>
    </div>
  ))}
</div>


        <div
          ref={erpRef}
          className="w-full md:h-[60vh] place-items-center grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 p-8 bg-white bg-opacity-70"
        >
          <div data-aos="fade-right">
            <img
              src={erpservice}
              className=" w-full h-[20vh] md:h-[50vh] "
              alt="erp_service"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center h-full w-auto align-middle text-cyan-50 md:p-8 p-3"
          >
            <h1 className="text-2xl text-black  text-justify ">
              ERP Solution
            </h1>
            <p className="text-lg text-black text-justify mt-4 ">
              Enterprise resource planning (ERP) refers to a type of software
              that organizations use to manage day-to-day business activities
              such as accounting, procurement, project management, risk
              management and compliance, and supply chain operations..
            </p>
          </div>
        </div>

        <div
          ref={productRef}
          className="w-full md:h-[60vh] place-items-center grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 p-8 bg-white bg-opacity-70"
          >
          <div data-aos="fade-right">
            <img
              src={productapp}
              className=" w-full h-[20vh] md:h-[50vh]"
              alt="product_development"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
          >
            <h1 className="text-2xl text-black text-justify ">
              Product Development
            </h1>
            <p className="text-lg text-justify mt-4 text-black">
              Software product development is a repetitive logical process that
              aims to builds a programmed software product to mark a unique
              personal or business goal, process, or objective. It is mostly a
              planned strategy that comprises various stages or steps that
              result in the creation of an operational software product.
            </p>
          </div>
        </div>

        <div
          ref={hrRef}
          className="w-full md:h-[60vh] place-items-center grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 p-8 bg-white bg-opacity-70"
          >
          <div data-aos="fade-right">
            <img
              src={hrsolutions}
              className="w-full h-[20vh] md:h-[50vh]"
              alt="hr_solutions"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
          >
            <h1 className="text-2xl text-black text-justify ">
              HR Solution
            </h1>
            <p className="text-lg text-black text-justify mt-4">
              We have many kinds of HR services nowadays, from contingency
              search, retained search and Recruitment Process Outsourcing (RPO)
              services. Most HR service provider's main roles are to help
              businesses to run a hiring process more effectively, improve their
              talent pool by acquiring the skilled candidates.
            </p>
          </div>
        </div>

        <div
          ref={mobileRef}
          className="w-full md:h-[60vh] place-items-center grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 p-8 bg-white bg-opacity-70"
          >
          <div>
            <img
              data-aos="fade-right"
              src={mobile}
              className="w-full h-[20vh] md:h-[50vh]"
              alt="mobile_development"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
          >
            <h1 className="text-2xl text-black text-justify ">
              Mobile Development
            </h1>
            <p className="text-lg text-black text-justify mt-4">
              Cross Platform MObile App Development, App Store Optimization
              (ASO) both before and after launching. Outreach initiatives and
              internal cross-promotion. Marketing via social networks. Booking
              KOLs. Mass media promotion and burst campaign.
            </p>
          </div>
        </div>
        <div
          ref={digitalRef}
          className="w-full md:h-[60vh] place-items-center grid grid-cols-1 text-slate-900 md:grid-cols-2 mt-10 p-8 bg-white bg-opacity-70"
          >
          <div>
            <img
              data-aos="fade-right"
              src={tech}
              className=" w-full h-[20vh] md:h-[50vh]"
              alt="digital_marketing"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
          >
            <h1 className="text-2xl text-black text-justify ">
              Digital Marketing
            </h1>
            <p className="text-lg text-black  text-justify mt-4">
              Your powerhouse for digital marketing solutions.forward-thinking
              plan, using SMART goals, to grow a business. Tactics associated
              with a digital marketing strategy include digital marketing
              services like website design, SEO, paid ads, content marketing and
              social media marketing.
            </p>
          </div>
        </div>
      </div>
      <ClientData />
      <Clients />
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-full ">
        <HomeAboutUs />
        <Footer />
      </div>
    </div>
  );
};

export { AboutUs, HomeAboutUs };
