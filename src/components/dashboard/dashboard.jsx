import LineGraph from "./line";
import projectImg from "../../../assets/images/Chart-project.png";
import taskImg from "../../../assets/images/task.svg";
import pie from "../../../assets/images/pie.svg";
import schedule from "../../../assets/images/Schedule.png";
import axios from "axios";
import { useState, useEffect } from "react";
import PieChart from "./pie";

function DashboardLayout() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const [taskData, setTaskData] = useState(null);

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
        // console.log("Task Data:", data);
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchTaskData();
  }, [userId]);

  const tasks = taskData?.tasks.length;
  const projects = taskData?.projects.length;

  // console.log(tasks, projects)



  const chartData = {
    labels: ['Product 1', 'Product 2', ],
    values: [50, 50],
    colors: ['#FB896B', 'limegreen',],
  };
  return (
    <div className="w-full px-4 bg-[#F0F6FF]">
      <h3 className="font-bold text-2xl pt-6">Dashboard</h3>
      <div className="wrapper">
        <div className="unit one bg-white rounded-md">
          <div className="flex gap-4 items-center">
            <img src={projectImg} alt="" />
            <p className="text-[#0C7FDA]">Number of Projects</p>
          </div>
          <h2 className="font-bold pt-4 text-[40px]">{projects}</h2>
        </div>

        <div className="unit two rounded-md">
        <div className="flex gap-4 items-center">
            <img src={taskImg} alt="" />
            <p className="text-[#0C7FDA]">Number of Tasks</p>
          </div>
          <h2 className="font-bold pt-4 text-[40px]">{tasks}</h2>
        </div>

      <div className="unit three rounded-md"><LineGraph/></div>

        <div className="unit four rounded-md">
        <div className="flex gap-4 items-center">
            <img src={pie} alt="" />
            <p className="text-[#0C7FDA]">Task Activity</p>
          </div>
          <PieChart data={chartData} chartId="pieChart" />
        </div>
        <div className="unit five rounded-md bg-[#0C7FDA]">
          <p className="font-bold text-[#F06A6A] text-[28px]">40 Days</p>
          <span className="text-[#CFEAFF]">Projects deadline</span>
          <img className="schedule" src={schedule} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
