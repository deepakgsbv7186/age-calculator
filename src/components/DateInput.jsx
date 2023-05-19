import React from "react";

const DateInput = ({ min, max, heading }) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h2 className="text-gray-500 font-bold tracking-[0.2rem]">{heading}</h2>
        <input
          type="number"
          min={min}
          max={max}
          className="border-2 border-slate-300 w-24 h-16 rounded-md text-2xl font-[700] focus:border-violet-400 text-center"
        />
      </div>
    </>
  );
};

export default DateInput;
