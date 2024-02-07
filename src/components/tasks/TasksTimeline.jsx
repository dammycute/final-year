import TaskComponent from "./TaskComponent";
import dateDiffInDays from "../utils/dateDifference";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const project_duration = "6 weeks";
const numberOfDays = Number(project_duration.slice(" ")[0]) * 7;
const duration_array = ["M", "T", "W", "T", "F", "S", "S"];

// const tasks = [
//   {
//     title: "Make an Automatic Payment System that enable the design",
//     startdate: new Date("2023-11-01"),
//     enddate: new Date("2023-11-30"),
//   },
//   {
//     title: "Design Gateway",
//     startdate: new Date("2023-11-05"),
//     enddate: new Date("2023-12-06"),
//   },
//   {
//     title: "Secure Access",
//     startdate: new Date("2023-11-05"),
//     enddate: new Date("2023-12-06"),
//   },

//   {
//     title: "Develop Home Page",
//     startdate: new Date("2023-12-06"),
//     enddate: new Date("2023-12-23"),
//   },
// ];

let number = 0;
const newArray = [];

while (number < numberOfDays) {
  newArray.push(duration_array[number % duration_array.length]);
  number++;
}

const TasksTimeline = () => {
  const { projectId } = useParams();
  const [taskData, setTaskData] = useState(null);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`,

          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data;
        console.log("Task Data:", data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks || [];

  const filteredTasks = tasks.filter((task) => task.projectId === projectId);

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="h-[17rem] mt-1 overflow-scroll">
      <div className="relative">
        <div className="h-[90rem] mt-5 flex flex-nowrap">
          <TableColumn />
        </div>
        <div className="absolute top-5 left-0">
          {filteredTasks.map((task) => {
            const startDate = new Date(task.startDate);
            const endDate = new Date(task.endDate);

            const days = dateDiffInDays(startDate, endDate);
            const duration = days * 30;

            return (
              <TaskComponent
                key={task._id}
                startdate={`${startDate.getFullYear()}/${
                  startDate.getMonth() + 1
                }/${startDate.getDate()}`}
                enddate={`${endDate.getFullYear()}/${
                  endDate.getMonth() + 1
                }/${endDate.getDate()}`}
                title={task.title}
                duration={duration}
                day={`${startDate.getDate()}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TasksTimeline;

const TableColumn = () => {
  const column = newArray.map((day, index) => (
    <div
      key={index}
      className={
        day == "S"
          ? "text-gray-400 w-[30px] h-full bg-[#f7f7f7] border border-r border-gray-200 text-center text-sm"
          : "text-gray-400 w-[30px] h-full border border-r border-gray-200 text-center text-sm"
      }
    >
      {day}
    </div>
  ));

  return <div className="flex flex-nowrap">{column}</div>;
};
