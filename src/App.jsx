import React from "react";
import Display from "./pages/Display";
import Date from "./pages/Date";
import AgeCalculator from "./AgeCalculator";

const App = () => {
  return (
    <>
      <AgeCalculator />
      {/* <section className="flex flex-col gap-12 py-12 w-[85%] mx-auto h-auto my-20 bg-white border shadow-neutral-700 shadow-xl rounded-[1.8rem] rounded-br-[6rem] ">
        <Date />
        <Display />
      </section> */}
    </>
  );
};

export default App;
