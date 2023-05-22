import React from "react";
import DateInput from "../components/DateInput";

const Date = () => {
  return (
    <>
      {/* input section starts */}
      <div className="flex justify-evenly">
        <DateInput
          key={10}
          min="1"
          max="31"
          minLen="1"
          maxLen="2"
          heading="DAY"
          pHolder={"DD"}
        />
        <DateInput
          key={11}
          min="1"
          max="12"
          minLen="1"
          maxLen="2"
          heading="MONTH"
          pHolder={"MM"}
        />
        <DateInput
          key={12}
          min="1950"
          max="2050"
          minLen="4"
          maxLen="4"
          heading="YEAR"
          pHolder={"YYYY"}
        />
      </div>
      {/* input section ends */}
      <div className="my-8 relative">
        <div className="border-t border-slate-300 w-[80%] md:w-[75%] mx-auto"></div>
        <button className="w-20 h-20 absolute -bottom-10 right-40 bg-white text-violet-600 border-2 border-violet-600 p-4 font-bold rounded-full hover:bg-violet-600 hover:text-white hover:shadow-xl hover:p-2 transition duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Date;
