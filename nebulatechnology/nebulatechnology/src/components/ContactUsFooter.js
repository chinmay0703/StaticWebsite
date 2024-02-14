import React from "react";

const ContactUsFooter = () => {
  return (
    <div className="flex flex-col  text-cyan-50 bg-gradient-to-r from-try to-info text-1xl ">
      <div className="flex flex-col md:flex-row items-start  md:items-center justify-around space-y-8 px-10 py-10">
        {/* <div className="w-full md:w-3/4">
          <div className="w-full text-slate-100 md:w-3/4">
            <Link to="/">
              <img
                className=" h-[70px] mb-4 left-0 object-contain "
                src={logo}
                alt="logo"
              />{" "}
            </Link>
            <div
              data-aos="flip-down"
              className="w-full shadow-lg  shadow-slate-500/50  rounded-md  bg-slate-500/30 mt-4 space-y-2 p-2 "
            >
              <h1 className="flex flex-wrap   text-[18px] ">
                {" "}
                <PhoneIcon /> 8668768612, 8097760688, 7507316272
              </h1>
              <h1 className="flex flex-wrap   text-[18px] ">
                {" "}
                <EmailIcon /> hr@nebula-technology.com
              </h1>
            </div>
            <div className=" shadow-xl shadow-slate-500/50 w-full rounded-md  bg-slate-500/30 mt-4 space-y-2 p-2 ">
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
        </div> */}
        <div
          data-aos="flip-up"
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
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="flex text-slate-100 text-[1rem] mt-4 py-6 px-4 md:px-0 flex-wrap  bg-primary/60  items-center justify-around">
        <h1>Copyright © 2022 - All Rights Reserved - Nebula Technology</h1>
        {/* <h1>Developed by Pravin Vargad</h1> */}
      </div>
    </div>
  );
};

export default ContactUsFooter;
