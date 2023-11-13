import React, { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Activation = () => {
  const [formData, setFormData] = useState({
    user: "",
    activation_code: "",
  });

  const [activationStatus, setActivationStatus] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setFormData((prevData) => ({ ...prevData, user: storedUserId }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData)

  const [normal, setNormal] = useState("default");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUserId = localStorage.getItem("user_id");
    console.log(storedUserId);
    try {
      const response = await fetch(
        "localhost:3000/user/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        window.location.href = "/login";
        setActivationStatus("Activation successful");
      } else {
        setActivationStatus("Activation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setNormal("destructive");
      setActivationStatus("Activation failed");
    }
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
              id="user"
              name="user"
              value={formData.user}
              onChange={handleInputChange}
            />
            <div>
              <label htmlFor="activation_code">Verification Code</label>
              <input
                type="text"
                id="activation_code"
                name="activation_code"
                value={formData.activation_code}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-btn flex items-center justify-center">
              <button
                type="submit"
                className="bg-black text-white rounded-lg px-12 max-w-full my-5 py-2"
              >
                Activate Account
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
