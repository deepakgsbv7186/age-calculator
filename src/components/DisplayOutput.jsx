import React from "react";

const DisplayOutput = ({ timeValue, timeCurrency }) => {
  return (
    <li className="text-6xl italic tracking-[0.2rem] px-4 font-extrabold">
      <span className="px-3 text-violet-600">{timeValue}</span>
      {timeCurrency}
    </li>
  );
};

export default DisplayOutput;
