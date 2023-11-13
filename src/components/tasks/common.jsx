import { Link } from "react-router-dom";
import clock from "../../assets/images/clock.svg";
import React from "react";
import MonthsCounter from "../utils/months-count";
import { Button } from "@/components/ui/button";

const CommonComponent = () => {
    const targetDate = new Date("2023-12-01");
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };
  return (
    <div>
        <div className="top-bar flex justify-between items-center">
        <div className="top-left">
          <h2 className="font-bold">Slumbeigil</h2>
          <div className="top-left-text flex gap-4 items-center">
            <p>Edit or modify all card as you want</p>
            <p className="badged1">OnTrack</p>
          </div>
        </div>
        <div className="top-right flex gap-6">
          <div className="sect text-center">
            <p>Time Spent</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <MonthsCounter
                className="px-4"
                targetDate={targetDate}
                onFinish={handleFinish}
              />
            </div>
          </div>
          <div className="sect text-center">
            <p>Deadline</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <MonthsCounter
                className="px-4"
                targetDate={targetDate}
                onFinish={handleFinish}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="caontain flex justify-between my-8 itms-center">
        <div className="relative flex items-center">
          <div className="absolute left-3 top-3">
            <i className="bi bi-search gray-400"></i>
          </div>
          <input
            type="text"
            placeholder="Search for anything"
            className="pl-16 pr-16 py-2 bg-[#F0F6FF] text-[#6F6F70] rounded-lg focus:outline-none"
          />
        </div>

        <div className="buttons flex justify-end gap-6">
            <Button className="bg-[#EEF4FB] text-[#036EFF] px-4 text-md">
              <Link to="/create">Add Task</Link>
            </Button>
            <Button className="bg-[#036EFF]  px-4 text-md">
              <Link to="/create">Print Invoice</Link>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default CommonComponent