import React from "react";
import CountdownTimer from "../utils/time"; // Adjust the path accordingly
import TaskList from "./task-list";
import TaskTab from "./task-tab";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import CommonComponent from "./common";

const TaskPage = () => {
  return (
    <div>
      <div className="h-screen dash-body">
        <Header />
        <div className="flex">
          <Sidebar customClass="w-1/5" />
          {/* Main Content */}
          <div className="w-4/5">
            <div className="contain w-full m-12 p-10 rounded-md bg-white">
            <CommonComponent/>
            <TaskTab/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
