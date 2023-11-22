import { Button } from "@/components/ui/button";
import Dummy from "./command-me";
import { Link } from "react-router-dom";
import CommandOutput from "./command-output";
import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    employer: "",
    phoneNo: "",
    type: "",
    startDate: "",
    endDate: "",
    // employer: "",
  });

  // Additional state for API-related data, such as loading, errors, etc.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Assuming the backend returns the created task ID
      const response = await axios.post("/task/create", formData);

      if (response.status === 200 || response.status === 201) {
        const createdTaskId = response.data.taskId;
        setFormData({ ...formData, taskId: createdTaskId });
        console.log("Task created successfully!");
      } else {
        console.error("Failed to create task");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await axios.delete(`/task/delete/${formData.taskId}`);

      if (response.status === 200) {
        console.log("Task deleted successfully!");
        // Optionally, you can reset the form or redirect the user after deletion
        setFormData({
          taskId: null, // Reset taskId after deletion
          title: "",
          description: "",
          priority: "",
          // ... other fields
        });
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-gray-400 font-xl my-4">Projects / Create Project</p>
      <div className="bg-white  rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="container input-ctn py-6">
            <div className="top flex gap-4">
              <div className="input w-2/6">
                <label htmlFor="title">Project Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input w-2/6">
                <label htmlFor="title">Project Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input w-1/6">
                <label htmlFor="title">Start Date</label>
                <input
                  type="date"
                  id="date"
                  name="startDate"
                  value={formData.startDate}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input w-1/6">
                <label htmlFor="title">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="middle p-4">
              <label htmlFor="title">Project Description</label>
              <textarea
                type="textarea"
                rows={3}
                id="description"
                name="description"
                value={formData.description}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="input w-2/6">
              <label htmlFor="title">Employer's Name</label>
              <input
                type="text"
                id="employer"
                name="employer"
                value={formData.employer}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="buttom flex gap-10 py-7">
              <Dummy />
              <CommandOutput />
            </div>
            <div className="buttons flex justify-end gap-6">
              <button
                type="submit"
                className="bg-[#036EFF] text-white font-bold rounded-md px-4 text-md"
              >
                Create
              </button>
              <button
                type="submit" onClick={handleDelete}
                className="bg-[#EEF4FB] text-[#036EFF] font-bold rounded-md px-4 py-2 text-md"
              >
                Delete
              </button>
            </div>
          </div>
          {/* {error && <p className="text-red-500">{error}</p>} */}
        </form>
        
      </div>
    </div>
  );
};

export default CreateForm;
