import { Blair, Calendar, James, Karen, Sara, VerticalBar } from "./TaskImages";

const TaskComponent = ({ title, startdate, enddate, duration, day }) => {
  return (
    <div
      className="flex items-center justify-between h-16 shadow-lg py-5 px-10 rounded-xl text-sm z-[1000] bg-white my-3"
      style={{
        width: `${duration}px`,
        marginLeft: `${(day - 1) * 30}px`,
      }}
    >
      <div className="">
        <p className="font-bold ">{title}</p>
        <div className="flex gap-4">
          <img src={Calendar} alt="calender" />
          <p>
            {enddate}
          </p>
        </div>
      </div>
      {/* <div className="flex items-center">
        <div className="flex">
          <img src={James} alt="" className="team-member" />
          <img src={Karen} alt="" className="team-member" />
          <img src={Blair} alt="" className="team-member" />
          <div className="team-member relative">
            <img src={Sara} alt="pink-circle" />
            <p className="absolute top-2 left-2 text-[#D25B68]">+2</p>
          </div>
        </div>
        <img src={VerticalBar} alt="verticalbar" />
      </div> */}
    </div>
  );
};

export default TaskComponent;
