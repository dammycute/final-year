import TaskComponent from "./TaskComponent";
import dateDiffInDays from "../utils/dateDifference";

const project_duration = "6 weeks";
const numberOfDays = Number(project_duration.slice(" ")[0]) * 7;
const duration_array = ["M", "T", "W", "T", "F", "S", "S"];

const tasks = [
  {
    title: "Make an Automatic Payment System that enable the design",
    startdate: new Date("2023-11-01"),
    enddate: new Date("2023-11-30"),
  },
  {
    title: "Design Gateway",
    startdate: new Date("2023-11-05"),
    enddate: new Date("2023-12-06"),
  },
  {
    title: "Develop Home Page",
    startdate: new Date("2023-12-06"),
    enddate: new Date("2023-12-23"),
  },
];

console.log(new Date("November 21,2023").getUTC);

let number = 0;
const newArray = [];

while (number < numberOfDays) {
  newArray.push(duration_array[number % duration_array.length]);
  number++;
}

// console.log(newArray);

const TasksTimeline = () => {
  return (
    <>
      <div className=" relative">
        <div className="h-[17rem] mt-5 overflow-scroll flex flex-nowrap">
          <TableColumn />
        </div>
        <div className="absolute top-5 left-0">
          {tasks.map((task) => {
            const days = dateDiffInDays(task.startdate, task.enddate);
            const duration = days * 30;

            return (
              <TaskComponent
                key={Math.random * 800030303}
                startdate={`${task.startdate.getFullYear()}/${task.startdate.getMonth()}/${task.startdate.getDate()}`}
                enddate={`${task.enddate.getFullYear()}/${task.enddate.getMonth()}/${task.enddate.getDate()}`}
                title={task.title}
                duration={duration}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TasksTimeline;

const TableColumn = () => {
  const column = newArray.map((day, index) => (
    <div
      key={index}
      className={
        day == "S"
          ? "text-gray-400 w-[30px] h-full bg-[#f7f7f7] border border-r border-gray-200 text-center text-sm"
          : "text-gray-400 w-[30px] h-full border border-r border-gray-200 text-center text-sm"
      }
    >
      {day}
    </div>
  ));

  return <div className="flex flex-nowrap">{column}</div>;
};
