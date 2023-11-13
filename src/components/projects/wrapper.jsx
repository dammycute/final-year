import React from "react";
import { Button } from "@/components/ui/button"
import idea from '../../assets/images/idea.svg'
import date from '../../assets/images/calendar.svg'
import clock from '../../assets/images/clock.svg'
import comment from '../../assets/images/Comments.svg'
import more from '../../assets/images/more-vertical.svg'
import avatar from '../../assets/images/avatar.png'
import { Link } from 'react-router-dom'
import CountdownTimer from "../utils/time";

const Wrapper = () => {
  const handleFinish = () => {
    // Logic to execute when the countdown finishes
    console.log('Task completed!');
  };
  return (
    <>
      <div className="project-header flex justify-between items-center pt-2">
        <h1 className="text-3xl font-bold ">Projects</h1>
        <Button className="bg-[#036EFF] px-4 text-xl"><Link to="/create" >Create</Link></Button>
      </div>
      <div className="contain bg-white mt-2 p-4 rounded-lg">

        <div className="wrapper1">
          <div className="section">
            <img src={idea} alt="" />
            <div className="section-text">
              <h1 id="hr" className="font-bold">
                Make an dynamic System that enable the design
              </h1>
              <div className="span">
                <span>#402235</span>
                <span>
                  Opened 10 days ago by <b>Yash Ghori</b>
                </span>
                <div className="action flex gap-2">
                  <span className="badged">canceled</span>
                  <span className="badged1">completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="date">
              <p>Start Date</p>
              <div className="below flex gap-2 items-center">
                <img src={date} alt="" />
                <span>25/3/2023</span>
              </div>
            </div>
            <div className="date">
              <p>End Date</p>
              <div className="below flex gap-2 items-center">
                <img src={date} alt="" />
                <span>25/3/2023</span>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="time badged1">
              <img src={clock} alt="" />
              <CountdownTimer className="px-4" initialHours={2} onFinish={handleFinish} />
            </div>
            <div className="profile">
              <img src={avatar} alt="" />
            </div>
            <div className="comment">
              <img src={comment} alt="" />
            </div>
            <div className="more">
              <img src={more} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
