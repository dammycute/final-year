import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useParams } from 'react-router-dom';
import axios from "axios";

const TeamMemberSelect = ({ userId, selectedTeam, onChange }) => {
  const [projectData, setProjectData] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `https://pm-api.cyclic.app/project/${projectId}/team`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = response.data;
        console.log("Project Data:", data);
        setProjectData(data);
        console.log(projectData?.teamMembers);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [userId]);

  // Extract team emails from the projectData
  const teamEmails = projectData?.teamMembers.flatMap(project => project) || [];

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
