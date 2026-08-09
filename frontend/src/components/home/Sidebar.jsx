import React from "react";
import { FaSearch } from "react-icons/fa";
import Users from "./Users";
import User1 from "./user1";
import { useDispatch } from "react-redux";
import { LogoutUserThunk } from "../../store/slice/user.thunk.js";
const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = async() => {
    await dispatch(LogoutUserThunk());

  }
  return (
    <div className="max-w-[21em] w-full h-screen flex flex-col border-r-2 border-gray-300 bg-base-100">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl "> Gup Shup </h1>

        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/public/assets/LOGO.png" />
          </div>
        </div>
      </div>
      <div className=" ml-3 mr-3  p-3 input input-bordered input-primary w-full max-w-xs rounded-2xl border-x-white">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
      <div className="h-full overflow-auto">
        <div className="font-bold p-3">Messages</div>
        <Users />
        <User1 />
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center p-3">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/public/assets/Rachit.jpeg" />
          </div>
        </div>

        <button onClick={handleLogout} className="btn bg-blue-800 w-40">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
