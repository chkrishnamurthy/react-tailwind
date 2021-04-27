import React from "react";
import "./App.css";
import LeftNav from "./components/LeftNav";
import Box1 from "./components/Box1";
import Navbar from "./components/Navbar";
import Box3 from "./components/Box3";
import Box2 from "./components/Box2";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen py-10 px-3 sm:px-5">
        <LeftNav />
        <div className="flex flex-col">
          <div className="text-4xl py-5 w-screen font-bold">
            Your Dashboard is updated
          </div>
          <div className="flex flex-wrap">
            <Box1 />
            <Box2 />
            <Box3 />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
