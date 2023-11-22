import clock from "../../../assets/images/clock.svg";
import MonthsCounter from "../utils/months-count";

const CommonComponent = () => {
  const targetDate = new Date("2023-12-01");
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log("Task completed!");
  };

  return (
    <div className="py-4 pl-8 pr-16">
      <div className="top-bar flex justify-between items-center">
        <div className="top-left">
          <h2 className="font-bold">Slumbeigil</h2>
          <div className="top-left-text flex gap-4 items-center">
            <p className="text-[#9A93B3]">
              Edit or modify all card as you want
            </p>
            <p className="badged1 text-sm">OnTrack</p>
          </div>
        </div>
        <div className="top-right flex gap-6 text-sm">
          <div className="sect text-center">
            <p className="mb-2">Time Spent</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <MonthsCounter
                className="px-4"
                targetDate={targetDate}
                onFinish={handleFinish}
              />
            </div>
          </div>
          <div className="sect text-center">
            <p className="mb-2">Deadline</p>
            <div className="time badged1">
              <img src={clock} alt="" />
              <MonthsCounter
                className="px-4"
                targetDate={targetDate}
                onFinish={handleFinish}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonComponent;
