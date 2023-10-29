import { Link } from "react-router-dom"
import home from '../../assets/images/Home.svg'
import edit from '../../assets/images/edit.svg'
import setting from '../../assets/images/Setting.svg'
import PropTypes from 'prop-types';


const Sidebar = ({ customClass }) => {
    return (
        <>
            {/* Sidebar */}
            <div className={`${customClass} bg-white text-gray-400 h-full p-4 margin`}>
                <h1 className="text-2xl font-semibold">Sidebar</h1>
                <ul className="bg-white">
                    <Link to="/dashboard" className="flex gap-4 my-4">
                        <img src={home} alt="" />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/project" className="flex gap-4 my-4">
                        <img src={edit} alt="" />
                        <span>Project</span>
                    </Link>
                    <Link to="/setting" className="flex gap-4 my-4">
                        <img src={setting} alt="" />
                        <span>Setting</span>
                    </Link>
                </ul>
            </div>
        </>
    )
}

Sidebar.propTypes = {
    customClass: PropTypes.string,
};

export default Sidebar