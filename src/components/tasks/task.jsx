import TaskTab from "./task-tab";
import CommonComponent from "./common";
import "./task.css";

const TaskPage = () => {
  return (
    <div className="rounded-md">
      <h2 className="text-lg py-3 text-[#9A93B3]">Project/Slumbeigil/Tasks</h2>
      <div className="bg-white rounded-lg">
        <CommonComponent />
        <TaskTab />
      </div>
    </div>
  );
};

export default TaskPage;
