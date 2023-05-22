import React from "react";

const DateInput = ({ min, max, heading, pHolder, minLen, maxLen }) => {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h2 className="text-gray-500 font-bold tracking-[0.2rem]">{heading}</h2>
        <input
          onChange={handleChange}
          type="number"
          minLength={minLen}
          maxLength={maxLen}
          min={min}
          max={max}
          placeholder={pHolder}
          className="border-2 border-slate-300 w-24 h-16 outline-violet-600 rounded-md text-2xl placeholder:text-gray-300 font-[700] focus:border-violet-400 text-center md:w-36"
        />
      </div>
    </>
  );
};

export default DateInput;
