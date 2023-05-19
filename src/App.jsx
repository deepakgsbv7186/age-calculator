import React from "react";
import DateInput from "./components/DateInput";
import DisplayOutput from "./components/DisplayOutput";

const App = () => {
  return (
    <>
      <section className="flex flex-col gap-12 py-12 w-[90%] mx-auto h-auto my-20 bg-white border shadow-neutral-700 shadow-xl rounded-[1.8rem] rounded-br-[6rem] ">
        {/* input section starts */}
        <div className="flex justify-evenly">
          <DateInput min="1" max="31" heading="DAY" />
          <DateInput min="1" max="12" heading="MONTH" />
          <DateInput min="1950" max="" heading="YEAR" />
        </div>
        {/* input section ends */}
        <div className="my-8 relative">
          <div className="border-t border-slate-300 w-[80%] mx-auto"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-20 h-20 absolute -bottom-10 right-40 bg-violet-600 text-white p-4 font-bold rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </div>
        <div>
          <ul>
            <DisplayOutput timeValue={38} timeCurrency={"years"} />
            <DisplayOutput timeValue={3} timeCurrency={"months"} />
            <DisplayOutput timeValue={26} timeCurrency={"days"} />
          </ul>
        </div>
      </section>
    </>
  );
};

export default App;
