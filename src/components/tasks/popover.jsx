import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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
import Select from "react-select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import attach from "../../assets/images/Attach.png";

import CountdownTimer from "../utils/time";

const PopoverCard = ({ task, onClose }) => {
  const { projectId } = useParams();
  const navigate = useNavigate()
  const [normal, setNormal] = useState("default");
  const [taskStatus, setTaskStatus] = useState("");
  const token = localStorage.getItem("token");

  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'green'; // Apply green background for 'Not Started'
      case 'In Progress':
        return 'rgb(171, 171, 2)'; // Apply yellow background for 'In Progress'
      case 'In Review':
        return '#036EFF'; // Apply blue background for 'In Review'
      case 'Completed':
        return 'gray'; // Apply gray background for 'Completed'
      default:
        return ''; // Default background color
    }
  };
  

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

  const [formData, setFormData] = useState({
    taskId: task._id,
    status: "",
  });
  const handleStatusChange = async (selectedOption) => {
    const newStatus = selectedOption.value;

    try {
      const formDataToSubmit = {
        taskId: task._id,
        status: newStatus,
      };

      const response = await axios.patch(
        `https://pm-api.cyclic.app/project/${projectId}/task`,
        formDataToSubmit,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || 201) {
        // Update the task status in the local state or Redux store if needed
        // Optionally, you can also close the popover here if the update is successful
        setTaskStatus("Task Successfully Updated");
        // navigate(`/projects`)
        window.location.reload(false)
      } else {
        setTaskStatus("Failed to update task");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setTaskStatus(error.response.data.error);
      }
    }
  };

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
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
            {/* <div className="time badged1">
              <img src={clock} alt="" />
              <CountdownTimer
                className="px-4"
                initialHours={2}
                onFinish={handleFinish}
              />
            </div> */}
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
              <div className="right">
                <button style={{ backgroundColor: getStatusColor(task.status) }}>{task.status}</button>
              </div>
            </div>
          </div>

          <div className="select flex gap-6 items-center mt-6">
            <Label>Change Task Status</Label>
            <Select
              className="mt-2 w-[150px] bg-[blue] "
              value={{ value: formData.status, label: formData.status }}
              onChange={handleStatusChange}
              defaultInputValue='Not Started'
              options={[
                { value: "Not Started", label: "Not Started" },
                { value: "In Progress", label: "In Progress" },
                { value: "In Review", label: "In Review" },
                { value: "Completed", label: "Completed" },
              ]}
              styles={{
                menu: (provided) => ({
                  ...provided,
                  top: "auto",
                  bottom: "100%",
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "150px", // Adjust the max height as needed
                  overflowY: "auto",
                }),
              }}
            />
          </div>
          {taskStatus && (
            <Alert variant={normal}>
              <AlertTitle>Status:</AlertTitle>
              <AlertDescription>{taskStatus}</AlertDescription>
            </Alert>
          )}

          <div className="desc-ctn">
            <div className="assign">
              <div className="left">
                <img src={owner} alt="" />
                <span>Owner</span>
              </div>
              <div className="right people">
                {/* <img src={avatar} alt="" /> */}
                <span>{task.ownerEmail}</span>
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
                {/* <img src={avatar} alt="" /> */}
                <span>{task.assignees}</span>
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
