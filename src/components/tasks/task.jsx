import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskTab from "./task-tab";
import CommonComponent from "./common";
import "./task.css";
import { useParams } from "react-router-dom";

const TaskPage = () => {
  const { projectId } = useParams();
  const userId = localStorage.getItem("user_id");
  const [projectData, setProjectData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`,
          {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          }
        );
        const data = response.data;
        console.log("Project Data:", data);
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [userId]);

  // Extract projects array from projectData
  const project = projectData?.projects.find(p => p._id === projectId);

  return (
    <div className="rounded-md">
      <h2 className="text-lg py-3 text-[#9A93B3]">
        Project/{project?.title}/Tasks
      </h2>
      <div className="bg-white rounded-lg">
        <CommonComponent />
        <TaskTab />
      </div>
    </div>
  );
};

export default TaskPage;
