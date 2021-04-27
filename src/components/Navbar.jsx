import React from "react";
import { menuItems } from "../constants";
import profile from "../images/profile.png";

const Navbar = () => {
  return (
    <div class="flex flex-col w-5/6 float-right">
      <nav class="px-1 flex justify-between bg-white h-16 border-b-2">
        <ul class="flex items-center ml-20 mt-10">
          <li class="ml-8 w-44 text-xs text-gray-900">
            Hello Dave, Welcome back
          </li>
        </ul>

        <ul class="flex items-center">
          <li class="pr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </li>
          <li class="h-20 w-20 mt-5">
            <img
              class="h-full w-full rounded-full mx-auto"
              src={profile}
              alt="profile"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
