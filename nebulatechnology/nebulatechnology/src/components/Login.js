import React, { useState } from "react";
// import { SocialMediaIconsReact } from "social-media-icons-react";
import axios from "axios";
const Login = () => {
  // const userData = {}

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    view: "",
    resume: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("A form was submitted: ");

    let res = await axios.post("http://localhost:3001/client", user);
    if (res.status === 200) {
      console.log("client created successfully..!!!!!!!!!!!!");
    }
  };

  return (
    // shadow-lg shadow-slate-400/50 backdrop-blur-sm bg-primary/30 rounded-lg
    <div className="flex w-full h-full  py-4 flex-col flex-wrap items-center   ">
      <div className="  grid grid-cols-1  place-items-center w-full h-full    ">
        <div className=" w-full  flex flex-col items-center justify-center">
          <div className="bg-blue-300/50 shadow-lg shadow-slate-400/40 grid grid-cols-1 rounded-md  gap-2 p-8  ">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-center text-slate-900   text-2xl font-mono ">
                Contact Us
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 ">
                <div data-aos="fade-right">
                  <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                    First Name
                  </h1>
                  <input
                    type="text"
                    placeholder="first name...."
                    className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                    name="fname"
                    id="username"
                    value={user.fname}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div data-aos="fade-left">
                  <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                    Last Name
                  </h1>
                  <input
                    type="text"
                    placeholder="last name...."
                    className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                    name="lname"
                    id="lastname"
                    value={user.lname}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-2 ">
                <div data-aos="fade-right">
                  <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                    Email
                  </h1>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                    name="email"
                    id="username"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div data-aos="fade-left">
                  <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                    Contact No
                  </h1>
                  <input
                    type="text"
                    placeholder="contact info..."
                    className="p-4 text-1xl w-full md:w-[15vw] rounded-md mb-2"
                    name="contact"
                    id="contact"
                    value={user.contact}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div data-aos="fade-right">
                <h1 className="font-mono text-1xl font-semibold text-slate-900 bottom-0">
                  Your View
                </h1>
                <textarea
                  type="text"
                  placeholder="share your view..."
                  className="p-4 text-1xl w-full rounded-md mb-2"
                  name="view"
                  id="password"
                  value={user.view}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex justify-start">
                <div className="mb-3 w-96">
                  <label
                    for="formFile"
                    className="form-label inline-block font-semibold mb-2 text-slate-900"
                  >
                    Upload Your Resume
                  </label>
                  <input
                    className="form-control block w-full px-3 p-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    name="resume"
                    id="formFile"
                    value={user.resume}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <button
             
                  className="p-4  text-1xl active:bg-primary hover:bg-gradient-to-l hover:from-blue-500 md:px-6 rounded-md    font-bold bg-slate-50  "
                  // onClick={handleClick}
                  type="submit"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="flex  w-full h-full rounded-md flex-col justify-center items-start p-4 text-slate-900">
          {" "}
          <h1 className="text-xl md:text-1xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            reiciendis quia! Non vol``uptate sapiente, expedita assumenda itaque
            debitis porro accusamus exercitationem. Voluptates perspiciatis ab,
            nobis consectetur saepe doloribus quidem enim!
          </h1>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default Login;
