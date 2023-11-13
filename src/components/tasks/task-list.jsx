
import TaskDetail from "./task-detail";
import { Link } from "react-router-dom";
import CommonComponent from "./common";

const TaskList = () => {
  
  return (
    <div>
      {/* <CommonComponent/> */}
      {/* <TaskSearch/> */}
      {/* <TaskTab/> */}
      <TaskDetail />
      <TaskDetail />
      <TaskDetail />
      <TaskDetail />
    </div>
  );
};

export default TaskList;
