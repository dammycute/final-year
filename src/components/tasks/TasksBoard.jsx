import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TaskProgress from "./TaskProgress";

const TasksBoard = () => {
  const [taskData, setTaskData] = useState(null);
  const userId = localStorage.getItem("user_id");
  const { projectId } = useParams();

  useEffect(() => {
    const fetchTaskData = async () => {
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
        // console.log('Taskb Data:', data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks || [];
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);
  // console.log(filteredTasks)

  const components = [
    {
      title: "Backlog",
      data: [
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "75",
          messages: "8",
          duration: 12,
        },
        {
          title: "Mockups",
          details: "Create a 12 mockups for mobile iphone 13pro max",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "UI Animation",
          details:
            "Micro interaction loading and progress, story telling, Navigation",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },

    {
      title: "In Progress",
      data: [
        {
          title: "User interface",
          details: "Design new user interface design for food delivery app",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Usability Testing",
          details: "Perform the usability testing for the newly develop app",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },

    {
      title: "Completed",
      data: [
        {
          title: "Mind Mapping",
          details:
            "Mind mapping for the food delivery app for by targeting young users",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "Food Research",
          details:
            "Food design is required for our new project let’s research the best practices.",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
        {
          title: "User Feedback",
          details:
            "Perform the user survey and take necessary steps to solve their problem with existing one",
          attachments: "7",
          messages: "4",
          duration: 12,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mx-8">
      {components.map((component) => {
        return (
          <TaskProgress
            key={component.title}
            title={component.title}
            data={filteredTasks}
          />
        );
      })}
    </div>
  );
};

// assignee
// :
// "6569a73a880e7bfc3e531ef8"
// attachments
// :
// []
// createdAt
// :
// "2024-01-06T17:25:10.534Z"
// description
// :
// "This is a sample task description"
// duration
// :
// 4
// endDate
// :
// "2024-01-10T00:00:00.000Z"
// estimatedCosts
// :
// {labor: 500, materials: 200, otherExpenses: 100}
// owner
// :
// "6569a73a880e7bfc3e531ef8"
// priority
// :
// "high"
// projectId
// :
// "6599828cb19fc0665e8038f7"
// startDate
// :
// "2024-01-06T00:00:00.000Z"
// status
// :
// "Not Started"
// title
// :
// "Sample Task2356"
// type
// :
// "Sample Type"
// updatedAt
// :
// "2024-01-06T17:25:10.534Z"
// __v
// :
// 0
// _id
// :
// "65998cf6ae538f9c501effde"

export default TasksBoard;
