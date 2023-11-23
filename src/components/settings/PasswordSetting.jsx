import FormFieldDots from "./FormFieldDots";
import { useState } from "react";

const PasswordSetting = () => {
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusNewPassword, setFocusNewPassword] = useState(false);
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);

  return (
    <div className="password_setting px-[41px] py-[39px]">
      <h2 className="font-bold text-xl">Password Setting</h2>

      <form className="pl-16 mt-10">
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            onFocus={() => setFocusPassword(true)}
          />
          {!focusPassword && <FormFieldDots />}
        </div>
        <div className="form-field">
          <label htmlFor="new_password">New Password</label>
          <input
            type="text"
            id="new_password"
            onFocus={() => setFocusNewPassword(true)}
          />
          {!focusNewPassword && <FormFieldDots />}
        </div>
        <div className="form-field">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="text"
            id="confirm_password"
            onFocus={() => setFocusConfirmPassword(true)}
          />
          {!focusConfirmPassword && <FormFieldDots />}
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
