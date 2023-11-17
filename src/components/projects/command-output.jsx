import avatar from "../../../assets/images/avatar.png";
import line from "../../../assets/images/line.svg";
import cancel from "../../../assets/images/cancel.svg";
import React from "react";

const CommandOutput = () => {
  return (
    <div className="output-contain bg-[#E9F5FE] rounded-md">
      <div className="output-ctn flex p-2 items-center justify-between">
        <div className="output">
          <div className="output-left flex items-center gap-4">
            <img src={avatar} className="w-10" alt="" />
            <div className="name">
              <p className="font-bold">Yash Kai</p>
              <span className="text-gray-400">oyekunle@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="output">
          <p>Civil Engineer</p>
        </div>
        <div className="output">
          <img src={cancel} alt="" />
        </div>
      </div>
      <img src={line} alt="" />
    </div>
  );
};

export default CommandOutput;
