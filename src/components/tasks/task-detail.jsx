// TaskDetail.jsx

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import idea from '../../../assets/images/Idea.svg';
import clock from '../../../assets/images/clock.svg';
import avatar from '../../../assets/images/avatar.png';
import DaysCounter from '../utils/months-count';
import PopoverCard from './popover'; // Import the updated PopoverCard

const TaskDetail = () => {
  const { projectId } = useParams();

  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
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

  const filteredTasks = tasks.filter((task) => task.projectId === projectId);

  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const handleTaskDetailClick = (selectedTask) => {
    setSelectedTask(selectedTask);
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
          onClick={() => handleTaskDetailClick(task)}
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
                  <span>
                    Created by <b>{task.owner}</b>
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
                <DaysCounter days={task.duration} />
              </div>
              <div className="profile">
                <img src={avatar} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {isPopoverVisible && <PopoverCard task={selectedTask} onClose={closePopover} />}
    </>
  );
};

export default TaskDetail;
