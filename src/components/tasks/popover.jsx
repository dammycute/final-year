import PropTypes from "prop-types";
import avatar from "../../../assets/images/avatar.png";
import date from "../../../assets/images/calendar.svg";
import clock from "../../../assets/images/clock.svg";
import x from "../../assets/images/x.png";
import assignee from "../../assets/images/assignee.png";
import owner from "../../assets/images/owner.png";
import status from "../../assets/images/status.png";
import priority from "../../assets/images/priority.png";
import plus from "../../assets/images/plus.png";
import attach from "../../assets/images/Attach.png";

import CountdownTimer from "../utils/time";

const PopoverCard = ({ onClose }) => {
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popover-overlay container" onClick={handleClose}>
      <div
        className="popover-card container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popover-header">
          <div className="pop-top flex justify-between">
            <p className="text-gray-400">Project / Task ID-1234</p>
            <img src={x} alt="" onClick={handleClose} />
          </div>
          <div className="flex title justify-between items-center py-4">
            <h1 className="">Make a Suitable form</h1>
            <div className="time badged1">
              <img src={clock} alt="" />
              <CountdownTimer
                className="px-4"
                initialHours={2}
                onFinish={handleFinish}
              />
            </div>
          </div>
          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={priority} alt="" />
                <span>Priority</span>
              </div>
              <div className="right">
                <button>High</button>
              </div>
            </div>
          </div>
          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={status} alt="" />
                <span>Status</span>
              </div>
              <div className="right green">
                <button className="green">Completed</button>
              </div>
            </div>
          </div>

          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={owner} alt="" />
                <span>Owner</span>
              </div>
              <div className="right people">
                <img src={avatar} alt="" />
                <span>UI Sharks</span>
              </div>
            </div>
          </div>

          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={assignee} alt="" />
                <span>Assignee</span>
              </div>
              <div className="right people">
                <img src={avatar} alt="" />
                <span>Coder bhai</span>
              </div>
            </div>
          </div>

          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={date} alt="" />
                <span>Due Date</span>
              </div>
              <div className="right">
                <span>March 24th 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div className="popover-content">
          {/* Add content specific to the popover card */}
          <div className="attachment">
            <h2 className="font-bold">Attachments</h2>
            <div className="document">
              <img src={attach} alt="" />
              <p>
                <a href="">Document Links</a>
              </p>
            </div>
            <div className="document">
              <img src={plus} alt="" />
              <p>Add Attachment</p>
            </div>
          </div>

          <div className="attachment">
            <h2 className="font-bold">Description</h2>
            <div className="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi natus tempora cupiditate aliquid maiores totam consequuntur eligendi laboriosam aperiam!</p>
            </div>
          </div>
          <div className="popover-footer">
            <img src={avatar} alt="" />
            <p>Add Attachment</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

PopoverCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopoverCard;
