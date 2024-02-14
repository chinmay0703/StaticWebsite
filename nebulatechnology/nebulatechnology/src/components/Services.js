import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../App.css";

import erp from "../assets/img/11.jpg";

import digital from "../assets/img/15.jpg";
import android from "../assets/img/17.png";
import manpower from "../assets/img/19.jpg";

const Data = [
  {
    id: 1,
    image: erp,
    name: "ERP Service",
  },

  {
    id: 3,
    image: digital,
    name: "Digital Marketing",
  },

  {
    id: 4,
    image: android,
    name: "Mobile Application",
  },

  {
    id: 5,
    image: manpower,
    name: "HR Solutions",
  },
];

const Services = () => {
  return (
    <div

      className=" md:p-10 bg-gradient-to-r from-try to-info text-2xl"
      // style={{ backgroundImage: `url( ${img1})` }}
    >
      <Carousel
        infiniteLoop={true}
        showArrows={true}
        interval={3000}
        autoPlay={true}
      >
        {Data.map((data, i) => (
          <div
            style={{ backgroundImage: `url( ${data.image})` }}
            className="image bg-no-repeat bg-cover bg-fixed bg-right "
            key={i}
          >
            {/* <img src={data.image} /> */}
            <div className="flex justify-center items-center w-full h-full ">
              <p className="text-slate-100 bg-try/60 font-bold p-4 text-5xl ">
                {" "}
                {/* {data.name}{" "} */}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
