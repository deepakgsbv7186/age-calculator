import React from "react";
import DisplayOutput from "../components/DisplayOutput";

const Display = () => {
  return (
    <>
      <ul className="flex flex-col justify-center md:[w-75%]">
        <DisplayOutput timeValue={38} timeCurrency={"years"} />
        <DisplayOutput timeValue={3} timeCurrency={"months"} />
        <DisplayOutput timeValue={26} timeCurrency={"days"} />
      </ul>
    </>
  );
};

export default Display;
