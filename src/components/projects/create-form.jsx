import { Button } from "@/components/ui/button";
import Dummy from "./command-me";
import { Link } from "react-router-dom";
import CommandOutput from "./command-output";
import axios from "axios";
import { useState } from "react";
import line from "../../../assets/images/line.svg";
import cancel from "../../../assets/images/cancel.svg";
import TeamSelect from "./teamSelect";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Loader from "../utils/loader";

const CreateForm = () => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: [],
    employer: "",
    // phoneNo: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  const [normal, setNormal] = useState("default");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [projectStatus, setprojectStatus] = useState("");


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleMemberAdd = () => {
    const newMember = formData.teamInput;

    // Validate if the input follows an email format
    if (!validateEmail(newMember)) {
      setError("Invalid email format for team member.");
      return;
    }

    setFormData({
      ...formData,
      team: [...formData.team, newMember],
      teamInput: "",
    });
    setError(null); // Clear previous errors
  };

  const handleUserSelect = (selectedOption) => {
    // Do something with the selected user, e.g., add it to the team
    setFormData({
      ...formData,
      team: [...formData.team, selectedOption.label],
    });
  };

  const handleCancel = (index) => {
    const updatedTeam = [...formData.team];
    updatedTeam.splice(index, 1);
    setFormData({
      ...formData,
      team: updatedTeam,
    });
    setError(null); // Clear previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks for required fields
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
      const response = await axios.post(
        "https://pm-api.cyclic.app/project/create",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 201) {
        setFormData({ ...formData });
        setprojectStatus("Project Successfully Created")
        

      } else {
        setprojectStatus("Failed to create task");
      }
    } catch (error) {
      console.error("Error:", error);
      setprojectStatus("Failed to create task");
    } setLoading(false)
  };

  return (
    <div className="h-[calc(100vh-8rem)] overflow-y-scroll">
      <p className="text-gray-400 font-xl my-4">Projects / Create Project</p>
      <div className="bg-white rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="container input-ctn py-6">
            <div className="top flex gap-4">
              <div className="input w-2/6 ">
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
                <label htmlFor="type">Project Type</label>
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
                <label htmlFor="startDate">Start Date</label>
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
                <label htmlFor="endDate">End Date</label>
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
            <div className="middle py-4">
              <label htmlFor="description">Project Description</label>
              <textarea
                rows={3}
                id="description"
                name="description"
                value={formData.description}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="input w-2/5">
              <label htmlFor="employer">Employer's Name</label>
              <input
                type="text"
                id="employer"
                name="employer"
                value={formData.employer}
                className="mt-1 px-3 py-2 bg-white rounded-md border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-6 team">
              <div className="input">
                <label htmlFor="teamInput">Team</label>
                <TeamSelect
                  backendUrl="https://pm-api.cyclic.app/user/fetchUsers"
                  onSelectUser={handleUserSelect}
                />
                {error && <p className="text-red-500">{error}</p>}
                
              </div>
              {formData.team.length > 0 && (
                <div className="flex gap-1 mt-2 bg-[#E9F5FE] output">
                  {formData.team.map((member, index) => (
                    <div key={index}>
                      <div className="flex justify-between">
                        <span className=" p-1 rounded-md">{member}</span>
                        <button
                          type="button"
                          onClick={() => handleCancel(index)}
                          className="focus:outline-none"
                        >
                          <img src={cancel} alt="cancel" />
                        </button>
                      </div>
                      <img src={line} alt="line" />
                    </div>
                  ))}
                  
                </div>
              )}
            </div>
            {projectStatus && (
                  <Alert variant={normal}>
                    <AlertTitle>Status:</AlertTitle>
                    <AlertDescription>{projectStatus}</AlertDescription>
                  </Alert>
                )}
            {/* <CommandOutput/> */}
            <div className="buttons flex justify-end gap-6 mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#036EFF] text-white font-bold rounded-md px-4 text-md"
              >
                {loading ? <Loader /> : "Create"}
              </button>
              <button className="bg-[#EEF4FB] text-[#036EFF] font-bold rounded-md px-4 py-2 text-md">
                <Link to="/">Delete</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
