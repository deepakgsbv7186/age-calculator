import React from "react";

const DisplayOutput = ({ timeValue, timeCurrency }) => {
  return (
    <li className="text-6xl md:text-[4.8rem] md:pl-[16rem] italic tracking-[0.2rem] md:tracking-[0.4rem] px-4 font-extrabold">
      <span className="px-3 text-violet-600">{timeValue}</span>
      {timeCurrency}
    </li>
  );
};

export default DisplayOutput;
