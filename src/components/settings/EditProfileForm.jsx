import React, { useState } from "react";
import axios from "axios";

import { Person, Upload } from "./settingImages";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    nationality: "",
    avatar: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      avatar: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for required fields
    if (!formData.firstName || !formData.lastName) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("profileImage", formData.avatar);
      // Append other form data fields
      Object.keys(formData).forEach((key) => {
        if (key !== "avatar") {
          formDataToSubmit.append(key, formData[key]);
        }
      });

      const token = localStorage.getItem("token");

      const response = await axios.patch("https://pm-api.cyclic.app/user/edit", formDataToSubmit, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Profile updated successfully!");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-6 my-9">
        <div className="w-20 h-20 bg-[#CACACA] grid place-items-center rounded-full">
          <img src={Person} alt="person" className="w-8" />
        </div>
        <label htmlFor="profileImage" className="cursor-pointer">
          <div className="flex gap-1 text-xs items-center font-bold bg-[#F0F6FF] py-[0.4rem] px-8 rounded-sm">
            <img src={Upload} alt="upload" className="w-8" />
            <p className="text-[#0C7FDA]">Upload profile image</p>
          </div>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="flex gap-8 mb-8">
        <div className="form-data">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Yash"
            id="firstname"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-data">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Ghori"
            id="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="form-data">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            placeholder="Designation"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-data">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            placeholder="Nigeria"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-[#5570F1] text-white rounded-lg px-12 max-w-full my-5 py-2"
        disabled={loading}
      >
        {loading ? "Updating..." : "Save"}
      </button>
    </form>
  );
};

export default EditProfileForm;
