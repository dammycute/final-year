import React, { useState } from "react";
import axios  from "axios";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Loader from "../utils/loader";

const CreateSub = ({ projectId }) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    startDate: "",
    endDate: "",
    description: "",
    priority: "High",
    cost: 0,
    // duration: 1,
    attachments: [],
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
    const files = e.target.files;
    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.title ||
      !formData.type ||
      !formData.startDate ||
      !formData.endDate
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "attachments") {
          formData[key].forEach((file, index) => {
            formDataToSubmit.append(`${key}[${index}]`, file);
          });
        } else {
          formDataToSubmit.append(key, formData[key]);
        }
      });

      // Include projectId in the request data
      formDataToSubmit.append("projectId", projectId);

      const response = await axios.post(
        $`https://pm-api.cyclic.app/project/:projectId/task/create`,
        formDataToSubmit,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setFormData({
          title: "",
          type: "",
          startDate: "",
          endDate: "",
          description: "",
          priority: "High",
          cost: 0,
          duration: 1,
          attachments: [],
        });
        console.log("Task created successfully!");
      } else {
        console.error("Failed to create task");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] overflow-y-scroll">
      <p className="text-gray-400 font-xl my-4">Tasks / Create Task</p>
      <div className="bg-white rounded-md">
        <div className="container input-ctn py-6">
          <form onSubmit={handleSubmit}>
            <div className="top flex gap-4">
              <div className="input w-2/6">
                <Label htmlFor="title">Task Title</Label>
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
                <Label htmlFor="title">Task Type</Label>
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
                <Label htmlFor="title">Start Date</Label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input w-1/6">
                <Label htmlFor="title">End Date</Label>
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
              <Label htmlFor="title">Task Description</Label>
              <textarea
                rows={3}
                id="description"
                name="description"
                value={formData.description}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>

            <div className="high flex gap-6">
              <div className="select">
                <Label>Set Priority</Label>
                <Select className="mt-2">
                  <SelectTrigger className="w-[120px]">
                    <span>{formData.priority}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="input w-1/6">
                <Label htmlFor="duration">Duration (days)</Label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input w-2/6">
                <Label htmlFor="attachments">Attachments</Label>
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}

            <div className="buttons flex justify-end gap-6 mt-4">
              <button
                type="submit"
                className="bg-[#036EFF] text-white rounded-lg px-12 max-w-full my-5 py-2"
              >
                {loading ? <Loader /> : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSub;
