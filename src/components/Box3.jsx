import React from "react";
import weather from "../images/weather.png";

const Box3 = () => {
  return (
    <div
      className="w-64 h-64 mr-8 mb-8 shadow-xl rounded-xl  min-h-xs"
      style={{ background: "#FFF4F2" }}
    >
      <div class="container">
        <img
          class="h-full w-full  mx-auto"
          src={weather}
          alt="image"
          style={{ width: "100%" }}
        />
        <div className="text-4xl ml-10 w-screen text-white" class="centered">
          What's your plan?
        </div>
        <div
          className="text-4xl pt-5 ml-10 w-screen text-white"
          class="centered_child"
        >
          Looks s a shady day.
        </div>

        <div
          className="text-4xl pt-5 ml-10 w-screen text-white"
          class="centered_count"
        >
          36
        </div>
      </div>
    </div>
  );
};

export default Box3;
