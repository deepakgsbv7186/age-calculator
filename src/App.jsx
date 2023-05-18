import React from "react";
import DateInput from "./components/DateInput";

const App = () => {
  return (
    <>
      {/* input section starts */}
      <div className="flex justify-evenly">
        <DateInput min="1" max="31" heading="DAY" />
        <DateInput min="1" max="12" heading="MONTH" />
        <DateInput min="1950" max="" heading="YEAR" />
      </div>
      {/* input section ends */}
    </>
  );
};

export default App;
