import idea from "../../../assets/images/Idea.svg";
// import date from '../../assets/images/calendar.svg'
import clock from "../../../assets/images/clock.svg";
import comment from "../../../assets/images/Comments.svg";
import more from "../../../assets/images/more-vertical.svg";
import avatar from "../../../assets/images/avatar.png";
import list from "../../../assets/images/list.svg";
import { Link } from "react-router-dom";
import CountdownTimer from "../utils/time";
import PopoverCard from "./popover";
import { useState } from "react";

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
  return (
    <>
      <div className="contain bg-white mt-2 rounded-lg" onClick={handleTaskDetailClick}>
        <div className="wrapper1 px-8">
          <div className="section">
            <img src={idea} alt="" />
            <div className="section-text">
              <h1 id="hr" className="font-bold">
                Make an dynamic System that enable the design
              </h1>
              <div className="span">
                <span>#402235</span>
                <span>
                  Opened 10 days ago by <b>Yash Ghori</b>
                </span>
                <div className="action flex gap-4">
                  <span className="badged1">completed</span>
                  <span className="badged1">low</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section gap-8">
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
          </div>
        </div>
      </div>

      {isPopoverVisible && <PopoverCard onClose={closePopover} />}
    </>
  );
};

export default TaskDetail;
