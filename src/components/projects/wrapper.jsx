import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import idea from "../../../assets/images/Idea.svg";
import date from "../../../assets/images/calendar.svg";
import clock from "../../../assets/images/clock.svg";
import comment from "../../../assets/images/Comments.svg";
import more from "../../../assets/images/more-vertical.svg";
import avatar from "../../../assets/images/avatar.png";
import CountdownTimer from "../utils/time";

const Wrapper = () => {
  const userId = localStorage.getItem("user_id");
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
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
        console.log("Project Data:", data);
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [userId]);

  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };

  // Extract projects array from projectData
  const projects = projectData?.projects || [];

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {projects.map((project) => (
        <Link key={project._id} to={`${project._id}/tasks`}>
          <div className="wrapper1">
            <div className="section">
              <img src={idea} alt="idea" />
              <div className="section-text">
                <h1 id="hr" className="font-bold">
                  {project.title}
                </h1>
                <div className="span">
                  {/* <span>#{project._id}</span> */}
                  <span>
                    Created by <b>{project.projectManagerEmail}</b>
                  </span>
                  <div className="action flex gap-2">
                    {/* <span className="badged">{project.status}</span> */}
                    <span className="badged1">
                      {project.completed ? "completed" : "not completed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="date">
                <p>Start Date</p>
                <div className="below flex gap-2 items-center">
                  <img src={date} alt="" />
                  <span>{formatDate(project.startDate)}</span>
                </div>
              </div>
              <div className="date">
                <p>End Date</p>
                <div className="below flex gap-2 items-center">
                  <img src={date} alt="" />
                  <span>{formatDate(project.endDate)}</span>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="time badged1">
                <img src={clock} alt="" />
                <CountdownTimer
                  className="px-4"
                  initialHours={2} // Adjust this value based on your requirements
                  onFinish={handleFinish}
                />
              </div>
              <div className="profile">
                <img src={avatar} alt="" />
              </div>
              <div className="comment">
                <img src={comment} alt="" />
              </div>
              <div className="more">
                <img src={more} alt="" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
  
};

export default Wrapper;
