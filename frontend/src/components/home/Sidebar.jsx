import React from "react";
import { FaSearch } from "react-icons/fa";
import Users from "./Users";


const Sidebar = () => {
  return (
    <div className="max-w-[21em] w-full h-screen flex flex-col bg-slate-600">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl text-orange-500"> Gup Shup </h1>

        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/public/assets/LOGO.png" />
          </div>
        </div>
      </div>
      <div className=" ml-3  p-3 input input-bordered input-primary w-full max-w-xs">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
      <div className="h-full overflow-auto">
        <Users />
        <Users />
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center p-3">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/public/assets/Rachit.jpeg" />
          </div>
        </div>

        <button className="btn bg-teal-900 w-40">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
