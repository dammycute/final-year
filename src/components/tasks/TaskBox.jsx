import {
  Attachment,
  Clock,
  Hashir,
  Joshua,
  Message,
  Daniel,
  Plus,
} from "./TaskImages";

const TaskBox = ({ title, description, duration }) => {
  return (
    <div className="pt-3 p-4 pr-8 shadow-md rounded-lg">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-lg text-[#223759] font-bold">{title}</p>
          <div className="flex gap-2">
            <img src={Clock} alt="clock" />
            <p>{duration} days</p>
          </div>
        </div>
        <p className="my-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex gap-2">
              <img src={Attachment} alt="attachment" />
              <p>7</p>
            </div>
            <div className="flex gap-4">
              <img src={Message} alt="message" />
              <p>3</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-lightblue p-2 rounded-full">
              <img src={Plus} alt="pink-circle" />
            </div>
            <div className="flex">
              <img src={Hashir} alt="" className="team-member" />
              <img src={Daniel} alt="" className="team-member" />
              <img src={Joshua} alt="" className="team-member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
