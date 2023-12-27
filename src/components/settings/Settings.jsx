import { useState, useEffect } from "react";
import {
  BlockSymbol,
  ProfilePhoto,
  Vector,
  Scraps,
} from "./settingImages";
import IconTextBox from "../ui/IconTextBox";
import EditProfileForm from "./EditProfileForm";

const GeneralSettings = () => {
  const userId = localStorage.getItem("user_id");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://pm-api.cyclic.app/user/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const user = localStorage.getItem('userId')
    console.log(user)

    fetchUserData();
  }, [userId]);

  return (
    <div className="settings_items setting_home_grid">
      <div className="mt-2 pt-4 text-center flex flex-col shadow-lg rounded-xl setting_profile_disp overflow-hidden">
        <div className="w-[130px] border-[3px] rounded-full border-[#ED2590] mx-auto">
          <img src={userData?.avatar} alt="ProfilePhoto" className="w-full" />
        </div>
        <p className="font-bold text-[#4B4B4B] mt-4 leading-6">{`${userData?.firstName} ${userData?.lastName}`}</p>
        <p className="text-sm text-[#4B4B4B] mt-2 leading-6">
          {`${userData?.nationality}`}
        </p>
        <div className="px-[30px] flex flex-col justify-end mb-20">
          <hr />
          <IconTextBox text={userData?.designation} icon={Vector} />
          {/* <IconTextBox text={userData?.someOtherField} icon={BlockSymbol} /> */}
          <hr />
          <IconTextBox text={userData?.email} icon={Scraps} />
        </div>
      </div>

      {/* Edit Profile Section */}

      <div className="setting_profile_edit mt-6 p-4 shadow-sm shadow-gray-500 overflow-y-scroll h-full">
        <h2 className="font-bold text-lg">Edit Profile</h2>
        
        <EditProfileForm />
      </div>
    </div>
  );
};

export default GeneralSettings;
