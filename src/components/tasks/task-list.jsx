import TaskDetail from "./task-detail";

const TaskList = ({ id }) => {
  return (
    <div id={id}>
      <TaskDetail />
      <TaskDetail />
      <TaskDetail />
      <TaskDetail />
    </div>              
  );
};

export default TaskList;
