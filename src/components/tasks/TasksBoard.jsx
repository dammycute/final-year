import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TaskProgress from "./TaskProgress";

const TasksBoard = () => {
  const [taskData, setTaskData] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const { projectId } = useParams();

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
        // console.log('Taskb Data:', data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks || [];
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);
  // console.log(filteredTasks)

  const backlogData = filteredTasks.filter((backlog) => backlog.status === "Not Started")
  const inProgressData = filteredTasks.filter((backlog) => backlog.status === "In Progress" || "In Review")
  const completedData = filteredTasks.filter((backlog) => backlog.status === "Completed")
  // console.log("BacklogData", backlogData)
  // if (filteredTasks.status === "In Progress") {
  //   console.log
  // }

  const components = [
    {
      title: "Backlog",
      bdata: [],
    },

    {
      title: "In Progress",
      pdata: [],
    },

    {
      title: "Completed",
      cdata: [],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mx-8">
      {components.map((component, index) => {
        return (
          <TaskProgress
            key={index}
            title={component.title}
            bdata={backlogData}
            cdata={completedData}
            pdata={inProgressData}
          />
        );
      })}
    </div>
  );
};


export default TasksBoard;
