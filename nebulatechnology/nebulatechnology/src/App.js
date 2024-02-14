import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import videobg from "./assets/videobg.mp4";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tech from "./components/Tech";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Career from "./components/Career";
import { AboutUs, HomeAboutUs } from "./components/AboutUs";
import Login from "./components/Login";
import { Products, HomeProduct } from "./components/Products";
// import ChatBot from "./components/ChatBox";

// import ScrollToTop from "./components/ScrollToTop";
// import { SocialMediaIconsReact } from "social-media-icons-react";

// import { useEffect, useState } from "react";

function App() {
  // className = "bg-gradient-to-r from-blue-500";
  // className="w-full h-full" style={{ backgroundImage: `url( ${img2})` }}
  // bg-gradient-to-r from-blue-200 to-blue-100

  const Home = () => {
    return (
      <div className="overflow-hidden bg-transparents ">
        <LandingPage />
        <Tech />
        <WhoWeAre />
        <Services />

        <HomeProduct />
        <HomeAboutUs />

        <Footer />
      </div>
    );
  };

  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 300) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   });
  // }, []);

  // This function will scroll the window to the top
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // for smoothly scrolling
  //   });
  // };

  return (
    <div className="  ">
      <video
        autoPlay
        muted
        loop
        className="half-video"
        style={{
          position: "fixed",
          width: "100%",
          left: "0",
          top: "0",
          bottom: "0",
          height: "100%",
          
          objectFit: "cover",
          // transform: "translate(0%, 0%)",
          zIndex: "-1",
        }}
      >
        <source src={videobg} type="video/mp4" />
      </video>
      <div
        className=" w-full h-full  text-primary  "
        // style={{ backgroundImage: `url( ${background})` }}
      >
        {/* <ScrollToTop /> */}
        <Navbar />
        <div className="flex flex-col absolute z-50 left-0 top-1/3">
        </div>
        <Routes>
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/whoweare" element={<WhoWeAre />} />
          <Route exact path="/service" element={<Services />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

