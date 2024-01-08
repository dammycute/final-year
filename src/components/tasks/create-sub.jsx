import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import Select from "react-select";
import Loader from "../utils/loader";
import TeamMemberSelect from "./assignee";

const CreateSub = ({ projectId }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    startDate: "",
    endDate: "",
    description: "",
    priority: "",
    otherExpenses: 0,
    attachments: [],
    projectId: projectId,
    assignee: [],
    status: "Not Started",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePriorityChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      priority: selectedOption.value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...files],
    });
  };

  const handleTeamChange = (selectedTeam) => {
    setFormData({
      ...formData,
      assignee: selectedTeam,
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

    // Append JSON data as a blob to the FormData
    formDataToSubmit.append(
      'taskData',
      new Blob([JSON.stringify({ ...formData, projectId })], {
        type: 'application/json',
      })
    );

    // Append each file to the FormData
    formData.attachments.forEach((file, index) => {
      formDataToSubmit.append(`file_${index}`, file);
    });

    const response = await axios.post(
      `https://pm-api.cyclic.app/project/${projectId}/task`,
      formDataToSubmit,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      }
    ); 

      if (response.status === 201) {
        console.log("Task created successfully!");
        console.log(response.data)
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
                <Label htmlFor="type">Task Type</Label>
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
                <Label htmlFor="startDate">Start Date</Label>
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
                <Label htmlFor="endDate">End Date</Label>
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
            <div className="middle py-6">
              <Label htmlFor="description">Task Description</Label>
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
                <Select
                  className="mt-2 w-[200px]"
                  value={{ value: formData.priority, label: formData.priority }}
                  onChange={handlePriorityChange}
                  options={[
                    { value: "high", label: "High" },
                    { value: "medium", label: "Medium" },
                    { value: "low", label: "Low" },
                  ]}
                />
              </div>

              {/* <div className="">
                <input
                  id="projectId"
                  name="projectId"
                  value={formData.projectId}
                  type="hidden"
                  className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div> */}

              <div className="input">
                <Label htmlFor="type">Cost</Label>
                <input
                  type="text"
                  id="otherExpenses"
                  name="otherExpenses"
                  value={formData.otherExpenses}
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
            {/* <div className="flex w-full  mt-8 gap-6"> */}
            <div className="w-full mt-6">
              <Label>Assign Team Members</Label>
              <TeamMemberSelect
                userId={localStorage.getItem("user_id")}
                selectedTeam={formData.assignee}
                onChange={handleTeamChange}
              />
            </div>

            {/* </div> */}
            <div className="select mt-6">
              <Label>Task Status</Label>
              <Select
                className="mt-2 w-[300px]"
                value={{ value: formData.status, label: formData.status }}
                onChange={(selectedOption) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    status: selectedOption.value,
                  }))
                }
                options={[
                  { value: "Not Started", label: "Not Started" },
                  { value: "In Progress", label: "In Progress" },
                  { value: "In Review", label: "In Review" },
                  { value: "Completed", label: "Completed" },
                ]}
              />
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
