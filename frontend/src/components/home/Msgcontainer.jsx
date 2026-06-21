import React from "react";
import Users from "./Users";
import Message from "./Message";
import { IoMdSend } from "react-icons/io";
import { FaEllipsisV } from "react-icons/fa";
const Msgcontainer = () => {
  return (
    <div className="h-screen w-full flex flex-col ">
      {/* Header */}
      <div className="p-1  border-b border-gray-50 flex justify-between items-center flex-shrink-0">
        <Users />
        <FaEllipsisV size={20}/>

      </div>
      {/* MSG container */}
      <div className="p-3 h-full overflow-x-auto">
        <Message />
        <Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message /><Message />
      </div>
      {/* Input area */}
      <div className=" w-full flex items-center gap-2 p-3 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type message..."
          className="input input-bordered input-primary w-full "
        />
        <IoMdSend size={20} />
      </div>
    </div>
  );
};

export default Msgcontainer;
