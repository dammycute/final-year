import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import TasksTimeline from "./TasksTimeline";
import TasksBoard from "./TasksBoard";
import TaskList from "./task-list"; // Import your TaskList component
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Loader from "../utils/loader";

const TaskTab = () => {
  const { projectId } = useParams(); // Extract projectId from route parameters

  const [activePanel, setActivePanel] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    {
      title: "List",
      href: "#list",
      id: "tab-1",
      click: () => {
        setActiveTab("tab-1");
        setActivePanel(<TaskList projectId={projectId} />);
      },
    },
    {
      title: "Board",
      href: "#board",
      id: "tab-2",
      click: () => {
        setActiveTab("tab-2");
        setActivePanel(<TasksBoard projectId={projectId} />);
      },
    },
    {
      title: "Timeline",
      href: "#timeline",
      id: "tab-3",
      click: () => {
        setActiveTab("tab-3");
        setActivePanel(<TasksTimeline projectId={projectId} />);
      },
    },
  ];

  const style = {
    color: "#0C7FDA",
    fontWeight: "bold",
    fontSize: "0.9rem",
    borderBottom: "3px solid #0C7FDA",
  };

  useEffect(() => {
    setActiveTab("tab-1");
    setActivePanel(<TaskList projectId={projectId} />);
  }, [projectId]);

  return (
    <div className="">
      <ul className="tab-container flex gap-10 pt-4 pl-8 pr-16">
        {tabs.map((tab) => (
          <li
            key={tab.title}
            style={activeTab === tab.id ? style : null}
            onClick={tab.click}
          >
            <Link to={tab.href} id={tab.id}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
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
            <Link to={`/projects/${projectId}/tasks/create-task`}>Add Task</Link>
          </Button>
          <Button className="bg-[#036EFF]  px-4 text-md">
            <Link to="/invoice">Print Invoice</Link>
          </Button>
        </div>
      </div>
      <div className="tab-content w-full h-[20rem] p-0 overflow-auto">
        {activePanel}
      </div>
    </div>
  );
};

export default TaskTab;
