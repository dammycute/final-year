import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
// import ProjectCreate from "../projects/create";
// import CreateForm from "../projects/create-form";
// import TaskList from "./task-list";
import { Link } from "react-router-dom";
import TasksTimeline from "./TasksTimeline";

const TaskTab = () => {
  const tabs = [
    {
      title: "List",
      href: ".",
      end: true,
    },
    {
      title: "Board",
      href: "/projects",
    },
    {
      title: "Timeline",
      href: "/settings",
    },
  ];

  return (
    <div className="">
      <div className="tab-container flex gap-6 pt-4 pl-8 pr-16">
        {tabs.map((tab) => {
          return (
            <Link
              key={tab.title}
              end={tab.end}
              // style={({ isActive }) =>
              //   isActive
              //     ? {
              //         color: "#0C7FDA",
              //         fontWeight: "bold",
              //         fontSize: "0.9rem",
              //         borderBottom: "3px solid #0C7FDA",
              //       }
              //     : { color: "black" }
              // }
            >
              {tab.title}
            </Link>
          );
        })}
      </div>
      <hr />
      <div className="contain flex justify-between my-4 items-center pl-8 pr-16">
        <div className="relative flex items-center">
          <div className="absolute left-3 top-2 ">
            <SearchIcon color="#9b9b9d" />
          </div>
          <input
            type="text"
            placeholder="Search Task"
            className="px-16 py-2 text-sm bg-[#F0F6FF] text-[#9b9b9d] rounded-lg focus:outline-none"
          />
        </div>

        <div className="buttons flex justify-end gap-6 text-sm">
          <Button className="bg-[#EEF4FB] text-[#036EFF] px-4 text-md">
            <Link to="/projects/tasks/create-task">Add Task</Link>
          </Button>
          <Button className="bg-[#036EFF]  px-4 text-md">
            <Link to="/invoice">Print Invoice</Link>
          </Button>
        </div>
      </div>
      <div className="tab-content w-full h-[20rem] p-0 overflow-auto">
        {/* <TaskList /> */}
        {/* <CreateForm /> */}
        <TasksTimeline />
      </div>
    </div>
  );
};

export default TaskTab;
// Sample components for tab content
