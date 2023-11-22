import FormFieldDots from "./FormFieldDots";

const PasswordSetting = () => {
  return (
    <div className="password_setting px-[41px] py-[39px]">
      <h2 className="font-bold text-xl">Password Setting</h2>

      <form className="pl-16 mt-10">
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <FormFieldDots />
        </div>
        <div className="form-field">
          <label htmlFor="new_password">New Password</label>
          <input type="text" id="new_password" />
          <FormFieldDots />
        </div>
        <div className="form-field">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="text" id="confirm_password" />
          <FormFieldDots />
        </div>
        <button
          type="submit"
          className="text-white bg-[#5570F1] rounded-md my-4 py-[12px] px-[16px]"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordSetting;
