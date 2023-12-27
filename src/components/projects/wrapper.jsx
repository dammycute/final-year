import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";  // Import Axios
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
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`
        );
        const data = response.data;
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

  // Extract projectId from projectData
  const projectId = projectData?.id || 3;

  return (
    <Link to={`${projectId}/tasks`}>
      <div className="wrapper1">
        {projectData && (
          <>
            <div className="section">
              <img src={idea} alt="idea" />
              <div className="section-text">
                <h1 id="hr" className="font-bold">
                  {projectData.title}
                </h1>
                <div className="span">
                  <span>#{projectId}</span>
                  <span>
                    Opened 10 days ago by <b>{projectData.creator}</b>
                  </span>
                  <div className="action flex gap-2">
                    <span className="badged">{projectData.status}</span>
                    <span className="badged1">
                      {projectData.completed ? "completed" : "not completed"}
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
                  <span>{projectData.startDate}</span>
                </div>
              </div>
              <div className="date">
                <p>End Date</p>
                <div className="below flex gap-2 items-center">
                  <img src={date} alt="" />
                  <span>{projectData.endDate}</span>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="time badged1">
                <img src={clock} alt="" />
                <CountdownTimer
                  className="px-4"
                  initialHours={2}
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
          </>
        )}
      </div>
    </Link>
  );
};

export default Wrapper;
