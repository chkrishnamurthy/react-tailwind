import React from "react";

const Box2 = () => {
  return (
    <div
      className="w-64 h-64 mr-8 mb-8 shadow-xl rounded-xl p-5 min-h-xs"
      style={{ background: "#FFF4F2" }}
    >
      <div
        className="w-70  mb-5 shadow-xl rounded-xl p-8 "
        style={{ background: "#D2D2D2", height: "90px" }}
      ></div>

      <div className="flex">
        <div
          className="w-full m-1 mb-5 shadow-xl rounded-xl p-8 "
          style={{ background: "#D2D2D2", height: "90px" }}
        ></div>

        <div
          className="w-full m-1 mb-5 shadow-xl rounded-xl p-8 "
          style={{ background: "#3D41D7", height: "90px" }}
        ></div>
      </div>
    </div>
  );
};

export default Box2;
