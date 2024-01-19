import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Loader from "../utils/loader";
import { useNavigate } from "react-router-dom";

const Activation = () => {
  const [formData, setFormData] = useState({
    userId: "",
    otp: "",
  });

  const [loading, setLoading] = useState(false);
  const [activationStatus, setActivationStatus] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setFormData((prevData) => ({ ...prevData, userId: "657644c3bff21e9b9965a358" }));
    }
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.otp.trim()) {
      errors.otp = "Activation code is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setLoading(true)

    try {
      const response = await axios.post(
        "https://pm-api.cyclic.app/user/verify",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/login");
        setActivationStatus("Activation successful");
      } else {
        setActivationStatus("Activation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.error) {
      setActivationStatus(error.response.data.error);
    
    }}setLoading(false)
  };

  return (
    <div className="ctn h-screen justify-center flex flex-col bg-gray-100">
      <div className="from-wrapper w-full max-w-xl m-auto shadow-default bg-white rounded-lg border border-primary py-10 px-1">
        <div className="w-full max-w-sm m-auto">
          <div className="heading text-center py-10">
            <h1 className="font-bold text-2xl">Verify Email</h1>
            <p className="text-gray-400">
              A Verification code has been sent to your mail, enter code to
              activate your account.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
            />
            <div>
              <label htmlFor="otp">Verification Code</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
                  formErrors.otp ? "border-red-500" : ""
                }`}
                onChange={handleInputChange}
              />
              {formErrors.otp && (
                <p className="text-red-500">{formErrors.otp}</p>
              )}
            </div>

            <div className="form-btn flex items-center justify-center">
              <button
                type="submit"
                className="bg-black text-white rounded-lg px-12 max-w-full my-5 py-2"
                disabled={loading}
              >
                {loading ? <Loader /> : "Activate Account"}
              </button>
            </div>

            {activationStatus && (
              <Alert>
                <AlertTitle>Status:</AlertTitle>
                <AlertDescription>{activationStatus}</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activation;
