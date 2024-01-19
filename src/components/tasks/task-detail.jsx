import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import idea from '../../../assets/images/Idea.svg';
import clock from '../../../assets/images/clock.svg';
import avatar from '../../../assets/images/avatar.png';
import DaysCounter from '../utils/months-count';
import PopoverCard from './popover';

const TaskDetail = () => {
  const { projectId } = useParams();
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log('Task completed!');
  };

  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [taskData, setTaskData] = useState(null);

  const userId = localStorage.getItem('user_id');

   useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`
        );
        const data = response.data;
        console.log('Task Data:', data);
        setTaskData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks || [];

  // Filter tasks based on the projectId from the URL
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const handleTaskDetailClick = () => {
    // Toggle the visibility of the popover when the task detail is clicked
    setPopoverVisible(!isPopoverVisible);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  return (
    <>
      {filteredTasks.map((task) => (
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
                  {/* <span>{task._id}</span> */}
                  <span>
                    Created by <b>Yash Ghori</b>
                  </span>
                  <div className="action flex gap-4">
                    <span className="badged">{task.status}</span>
                    <span className="badged1">{task.priority}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section gap-8">
              <div className="time badged1">
                <img src={clock} alt="" />
                <DaysCounter days={task.duration} onFinish={handleFinish} />
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
