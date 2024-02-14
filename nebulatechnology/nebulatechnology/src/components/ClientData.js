import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const ClientData = () => {
  return (
    <div className="overflow-hidden flex flex-wrap items-center justify-around p-4 w-full h-64 bg-transparent">
      <div
        data-aos="fade-right"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200  shadow-slate-500/30 rounded-xl p-4  flex-col items-start  justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl  md:text-4xl ">
          {" "}
          {/* <CountUp start={0} end={123} prefix="+" />{" "} */}
          <CountUp start={0} end={123} prefix="+" redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Total Projects</h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex shadow-lg bg-secondry text-gray-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200  shadow-slate-500/30 rounded-xl p-4  flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">
          <CountUp start={0} end={80} prefix="+" redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Completed</h1>
      </div>
      <div
        data-aos="fade-down"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200  shadow-slate-500/30 rounded-xl p-4  flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">
          <CountUp start={0} end={50} prefix="+" redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Clients</h1>
      </div>
      <div
        data-aos="fade-left"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200  shadow-slate-500/30 rounded-xl p-4 flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">
          <CountUp start={0} end={87} prefix="%" redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">5 Star Rating</h1>
      </div>
    </div>
  );
};

export default ClientData;
