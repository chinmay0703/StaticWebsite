import icon from "../assets/lngico/icon.png";
import "../App.css";

const LandingPage = () => {
  return (
    <div
      className="   grid place-content-end bg-transparent  grid-cols-1  text-red-900  mt-8 md:mt-0    md:h-[55vh] "
    >
      <div className="flex flex-col space-y-4 justify-center h-full md:mb-10 items-center  ">
        <div className="bg-slate-50/50  p-8  animate-navafter drop-shadow-3xl  ">
          <h1 className=" flex items-center text-4xl  md:text-8xl font-extrabold   ">
            N{" "}
            <img
              src={icon}
              className="w-16 h-16 animate-company_logo logo bottom-0"
              alt="logo"
            />{" "}
            bula
          </h1>
          <h1 className=" text-3xl md:text-6xl font-bold bg-red-800 text-slate-50 uppercase p-2 drop-shadow-2xl  ">
            Technology
          </h1>
          <h1 className=" pl-6 text-center text-3xl w-full font-Dynalight text-sky-800 md:text-4xl font-bold italic">
            where creation happens...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
