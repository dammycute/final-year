import idea from "../../../assets/images/Idea.svg";
// import date from '../../assets/images/calendar.svg'
import clock from "../../../assets/images/clock.svg";
import comment from "../../../assets/images/Comments.svg";
import more from "../../../assets/images/more-vertical.svg";
import avatar from "../../../assets/images/avatar.png";
import list from "../../../assets/images/list.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import CountdownTimer from "../utils/time";
import PopoverCard from "./popover";
import { useState, useEffect } from "react";
import DaysCounter from "../utils/months-count";

const TaskDetail = () => {
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };

  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleTaskDetailClick = () => {
    // Toggle the visibility of the popover when the task detail is clicked
    setPopoverVisible(!isPopoverVisible);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const userId = localStorage.getItem("user_id");
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`
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

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          className="contain bg-white mt-2 rounded-lg"
          onClick={handleTaskDetailClick} 
          key={task._id}
        >
          <div className="wrapper1 px-8">
            <div className="section">
              <img src={idea} alt="" />
              <div className="section-text">
                <h1 id="hr" className="font-bold">
                  {task.title}
                </h1>
                <div className="span">
                  <span>{task._id}</span>
                  <span>
                    Created by <b>Yash Ghori</b>
                  </span>
                  <div className="action flex gap-4">
                    <span className="badged1">{task.status}</span>
                    <span className="badged1">{task.priority}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section gap-8">
              <div className="time badged1">
                <img src={clock} alt="" />
                <DaysCounter
                days={task.duration}
                onFinish={handleFinish}
              />
              </div>
              <div className="profile">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {isPopoverVisible && <PopoverCard onClose={closePopover} />}
    </>
  );
};

export default TaskDetail;
