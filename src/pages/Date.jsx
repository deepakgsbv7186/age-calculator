import React from "react";
import DateInput from "../components/DateInput";

const Date = () => {
  return (
    <>
      {/* input section starts */}
      <div className="flex justify-evenly">
        <DateInput key={10} min="1" max="31" heading="DAY" pHolder={"DD"} />
        <DateInput key={11} min="1" max="12" heading="MONTH" pHolder={"MM"} />
        <DateInput key={12} min="1950" max="" heading="YEAR" pHolder={"YYYY"} />
      </div>
      {/* input section ends */}
      <div className="my-8 relative">
        <div className="border-t border-slate-300 w-[80%] md:w-[75%] mx-auto"></div>
        <button className="w-20 h-20 absolute -bottom-10 right-40 bg-white text-violet-600 border-2 border-violet-600 p-4 font-bold rounded-full hover:bg-violet-600 hover:text-white hover:shadow-xl hover:p-2 transition duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Date;
