import { NavLink } from "react-router-dom"
import home from '../../assets/images/Home.svg'
import edit from '../../assets/images/edit.svg'
import setting from '../../assets/images/Setting.svg'
import PropTypes from 'prop-types';
import { useState } from 'react'


const Sidebar = ({ customClass }) => {

    // const [active, setActive] = useState({false})

    // const handleActive = () =>{

    // }

    return (
        <div className="boxes">
            {/* Sidebar */}
            <div className={`${customClass}  bg-white text-gray-400 height p-4 margin`}>
                <h1 className="text-2xl font-semibold">Sidebar</h1>
                <ul className="bg-white">
                    <NavLink to="/dashboard" className="flex gap-4 my-4">
                        <img src={home} alt="" />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/project" className="flex gap-4 my-4">
                        <img src={edit} alt="" />
                        <span>Project</span>
                    </NavLink>
                    <NavLink to="/setting" className="flex gap-4 my-4">
                        <img src={setting} alt="" />
                        <span>Setting</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    customClass: PropTypes.string,
};

export default Sidebar