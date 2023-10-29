
// import logo from '../../assets/images/icon.svg'

import Header from "../common/header";
import Sidebar from "../common/sidebar";


function Dashboard() {
    return (
        <div className="h-screen dash-body">
            <Header />
            <div className="flex">

                <Sidebar customClass="w-1/5"/>
                {/* Main Content */}
                <div className="w-4/5 mx-auto ">
                    <div className="grid gap-4 grid-cols-6">
                        <div className="dash-left col-span-4">
                            <div className="grid grid-rows-5 auto-rows-auto gap-10 content-center">
                                <div className=" p-4 row-span-1 bg-orange-300">
                                    <div className="col-span-2 bg-black">

                                    </div>
                                    <div className="col-span-2 bg-black"></div>
                                </div>
                                <div className=" p-4 row-span-4 bg-white">
                                    {/* Line Graph (You'll need a chart library) */}
                                </div>
                            </div>
                        </div>
                        <div className="right col-span-2">
                            <div className="p-4 bg-slate-400">
                                {/* Number of Projects */}
                            </div>
                            <div className="p-4 bg-red-300">
                                {/* Number of Tasks */}
                            </div>
                        </div>
                        {/* Add more content components here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
