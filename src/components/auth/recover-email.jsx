import { useState } from "react";
import Copy from "./copy";

const RecoverEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [activationStatus, setActivationStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the OTP and new password to your server for validation and activation
      const response = await fetch("localhost:3000/user/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setActivationStatus("Activation successful");
      } else {
        setActivationStatus("Activation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setActivationStatus("Activation failed");
    }
  };

  return (
    <div>
      <div className="ctn h-screen justify-center flex flex-col bg-gray-100">
        <div className="from-wrapper w-full max-w-xl m-auto shadow-default bg-white rounded-lg border border-primary py-10 px-1">
          <div className="w-full max-w-sm m-auto">
            <div className="heading text-center py-10">
              <h1 className="font-bold text-2xl">Recover Password</h1>
              <p className="text-gray-400">
                Please enter email address attached to the account
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="mail">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-btn flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg px-12 max-w-full my-5 py-2"
                >
                  Recover Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <Copy />
      </div>

      {activationStatus && <p>{activationStatus}</p>}
    </div>
  );
};

export default RecoverEmail;
