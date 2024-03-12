import React from "react";
import ScrollToTop from "react-scroll-to-top";

const GoToUp = () => {
  return (
    <div>
      <ScrollToTop
        className="flex justify-center items-center  "
        smooth
        top="1000"
        color="rgb(2 132 199)"
      />
    </div>
  );
};

export default GoToUp;
