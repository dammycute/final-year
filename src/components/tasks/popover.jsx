import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

const PopoverCard = ({ task, onClose }) => {
  const handleFinish = () => {
    console.log('Task completed!');
  };

  const handleClose = () => {
    onClose();
  };

  // Ensure task is available before accessing its properties
  if (!task) {
    return null;
  }

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="popover-overlay container" onClick={handleClose}>
      <div
        className="popover-card container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popover-header">
          <div className="pop-top flex justify-between">
            <p className="text-gray-400">Task Id / {task._id}</p>
            <img src={x} alt="" onClick={handleClose} />
          </div>
          <div className="flex title justify-between items-center py-4">
            <h1 className="">{task.title}</h1>
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
                <button>{task.priority}</button>
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
                <button className="green">{task.status}</button>
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
                <span>{task.owner}</span>
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
                <span>{task.assignee}</span>
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
                <span>{formatDate(task.endDate)}</span>
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
              <p>{task.description}</p>
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
