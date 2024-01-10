import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const TeamMemberSelect = ({ userId, selectedTeam, onChange }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${userId}/projects-and-tasks`
        );
        const data = response.data;
        console.log("Project Data:", data);
        setProjectData(data);
        console.log(projectData?.projects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [userId]);

  // Extract team emails from the projectData
  const teamEmails = projectData?.projects.flatMap(project => project.team) || [];

  const teamOptions = teamEmails.map((email) => ({ value: email, label: email }));
  const selectedOptions = selectedTeam.map((email) => ({ value: email, label: email }));

  const handleChange = (selectedOptions) => {
    const selectedTeam = selectedOptions.map((option) => option.value);
    onChange(selectedTeam);
  };

  return (
    <Select
      isMulti
      options={teamOptions}
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Select team members"
      className="select"
      styles={{
        menu: (provided) => ({
          ...provided,
          top: "auto",
          bottom: "100%",
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: "150px", // Adjust the max height as needed
          overflowY: "auto",
        }),
      }}
    />
  );
};

export default TeamMemberSelect;
