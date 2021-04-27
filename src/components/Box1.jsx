import React from "react";

const Box = () => {
  return (
    <div
      className="w-64 h-64 mr-8 mb-8 shadow-xl rounded-xl p-5 min-h-xs"
      style={{ background: "#FFF4F2" }}
    >
      <div
        className="w-63 mb-5 shadow-xl rounded-xl p-8 "
        style={{ background: "#7CDDD9", height: "150px" }}
      ></div>
      <div className=" font-bold">Latest Updates</div>
      <div className="text-gray opacity-sm ">F&B Industry</div>
    </div>
  );
};

export default Box;
