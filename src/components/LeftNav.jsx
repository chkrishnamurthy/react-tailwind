import React from "react";
import { menuItems } from "../constants";

const LeftNav = () => {
  return (
    <div
      style={{ width: 800 }}
      className="flex flex-col w-100 mr-16 ml-10  bg-primary text-white h-100 shadow-xl rounded-xl p-5"
    >
      <div className=" text-4xl">socializer</div>
      <div className="pr-16 px-4">
        {menuItems.map((item) => (
          <div className="text-white py-4 opacity-sm">{item.text}</div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
