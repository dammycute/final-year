import {
  BlockSymbol,
  Gallery,
  Group1,
  Person,
  ProfilePhoto,
  Scraps,
  Upload,
  Vector,
} from "./settingImages";
import IconTextBox from "../ui/IconTextBox";
import EditProfileForm from "./EditProfileForm";

const GeneralSettings = () => {
  return (
    <div className="settings_items setting_home_grid">
      <div className="mt-2 pt-4 text-center flex flex-col shadow-lg rounded-xl setting_profile_disp overflow-hidden">
        <div className="w-[130px] border-[3px] rounded-full border-[#ED2590] mx-auto">
          <img src={ProfilePhoto} alt="ProfilePhoto" className="w-full" />
        </div>
        <p className="font-bold text-[#4B4B4B] mt-4 leading-6">Yash Ghori</p>
        <p className="text-sm text-[#4B4B4B] mt-2 leading-6">
          Ahmeddabad, Gujarat <br /> India
        </p>
        <div className="px-[30px] flex flex-col justify-end mb-20">
          <hr />
          <IconTextBox text="UI-intern" icon={Vector} />
          <IconTextBox text="on-teak" icon={BlockSymbol} />
          <hr />
          <IconTextBox text="+91 7048144030" icon={Group1} />
          <IconTextBox text="yghori@asite.com" icon={Scraps} />
          <IconTextBox text="PDT -I" icon={Gallery} />
        </div>
      </div>

      {/* Edit Profile Section */}

      <div className="setting_profile_edit mt-6 p-4 shadow-sm shadow-gray-500 overflow-y-scroll h-full">
        <h2 className="font-bold text-lg">Edit Profile</h2>
        <div className="flex items-center gap-6 my-9">
          <div className="w-20 h-20 bg-[#CACACA] grid place-items-center rounded-full">
            <img src={Person} alt="person" className="w-8" />
          </div>
          <button className="flex gap-1 text-xs items-center font-bold bg-[#F0F6FF] py-[0.4rem] px-8 rounded-sm">
            <img src={Upload} alt="upload" className="w-8" />
            <p className="text-[#0C7FDA]">Upload profile image</p>
          </button>
        </div>
        <EditProfileForm />
        <div className="flex flex-col justify-center mb-16">
          <button className="bg-[#5570F1] rounded-md py-[12px] px-[16px] w-36 text-white my-10 self-center">
            Save
          </button>

          <div className="flex items-center gap-10 mt-4">
            <div className="form-data">
              <input type="text" placeholder="........@email.com" />
            </div>
            <button className="bg-[#F0F6FF] text-[#0C7FDA] py-[0.8rem] px-5 rounded-xl font-bold">
              Update
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-20">
            Note: You’ll confirmation email within 10 mins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
