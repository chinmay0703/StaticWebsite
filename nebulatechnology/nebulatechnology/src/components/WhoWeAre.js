import React from "react";
import who from "../assets/img/who.jpg";

const WhoWeAre = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: `url( ${who})` }}
        className="flex justify-center items-center  bg-no-repeat bg-cover bg-fixed   w-full h-full  "
      >
        <div
          
          className="md:h-[70vh] w-[90vw] grid grid-cols-1 md:grid-cols-2 my-4 bg-white bg-opacity-70 p-4 align-middle place-items-center"
   >
          <div data-aos="fade-right">
            <img
              src={who}
              className="md:w-full md:h-[60vh] "
              alt="who we are"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col text-cyan-100 justify-center items-start h-full md:p-8 p-4 "
            // className="flex flex-col justify-center items-center h-full md:p-8 p-4 "
          >
            <h1 className="text-2xl md:text-3xl text-black ">Who We Are</h1>
            <p className="text-lg text-justify md:text-1xl text-black mt-2 p-2 overflow-hidden">
              Welcome to Nebula technology, your number one source for all
              things in Software Solutions. We're dedicated to giving you the
              very best of Software Solutions, with a focus on Java, Android,
              Spring Hibernate, IOS, PHP, Digital Marketing etc. We have
              expertise in different domain and we passionate about upgrading us
              in new technologies as well. Our long term goal is to_provide end
              to end service to our clients and make them satisfied with our
              service. We are working with different technologies to implement
              clients innovative ideas in real time environment. We hope you
              enjoy Our Service and products as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
