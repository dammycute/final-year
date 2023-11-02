
// import logo from '../../assets/images/icon.svg'

import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LineGraph from "./line";


function Dashboard() {
    return (
        <div className="h-screen dash-body">
            <Header />
            <div className="flex">

                <Sidebar customClass="w-1/5" />
                {/* Main Content */}
                <div className="w-4/5 container">
                    <h3 className="font-bold text-2xl pt-6">Dashboard</h3>
                    <div className="wrapper">
                        <div className="unit one">1</div>
                        <div className="unit two">2</div>
                        <div className="unit three">
                            <LineGraph/>
                        </div>
                        <div className="unit four">4</div>
                        <div className="unit five">5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
