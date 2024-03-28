import React, { useState, useEffect } from 'react';
import clock from "../../../assets/images/clock.svg";
// import DaysCounter from "../utils/days-count";
// import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import DaysCounter from "../utils/months-count";

const CommonComponent = () => {
  // const targetDays = 6; // Set your target days here
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };

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
        // console.log("Project Data:", data);
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
    <div className="py-4 pl-8 pr-16">
      <div className="top-bar flex justify-between items-center">
        <div className="top-left">
          <h2 className="font-bold">{project?.title}</h2>
          <div className="top-left-text flex gap-4 items-center">
            <p className="text-[#9A93B3]">
              Edit or modify all cards as you want
            </p>
            <p className="badged1 text-sm">OnTrack</p>
          </div>
        </div>
        <div className="top-right flex gap-6 text-sm">
          {/* <div className="sect text-center">
            <p className="mb-2">Time Spent</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <DaysCounter
                days={0.001}
                onFinish={handleFinish}
              />
            </div>
          </div> */}
          <div className="sect text-center">
            <p className="mb-2">Duration</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <DaysCounter
                days={project?.duration}
                onFinish={handleFinish}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonComponent;
