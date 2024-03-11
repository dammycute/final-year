import { Menu, Plus } from "./TaskImages";
import TaskBox from "./TaskBox";

const TaskProgress = ({ title, cdata, bdata, pdata }) => {
  return (
    <div className="shadow-md rounded-lg">
      <div className="bg-lightblue py-3 px-4 text-lg font-bold flex items-center justify-between">
        <p>{title}</p>
        <img src={Menu} alt="menu" />
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="border border-dashed py-3 flex justify-center rounded-lg">
          <img src={Plus} alt="plus" className="w-4" />
        </div>
        {title === "Backlog" && bdata.map((dt) => (
          <TaskBox
            key={dt.title}
            title={dt.title}
            details={dt.description}
            // attachments={dt.attachments}
            // messages={dt.messages}
            duration={dt.duration}
          />
        ))}
        {title === "In Progress" && pdata.map((dt) => (
          <TaskBox
            key={dt.title}
            title={dt.title}
            details={dt.description}
            // attachments={dt.attachments}
            // messages={dt.messages}
            duration={dt.duration}
          />
        ))}

        {title === "Completed" && cdata.map((dt) => (
          <TaskBox
            key={dt.title}
            title={dt.title}
            details={dt.description}
            // attachments={dt.attachments}
            // messages={dt.messages}
            duration={dt.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskProgress;
