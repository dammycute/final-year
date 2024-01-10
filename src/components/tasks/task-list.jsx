import TaskDetail from "./task-detail";

const TaskList = ({ id }) => {
  return (
    <div id={id} className="px-6">
      <TaskDetail />
    </div>              
  );
};

export default TaskList;
