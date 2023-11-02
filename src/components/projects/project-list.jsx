import idea from '../../assets/images/idea.svg'
import date from '../../assets/images/calendar.svg'
import clock from '../../assets/images/clock.svg'
import comment from '../../assets/images/Comments.svg'
import more from '../../assets/images/more-vertical.svg'
import avatar from '../../assets/images/avatar.png'
import Header from '../common/header'
import { Button } from "@/components/ui/button"
import Sidebar from '../common/sidebar'


const ProjectList = () => {
    return (
        <div className='dash-body h-screen'>
            <Header />

            <div className="layout flex">
                <Sidebar customClass='w-1/6' />

                <div className="container w-5/6">
                    <div className="project-header flex justify-between items-center pt-4">
                        <h1 className='text-3xl font-bold '>Projects</h1>
                        <Button className='bg-[#036EFF] px-4 text-xl'>Create</Button>
                    </div>
                    <div className="wrapper1 shadow-md">
                        <div className="section">
                            <img src={idea} alt="" />
                            <div className="section-text">
                                <h4 className='font-bold'>Make an Automatic System that enable the design</h4>
                                <div className="span">
                                    <span>#402235</span>
                                    <span>Opened 10 days ago by <b>Yash Ghori</b></span>
                                    <div className="action flex gap-4">
                                        <span className='badged'>canceled</span>
                                        <span className='badged1'>completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="date">
                                <p>Start Date</p>
                                <div className="below flex gap-4">
                                    <img src={date} alt="" />
                                    <span>25/3/2023</span>
                                </div>
                            </div>
                            <div className="date">
                                <p>End Date</p>
                                <div className="below flex gap-4">
                                    <img src={date} alt="" />
                                    <span>25/3/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="time badged1">
                                <img src={clock} alt="" />
                                <p className='time-text'>00: 30: 00</p>
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
            </div>
        </div>
    )
}

export default ProjectList